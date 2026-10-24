'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from '@/styles/portfolio.module.css';

interface PixelDriveShowcaseProps {
  onShowToast: (msg: string) => void;
}

interface SceneryItem {
  id: number;
  type: 'pine_tree' | 'round_tree' | 'cottage' | 'townhouse' | 'lamppost';
  x: number;
  width: number;
}

interface CloudItem {
  x: number;
  y: number;
  width: number;
  type: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

interface SpeedLine {
  x: number;
  y: number;
  len: number;
  speed: number;
}

export default function PixelDriveShowcase({ onShowToast }: PixelDriveShowcaseProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Keep live refs for animation loop
  const isHoveredRef = useRef(false);
  const isDarkRef = useRef(true);

  isHoveredRef.current = isHovered;
  isDarkRef.current = isDark;

  // Detect theme dynamically
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      setIsDark(theme === 'dark');
    };
    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleHonkClick = () => {
    onShowToast("Cruising smoothly! 🚗💨");
  };

  // Main 60FPS Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nextItemId = 1;

    // Simulation states
    let currentSpeed = 3.0; // pixels per frame
    let wheelAngle = 0;
    let frameCount = 0;

    // Initial clouds
    const clouds: CloudItem[] = [
      { x: 50, y: 15, width: 34, type: 0 },
      { x: 220, y: 24, width: 28, type: 1 },
      { x: 420, y: 12, width: 40, type: 0 },
      { x: 580, y: 20, width: 32, type: 1 },
    ];

    // Initial scenery items (homes and trees with clean, spaced-out density)
    const scenery: SceneryItem[] = [];
    const types: SceneryItem['type'][] = ['pine_tree', 'cottage', 'round_tree', 'townhouse'];
    let curX = 260;
    // Spawn only 2-3 initial items spaced nicely apart
    for (let i = 0; i < 3; i++) {
      const type = types[i % types.length];
      const width = type === 'townhouse' ? 44 : type === 'cottage' ? 36 : type === 'pine_tree' ? 22 : 26;
      scenery.push({
        id: nextItemId++,
        type,
        x: curX,
        width,
      });
      curX += width + 220 + Math.random() * 100;
    }

    // Particles and speed lines
    const particles: Particle[] = [];
    const speedLines: SpeedLine[] = [];

    // Road dashes texture
    const roadDashes: number[] = [];
    for (let d = 0; d < 700; d += 36) {
      roadDashes.push(d);
    }

    // Ground pebbles texture
    const pebbles: { x: number; y: number; w: number }[] = [];
    for (let p = 0; p < 700; p += 22) {
      pebbles.push({
        x: p,
        y: (p * 7) % 16,
        w: p % 3 === 0 ? 3 : 2,
      });
    }

