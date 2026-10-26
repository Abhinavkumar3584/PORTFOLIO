export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  skills: string[];
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  period: string;
  description: string;
  features: string[];
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface FreelanceItem {
  id: string;
  title: string;
  clientOrType: string;
  period: string;
  status: 'Completed' | 'In Progress' | 'Live';
  description: string;
  deliverables: string[];
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location: string;
  grade?: string;
  description?: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
  category: 'Award' | 'Hackathon' | 'Leadership' | 'Academics';
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  grade?: string;
}

export const portfolioData = {
  profile: {
    name: "Abhinav Kumar",
    initials: "AK",
    title: "Full Stack & AI Developer",
    age: "23",
    subtitle: "23 • Engineer",
    location: "Delhi, India",
    timezone: "UTC+5:30",
    statusText: "Currently Active",
    viewsCount: 24732,
    avatarUrl: "/profile1.jpeg",
    avatars: [
      { url: "/profile1.jpeg", name: "Profile", tag: "Primary" }
    ],
    resumeUrl: "/resume.pdf",
    quote: {
      text: "I was not born with a whole lot of natural talent... but I work hard and I never give up.",
      author: "ROCK LEE",
    },
    aboutBullets: [
      "I'm a builder who loves figuring things out by creating along the way. I enjoy working at the intersection of AI, full-stack systems, and real-world impact — whether that's building conversational AI platforms, scalable web architectures, or turning raw ideas into delightful products.",
      "At my core, I'm deeply curious not just about code, but about how technology empowers people to think, learn, and excel. Pursuing B.Tech in IT & Mathematical Innovation at Cluster Innovation Centre, University of Delhi, with state-level AI buildathon achievements."
    ],
    nowPlaying: {
      title: "Circe",
      artist: "Ludwig Göransson, Samantha Morton",
      albumCover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&auto=format&fit=crop&q=80",
      spotifyUrl: "https://open.spotify.com",
      status: "Last played"
    }
  },

  socials: [
    { name: "GitHub", url: "https://github.com/Abhinavkumar3584", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/abhikumar3584", icon: "linkedin" },
    { name: "Mail", url: "mailto:abhikumar3584@gmail.com", icon: "mail", value: "abhikumar3584@gmail.com" },
    { name: "Resume", url: "/resume.pdf", icon: "resume", isDownload: true }
  ],

  contactInfo: {
    email: "abhikumar3584@gmail.com",
    phone: "+91-7500024959",
    location: "Delhi, India",
    linkedin: "https://linkedin.com/in/abhikumar3584",
    github: "https://github.com/Abhinavkumar3584"
  },

  experiences: [
    {
      id: "sewa",
      company: "Sewa International",
      role: "Website Developer Intern & Digital Outreach Volunteer",
      period: "05.2025 – 10.2025",
      type: "Internship",
      location: "Hybrid, India",
      skills: ["Zoho Platform", "SEO", "Web Development", "Leadership", "ZOHO Tools"],
      description: [
        "Designed and developed a full new website on Zoho platform, including layout, content, ZOHO tools integration and SEO features.",
        "Engaged in Grassroots Leadership Camp, co-organized SEWA FELLOWSHIP, and guided 120+ candidates."
      ]
    },
    {
      id: "gloomweb",
      company: "Gloomweb Solutions",
      role: "Frontend Developer Intern",
      period: "05.2025 – 07.2025",
      type: "Remote (Client: Canada)",
      location: "Remote (Client: Canada)",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Figma", "Agile UI"],
      description: [
        "Translated Figma designs into responsive and accessible web UI using HTML, CSS, and JavaScript.",
        "Collaborated with the team in an Agile product development environment to deliver production-ready front-ends.",
        "Maintained clean, well-documented code, and ensured seamless back-end integration."
      ]
    },
    {
      id: "big-best-mart",
      company: "Big and Best Mart",
      role: "Full stack Developer Intern",
      period: "02.2025 – 07.2025",
      type: "Summer Internship",
      location: "India",
      skills: ["React.js", "Tailwind CSS", "Next.js", "MERN Stack", "Node.js", "MongoDB"],
      description: [
        "Developed an e-commerce platform for selling stationery and daily essentials using MERN tech.",
        "Designed and implemented a user-friendly interface for seamless online shopping using React.js, Tailwind CSS, Next.js.",
        "Focused on optimizing website performance and ensuring a smooth customer experience."
      ]
    },
    {
      id: "chegg",
      company: "CHEGG",
      role: "Subject Matter Expert",
      period: "09.2023 – 03.2026",
      type: "Remote",
      location: "Remote",
      skills: ["DSA", "Computer Networks", "Algorithms", "C++", "Java", "Problem Solving"],
      description: [
        "Solved complex problems related to Data Structures and Algorithms, Computer Networking, and Programming.",
        "Successfully addressed 100+ questions, provided detailed explanations and solutions, maintaining 80% accuracy."
      ]
    },
    {
      id: "beyondexams",
      company: "BEYONDEXAMS",
      role: "AI Youtube Video Classifier",
      period: "06.2022 – 11.2022",
      type: "Internship",
      location: "Delhi, India",
      skills: ["Python", "Scikit-Learn", "Machine Learning", "Chrome Extension", "NLP"],
      description: [
        "Built an AI model using Python and Scikit-learn to classify youtube videos as educational or non-educational.",
        "Developed a user-friendly website and initiated a Chrome extension for seamless video classification."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "pratiyogita-setu",
      title: "Pratiyogita Setu",
      tagline: "AI-Powered Competitive Exam Preparation Platform",
      period: "Feb 2025 – Present",
      description: "Comprehensive AI-driven exam readiness ecosystem integrating eligibility tracking, customized syllabus roadmaps, and intelligent question answering.",
      features: [
        "Pariksha Yogya: Eligibility and attempt tracker helping students discover tailored opportunities based on personal qualifications.",
        "Pariksha Marg: Structured syllabus roadmaps for systematic, topic-by-topic effective learning.",
        "Pariksha Gyan: Real-time conversational AI chatbot delivering instant explanations, topic-wise PYQs, and interactive Q&A insights."
      ],
      tools: ["AI / LLMs", "Chatbot Systems", "MERN Stack", "Firebase", "Cloudflare", "REST APIs"],
      githubUrl: "https://github.com/abhikumar3584/pratiyogita-setu",
      liveUrl: "https://pratiyogita-setu.web.app",
      featured: true
    },
    {
      id: "portfolio-site",
      title: "Personal Portfolio Website",
      tagline: "Minimalist Modern Developer Portfolio & Digital Resume",
      period: "2023 – 2026",
      description: "Engineered a high-performance minimalist developer portfolio showcasing projects, professional timeline, interactive GitHub heat map, and command palette navigation.",
      features: [
        "Interactive GitHub 52-week activity heatmap with live commit visualizer.",
        "Spotlight Command Palette (Ctrl+K) for rapid navigation and search.",
        "Dark / Light theme support with buttery smooth transitions and accessible contrast."
      ],
      tools: ["Next.js 16", "React 19", "TypeScript", "SCSS Modules", "Vite"],
      githubUrl: "https://github.com/abhikumar3584/portfolio",
      liveUrl: "https://portfolio-abhinavkumar.vercel.app",
      featured: true
    },
    {
      id: "need-du",
      title: "Need DU",
      tagline: "Community Web Platform for Delhi University Students",
      period: "2022",
      description: "Full-featured campus portal built to empower Delhi University students with academic resources, peer-to-peer commerce, and student accommodation discovery.",
      features: [
        "Curated repository of past year university exam question papers (PYQs).",
        "Peer-to-peer marketplace to buy/sell books and academic essentials safely.",
        "Verified accommodation and PG discovery tool filtered by college vicinity."
      ],
      tools: ["HTML5", "CSS3", "JavaScript", "SQL", "REST APIs"],
      githubUrl: "https://github.com/abhikumar3584/need-du",
      featured: false
    },
    {
      id: "cloud-resource-manager",
      title: "Cloud Resource Manager Software",
      tagline: "Real-Time Server Monitoring & Telemetry Dashboard",
      period: "2022",
      description: "Engineered a real-time server telemetry and monitoring suite with Django backend data collectors, React interactive dashboard, and MongoDB persistent storage.",
      features: [
        "Telemetry agent gathering CPU, memory, bandwidth, and disk I/O metrics.",
        "React frontend with dynamic charting for real-time performance inspection.",
        "Secure Node.js authentication service with role-based access control."
      ],
      tools: ["React.js", "Django", "Node.js", "MongoDB", "Unit Testing"],
      githubUrl: "https://github.com/abhikumar3584/cloud-resource-manager",
      featured: false
    }
  ] as ProjectItem[],

  freelanceAndSideProjects: [
    {
      id: "gestss",
      title: "GESTSS — Business Website",
      clientOrType: "Client Project • Business Platform",
      period: "2024",
      status: "Live",
      description: "Developed a client website using React/Next.js, focusing on responsive layouts and a consistent user interface.",
      deliverables: [
        "Engineered modular, mobile-first responsive components with Next.js & React.",
        "Delivered cross-device UI consistency, high-performance page loads, and intuitive navigation."
      ],
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://gestss.com/",
      featured: true
    },
    {
      id: "the-csr-journal",
      title: "The CSR Journal — Digital News Platform",
      clientOrType: "Digital News Platform • Media Portal",
      period: "2024",
      status: "Live",
      description: "Developed a news and media website using React/Next.js to present editorial content in a structured, user-friendly format.",
      deliverables: [
        "Built high-traffic digital news architecture for presenting editorial stories and media content.",
        "Structured rich-text readability, category navigation, and fast server-rendered page loads."
      ],
      tools: ["React", "Next.js", "Editorial CMS", "SEO", "Responsive UI"],
      liveUrl: "https://thecsrjournal.com/",
      featured: true
    },
    {
      id: "dr-sony",
      title: "Dr. Sony — Professional Website",
      clientOrType: "Professional Portfolio • Healthcare Website",
      period: "2024",
      status: "Live",
      description: "Developed a professional website using React/Next.js with a focus on clean design, responsive layouts, and intuitive navigation.",
      deliverables: [
        "Designed and deployed an elegant professional portfolio showcasing clinical expertise and patient services.",
        "Delivered sub-second navigation, accessible appointment inquiries, and seamless mobile responsiveness."
      ],
      tools: ["React", "Next.js", "Vercel", "Tailwind CSS", "UI/UX"],
      liveUrl: "https://drsony.vercel.app/",
      featured: true
    }
  ] as FreelanceItem[],

  education: [
    {
      id: "cic-du",
      institution: "Cluster Innovation Centre, University of Delhi",
      degree: "Bachelor of Technology",
      field: "Information Technology and Mathematical Innovation",
      period: "2021 – 2025",
      location: "Delhi, India",
      grade: "CGPA: 8.24 / 10",
      description: "Specialized in software engineering, mathematical modeling, and AI systems. Selected among top 50 seats nationwide through competitive entrance."
    },
    {
      id: "mbis",
      institution: "Maa Bhargwati International School",
      degree: "Intermediate",
      field: "Senior Secondary School",
      period: "2020 – 2021",
      location: "Bulandshahr, India",
      description: "Specialization in Science and Mathematics."
    },
    {
      id: "rms-ajmer",
      institution: "Rashtriya Military School, Ajmer",
      degree: "Secondary Education",
      field: "High School",
      period: "2018 – 2019",
      location: "Ajmer, India",
      description: "Prestigious defense residential institution instilling rigorous discipline, leadership, and academic excellence. Cleared national entrance exam."
    }
  ] as EducationItem[],

  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "C++", "Java", "HTML5", "CSS3", "SQL"],
    frameworks: ["React.js", "Next.js", "Node.js", "Spring Boot", "LangChain", "FastAPI", "Tailwind CSS"],
    cloudDatabases: ["AWS", "DigitalOcean", "MongoDB", "MySQL", "Pinecone Vector DB", "Firebase", "Supabase"],
    aiAutomation: ["AI Agents", "Prompt Engineering", "MCP (Model Context Protocol)", "GitHub Copilot", "Scikit-Learn"],
    toolsPlatforms: ["VS Code", "Git", "GitHub", "CI/CD", "Linux", "Windows", "Docker", "Figma", "Canva"],
    cmsWebTools: ["WordPress", "Zoho Creators", "Zoho Forms", "Zoho Sites", "SEO Optimization"]
  },

  achievements: [
    {
      title: "OpenAI Academy x NxtWave Regional Buildathon Winner",
      detail: "Won state-level competition and selected for National Level demonstration.",
      category: "Award"
    },
    {
      title: "Beyond Exams Hackathon — 4th Position",
      detail: "Secured fourth position in competitive nationwide hackathon.",
      category: "Hackathon"
    },
    {
      title: "Convoke 5.0 College Hackathon Core Organizer",
      detail: "Managed end-to-end logistics, outreach, and event architecture for Delhi University flagship tech hackathon.",
      category: "Leadership"
    },
    {
      title: "Cluster Innovation Centre Entrance Selection",
      detail: "Selected for B.Tech in IT & Mathematical Innovation among only 50 seats across India.",
      category: "Academics"
    },
    {
      title: "Rashtriya Military School & Sainik School Selection",
      detail: "Cleared the elite All India Entrance Examinations for prestigious defense institutions.",
      category: "Academics"
    }
  ] as AchievementItem[],

  certifications: [
    { name: "CCC Examination Certification", issuer: "NIELIT", date: "14 Nov, 2025" },
    { name: "OpenAI Academy x NxtWave Regional Buildathon", issuer: "OpenAI / NxtWave", date: "22 Nov - 23 Nov, 2025" },
    { name: "Grassroot Leadership Camp Volunteer", issuer: "Sewa International (Jaipur)", date: "21 June - 22 June, 2025" },
    { name: "Geographic Information System (GIS) Overview", issuer: "IIRS (ISRO) E-Learning", date: "Oct 2022" }
  ] as CertificationItem[]
};
