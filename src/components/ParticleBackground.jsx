import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 100, // Reduced from 120 to 60 for better performance
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disabled click interaction
              mode: "push",
            },
            onHover: {
              enable: false, // Disabled hover interaction
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 50,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#4ade80",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.6, // Reduced opacity
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Reduced speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200, // Increased area to reduce particle density
            },
            value: 30, // Reduced number of particles
          },
          opacity: {
            value: 0.6, // Reduced opacity
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Reduced max size
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0 // Keep z-index at 0 to stay behind content
      }}
    />
  );
};

export default ParticleBackground;