    // Resize handler
    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(125 * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `125px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = false;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      frameCount++;
      const rect = containerRef.current?.getBoundingClientRect();
      const viewWidth = rect ? rect.width : 640;
      const viewHeight = 125;
      const groundY = 96;

      // Smooth acceleration on hover
      const targetSpeed = isHoveredRef.current ? 6.2 : 3.0;
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      wheelAngle += currentSpeed * 0.16;

      // Color palette based on theme matching page background seamlessly
      const dark = isDarkRef.current;
      const colors = {
        bg: dark ? '#09090b' : '#ffffff',
        main: dark ? '#fafafa' : '#18181b',
        secondary: dark ? '#71717a' : '#8e8e93',
        subtle: dark ? '#27272a' : '#e4e4e7',
        lightSubtle: dark ? '#1c1c20' : '#f4f4f5',
        windowGlow: dark ? '#fef08a' : '#fde047',
        headlightBeam: dark ? 'rgba(254, 240, 138, 0.22)' : 'rgba(245, 158, 11, 0.18)',
        taillight: '#ef4444',
      };

      // 1. Clear background to blend seamlessly into page
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, viewWidth, viewHeight);

      // 2. Render & Update Clouds (Slow parallax)
      ctx.fillStyle = colors.subtle;
      clouds.forEach((cloud) => {
        cloud.x -= currentSpeed * 0.25;
        if (cloud.x + cloud.width < -10) {
          cloud.x = viewWidth + Math.random() * 50;
        }

        // Draw Chrome Dino style pixel cloud
        const cx = Math.floor(cloud.x);
        const cy = Math.floor(cloud.y);
        ctx.fillRect(cx + 8, cy, 18, 3);
        ctx.fillRect(cx + 4, cy + 3, 26, 4);
        ctx.fillRect(cx, cy + 7, 34, 3);
      });

      // 3. Render & Update Scenery (Trees and Homes)
      scenery.forEach((item) => {
        item.x -= currentSpeed;
        const ix = Math.floor(item.x);

        if (item.type === 'pine_tree') {
          // Pine Tree
          ctx.fillStyle = colors.secondary;
          ctx.fillRect(ix + 9, groundY - 14, 4, 14);
          ctx.fillStyle = colors.main;
          ctx.fillRect(ix + 1, groundY - 18, 20, 4);
          ctx.fillRect(ix + 3, groundY - 24, 16, 6);
          ctx.fillRect(ix + 6, groundY - 30, 10, 6);
          ctx.fillRect(ix + 9, groundY - 35, 4, 5);
          ctx.fillRect(ix + 10, groundY - 38, 2, 3);
        } else if (item.type === 'round_tree') {
          // Deciduous Tree with fluffy pixel canopy
          ctx.fillStyle = colors.secondary;
          ctx.fillRect(ix + 11, groundY - 16, 4, 16);
          ctx.fillStyle = colors.main;
          ctx.fillRect(ix + 3, groundY - 26, 20, 10);
          ctx.fillRect(ix + 1, groundY - 36, 24, 10);
          ctx.fillRect(ix + 5, groundY - 42, 16, 6);
          ctx.fillRect(ix + 8, groundY - 45, 10, 3);
        } else if (item.type === 'cottage') {
          // Cozy pixel home with pitched roof & chimney
          const baseH = 22;
          const baseY = groundY - baseH;

          // House walls
          ctx.fillStyle = colors.subtle;
          ctx.fillRect(ix + 2, baseY, 32, baseH);

          // Walls outline
          ctx.fillStyle = colors.main;
          ctx.strokeRect(ix + 2.5, baseY + 0.5, 31, baseH - 1);

          // Pitched Roof (stepped pixel triangle)
          ctx.fillStyle = colors.main;
          ctx.fillRect(ix, baseY, 36, 3);
          ctx.fillRect(ix + 3, baseY - 3, 30, 3);
          ctx.fillRect(ix + 6, baseY - 6, 24, 3);
          ctx.fillRect(ix + 9, baseY - 9, 18, 3);
          ctx.fillRect(ix + 12, baseY - 12, 12, 3);
          ctx.fillRect(ix + 15, baseY - 15, 6, 3);
          ctx.fillRect(ix + 17, baseY - 17, 2, 2);

          // Chimney
          ctx.fillRect(ix + 6, baseY - 16, 4, 10);
          if (Math.sin(frameCount * 0.1 + item.id) > 0) {
            ctx.fillStyle = colors.secondary;
            ctx.fillRect(ix + 7, baseY - 20, 3, 2);
            ctx.fillRect(ix + 9, baseY - 24, 4, 2);
          }

          // Door
          ctx.fillStyle = colors.main;
          ctx.fillRect(ix + 14, groundY - 12, 8, 12);

          // Windows (glowing warm in dark mode)
          ctx.fillStyle = colors.windowGlow;
          ctx.fillRect(ix + 5, baseY + 5, 6, 6);
          ctx.fillRect(ix + 25, baseY + 5, 6, 6);
          ctx.fillStyle = colors.main;
          ctx.fillRect(ix + 7, baseY + 5, 2, 6);
          ctx.fillRect(ix + 27, baseY + 5, 2, 6);
        } else if (item.type === 'townhouse') {
          // Multi-story town home
          const h = 34;
          const y = groundY - h;

          ctx.fillStyle = colors.subtle;
          ctx.fillRect(ix, y, 40, h);
          ctx.fillStyle = colors.main;
          ctx.strokeRect(ix + 0.5, y + 0.5, 39, h - 1);

          ctx.fillRect(ix - 2, y - 2, 44, 3);
          ctx.fillRect(ix + 8, y - 10, 1, 8);
          ctx.fillRect(ix + 6, y - 8, 5, 1);
          ctx.fillRect(ix + 5, groundY - 14, 8, 14);

          ctx.fillStyle = colors.windowGlow;
          ctx.fillRect(ix + 18, groundY - 12, 6, 6);
          ctx.fillRect(ix + 28, groundY - 12, 6, 6);
          ctx.fillRect(ix + 6, y + 6, 6, 6);
          ctx.fillRect(ix + 18, y + 6, 6, 6);
          ctx.fillRect(ix + 28, y + 6, 6, 6);
        }
      });

      // Recycle scenery items that move off-screen
      const firstItem = scenery[0];
      if (firstItem && firstItem.x + firstItem.width < -50) {
        scenery.shift();
        const maxRight = scenery.reduce((max, s) => Math.max(max, s.x + s.width), viewWidth);
        const nextType = types[Math.floor(Math.random() * types.length)];
        const nextWidth = nextType === 'townhouse' ? 44 : nextType === 'cottage' ? 36 : 24;
        scenery.push({
          id: nextItemId++,
          type: nextType,
          x: Math.max(viewWidth + 60, maxRight + 220 + Math.random() * 120),
          width: nextWidth,
        });
      }

      // 4. Render Horizontal Road Ground Line
      ctx.fillStyle = colors.main;
      ctx.fillRect(0, groundY, viewWidth, 2);

      // Scrolling dashed lane marks on road
      ctx.fillStyle = colors.subtle;
      for (let i = 0; i < roadDashes.length; i++) {
        roadDashes[i] = (roadDashes[i] - currentSpeed);
        if (roadDashes[i] < -20) {
          roadDashes[i] = viewWidth + 20;
        }
        ctx.fillRect(Math.floor(roadDashes[i]), groundY + 12, 16, 2);
      }

      // Scrolling ground texture pebbles (Chrome Dino road style)
      ctx.fillStyle = colors.secondary;
      pebbles.forEach((peb) => {
        peb.x = (peb.x - currentSpeed);
        if (peb.x < -10) {
          peb.x = viewWidth + Math.random() * 20;
        }
        ctx.fillRect(Math.floor(peb.x), groundY + 4 + peb.y, peb.w, 1);
      });

      // 5. Render Speed Streaks during Boost
      if (currentSpeed > 4.5) {
        if (Math.random() < 0.4) {
          speedLines.push({
            x: viewWidth + 10,
            y: 30 + Math.random() * (groundY - 35),
            len: 25 + Math.random() * 35,
            speed: currentSpeed * 1.8,
          });
        }
      }
      ctx.fillStyle = colors.secondary;
      for (let i = speedLines.length - 1; i >= 0; i--) {
        const line = speedLines[i];
        line.x -= line.speed;
        ctx.fillRect(Math.floor(line.x), Math.floor(line.y), line.len, 1);
        if (line.x + line.len < -20) {
          speedLines.splice(i, 1);
        }
      }

      // 6. Spawn & Render Exhaust Particles behind Car
      if (frameCount % (currentSpeed > 4.5 ? 2 : 4) === 0) {
        particles.push({
          x: 52,
          y: groundY - 7 + (Math.random() * 3 - 1.5),
          size: Math.random() > 0.5 ? 3 : 2,
          alpha: 0.8,
          vx: -(currentSpeed * 0.45 + Math.random() * 0.8),
          vy: -(Math.random() * 0.35),
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.035;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = dark ? `rgba(161, 161, 170, ${p.alpha})` : `rgba(142, 142, 147, ${p.alpha})`;
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      }

      // 7. Render Pixel Car (Dinosaur replacement)
      const carX = 58;
      const bounce = Math.sin(frameCount * currentSpeed * 0.18) > 0.65 ? 1 : 0;
      const carY = groundY - 20 - bounce;

      // Headlight Beam Effect
      const beamX = carX + 44;
      const beamY = carY + 11;
      const grad = ctx.createLinearGradient(beamX, beamY, beamX + 170, beamY);
      grad.addColorStop(0, colors.headlightBeam);
      grad.addColorStop(0.3, colors.headlightBeam);
      grad.addColorStop(1, 'rgba(254, 240, 138, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(beamX, beamY - 2);
      ctx.lineTo(beamX + 175, beamY - 14);
      ctx.lineTo(beamX + 185, beamY + 20);
      ctx.lineTo(beamX, beamY + 5);
      ctx.closePath();
      ctx.fill();

      // Car Main Body
      ctx.fillStyle = colors.main;
      ctx.fillRect(carX + 2, carY + 8, 42, 7);
      ctx.fillRect(carX + 44, carY + 10, 2, 4);
      ctx.fillRect(carX + 10, carY + 1, 24, 7);
      ctx.fillRect(carX + 8, carY + 3, 28, 5);

      // Windows (cutout to page background)
      ctx.fillStyle = colors.bg;
      ctx.fillRect(carX + 13, carY + 3, 8, 5);
      ctx.fillRect(carX + 24, carY + 3, 9, 5);

      // Window pillar divider
      ctx.fillStyle = colors.main;
      ctx.fillRect(carX + 22, carY + 2, 2, 6);

      // Headlight bulb
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(carX + 43, carY + 10, 3, 3);

      // Taillight bulb (red)
      ctx.fillStyle = colors.taillight;
      ctx.fillRect(carX + 1, carY + 10, 2, 3);

      // Door seam line
      ctx.fillStyle = colors.bg;
      ctx.fillRect(carX + 21, carY + 9, 1, 5);

      // Rotating Pixel Wheels
      const drawWheel = (wx: number, wy: number) => {
        ctx.fillStyle = colors.main;
        ctx.fillRect(wx + 2, wy, 4, 8);
        ctx.fillRect(wx, wy + 2, 8, 4);
        ctx.fillRect(wx + 1, wy + 1, 6, 6);

        ctx.fillStyle = colors.bg;
        ctx.fillRect(wx + 2, wy + 2, 4, 4);

        ctx.fillStyle = colors.main;
        const cos = Math.cos(wheelAngle);
        const sin = Math.sin(wheelAngle);

        if (Math.abs(cos) > Math.abs(sin)) {
          ctx.fillRect(wx + 1, wy + 3, 6, 2);
          ctx.fillRect(wx + 3, wy + 1, 2, 6);
        } else {
          ctx.fillRect(wx + 2, wy + 2, 2, 2);
          ctx.fillRect(wx + 4, wy + 4, 2, 2);
          ctx.fillRect(wx + 4, wy + 2, 2, 2);
          ctx.fillRect(wx + 2, wy + 4, 2, 2);
        }
      };

      drawWheel(carX + 8, groundY - 8);
      drawWheel(carX + 30, groundY - 8);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.pixelDrivePureWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleHonkClick}
      role="region"
      aria-label="Retro Pixel Car Driving Showcase"
      title="Click to honk!"
    >
      <canvas ref={canvasRef} className={styles.pixelDriveCanvas} />
    </div>
  );
}
