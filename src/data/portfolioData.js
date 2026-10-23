export const portfolioData = {
  profile: {
    name: 'Osama Khan',
    subtitle: 'Full-Stack Developer • AI Engineer',
    heroLabel: 'FULL-STACK DEVELOPER • AI ENGINEER',
    bio: "I'm Osama Khan, a Full-Stack Developer and AI Engineer with 1+ year of experience building web applications and AI-powered tools. I enjoy turning ideas into real products — from full-stack CRM platforms and computer vision systems to generative AI applications.",
    location: 'Mumbai, India',
    availabilityTitle: 'Available for new opportunities',
    availabilityText: 'Open to full-time roles and exciting projects in Full-Stack, MERN, and Python development.',
    email: 'osamakhaan4k@gmail.com',
    github: 'https://github.com/Osama066',
    githubDisplay: 'github.com/Osama066',
    linkedin: 'https://www.linkedin.com/in/osama-khan-256876228/',
    linkedinDisplay: 'linkedin.com/in/osama-khan-256876228',
  },

  techBadges: [
    { name: 'Python', icon: 'python' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
    { name: 'SQL', icon: 'sql' },
    { name: 'Flask', icon: 'flask' },
    { name: 'MongoDB', icon: 'mongo' },
    { name: 'AWS', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
  ],

  metrics: [
    {
      value: '1+ Years',
      label: 'Experience',
      icon: 'briefcase',
    },
    {
      value: '25+',
      label: 'GitHub Repositories',
      icon: 'cube',
    },
    {
      value: 'AI + Full-Stack',
      label: 'Core Focus',
      icon: 'code',
    },
    {
      value: 'End-to-End',
      label: 'From idea to deployment',
      icon: 'zap',
    },
  ],

  whatIBuild: [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Apps',
      description:
        'Scalable web applications using React, Node.js, Express, MongoDB and Python, from concept to cloud deployment.',
      icon: 'monitor',
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description:
        'Computer vision, OpenCV, Wav2Lip GAN, LangChain and Gemini LLM applications built for real-world workflows.',
      icon: 'brain',
    },
    {
      id: 'realtime-events',
      title: 'Real-Time & Event Systems',
      description:
        'Interactive event platforms, face recognition photo delivery, WebPush notifications and real-time dashboards.',
      icon: 'radio',
    },
  ],

  projects: [
    {
      id: 'video-greeting',
      title: 'AI Personalized Video Greeting System',
      repoName: 'Osama066/videoGreeting',
      image: '/projects/video-greeting.png',
      description:
        'End-to-end personalized AI video greeting platform using open-source Wav2Lip GAN on Modal serverless GPU, ElevenLabs voice cloning TTS, Cloudinary media storage, React, Node.js, and MongoDB.',
      stack: ['React', 'Node.js', 'MongoDB', 'Wav2Lip GPU', 'ElevenLabs TTS', 'Cloudinary'],
      repoUrl: 'https://github.com/Osama066/videoGreeting',
      architecture: {
        frontend: 'React client for configuring recipient names, previewing cloned voice audio, and downloading generated MP4 greetings.',
        backend: 'Node.js & Express server orchestrating ElevenLabs TTS synthesis and triggering Modal serverless GPU Wav2Lip jobs.',
        database: 'MongoDB for tracking video generation job states + Cloudinary for high-speed video/audio asset hosting.',
        challenge: 'Eliminated $1–$4 per-video commercial lip-sync API costs by deploying open-source Wav2Lip on serverless GPU.',
      },
    },
    {
      id: 'datastraw-crm',
      title: 'DataStraw — Customer Support CRM System',
      repoName: 'Osama066/Datastraw',
      image: '/projects/datastraw-crm.png',
      description:
        'Full-stack Customer Support CRM system handling ticket intake, incident management datatables with live search & multi-status filtering, communication timelines, and a real-time KPI dashboard.',
      stack: ['React', 'Node.js', 'Express', 'REST API', 'Tailwind CSS'],
      repoUrl: 'https://github.com/Osama066/Datastraw',
      architecture: {
        frontend: 'Responsive React dashboard featuring real-time KPI cards, multi-status ticket filters, and slide-over communication timelines.',
        backend: 'Structured Node.js & Express REST API handling ticket creation, status transitions, and comment threads.',
        database: 'Persistent ticket & incident storage with indexed query filtering by status, priority, and customer.',
        challenge: 'Designed instant client-side and server-synced ticket filtering with zero page reloads for support agents.',
      },
    },
    {
      id: 'hand-to-draw',
      title: 'AI Hand-Gesture Drawing Canvas',
      repoName: 'Osama066/Hand-to-draw-',
      image: '/projects/hand-to-draw.png',
      description:
        'Interactive air-drawing & visual recognition web app powered by MediaPipe Hands, React, Python, and Google Gemini AI to draw on canvas using real-time webcam hand gestures.',
      stack: ['React', 'Vite', 'MediaPipe Hands', 'Google Gemini AI', 'Python'],
      repoUrl: 'https://github.com/Osama066/Hand-to-draw-',
      architecture: {
        frontend: 'React + Vite interactive HTML5 canvas tracking 21 hand landmarks in real time via MediaPipe Camera Utils.',
        backend: 'Python service & Google Generative AI SDK interpreting drawn sketches and mathematical/visual prompts.',
        database: 'Real-time in-memory stroke buffer with canvas state export for multimodal Gemini analysis.',
        challenge: 'Smoothed landmark jitter from webcam frames to achieve fluid, responsive air-drawing strokes at 30+ FPS.',
      },
    },
    {
      id: 'ball-tracker',
      title: 'Ball Tracker & Trajectory Predictor',
      repoName: 'Osama066/ball_tracker',
      image: '/projects/ball-tracker.png',
      description:
        'Low-latency computer vision ball detection and constant-velocity Kalman filter trajectory prediction system with perspective ROI warping and non-blocking Arduino serial output.',
      stack: ['Python', 'OpenCV', 'Kalman Filter', 'NumPy', 'Arduino Serial'],
      repoUrl: 'https://github.com/Osama066/ball_tracker',
      architecture: {
        frontend: 'Tkinter & OpenCV live telemetry UI with 4-point ROI perspective calibration and HSV color-picker masks.',
        backend: 'Multithreaded Python capture pipeline running contour circularity filtering and linear lookahead prediction.',
        database: 'JSON configuration persistence for camera ROI calibration, HSV thresholds, and serial port parameters.',
        challenge: 'Separated camera capture into a dedicated low-latency thread to predict impact angles in real time.',
      },
    },
    {
      id: 'compreface-event',
      title: 'AI Face Recognition & Event Photo System',
      repoName: 'Osama066/compreface',
      image: '/projects/compreface-event.png',
      description:
        'Face recognition and similarity matching system used for event photo discovery. Guests upload a selfie to retrieve matching event photos using deep face embeddings and Dockerized services.',
      stack: ['Python', 'Face Recognition', 'Docker', 'REST API', 'Embeddings'],
      repoUrl: 'https://github.com/Osama066/compreface',
      architecture: {
        frontend: 'Selfie upload & face recognition testing interface with confidence score overlays.',
        backend: 'Containerized face detection, embedding calculator, and similarity search REST APIs.',
        database: 'PostgreSQL / vector embedding store for fast face signature matching across photo collections.',
        challenge: 'Configured multi-container Docker services and embedding calculators for reliable high-precision face matching.',
      },
    },
    {
      id: 'genai-langchain-suite',
      title: 'LangChain LLM, Text-to-SQL & ATS Suite',
      repoName: 'Osama066/Langchain-Demo-With-Gemma-Model',
      image: '/projects/genai-langchain.png',
      description:
        'Collection of Generative AI apps built with Python, LangChain, Google Gemini, and Ollama (Gemma 2B) — including Natural Language to SQL conversion, ATS Resume Evaluator, and LLM Q&A.',
      stack: ['Python', 'LangChain', 'Google Gemini', 'Ollama Gemma 2B', 'SQL', 'Streamlit'],
      repoUrl: 'https://github.com/Osama066/Langchain-Demo-With-Gemma-Model',
      secondaryRepos: [
        { label: 'Gemini Text-to-SQL', url: 'https://github.com/Osama066/GEMINI-Text-to-Sql' },
        { label: 'ATS Resume System', url: 'https://github.com/Osama066/ATS-system' },
      ],
      architecture: {
        frontend: 'Clean Streamlit interfaces for natural language queries, PDF resume uploads, and live SQL result tables.',
        backend: 'Python + LangChain prompt pipelines with LangSmith real-time tracing, Ollama local LLM, and Gemini Pro API.',
        database: 'SQLite relational database (`student.db`) queried dynamically via LLM-generated SQL statements.',
        challenge: 'Structured schema-aware prompts so English questions reliably translate into executable SQL queries.',
      },
    },
  ],

  journey: [
    {
      type: 'work',
      role: 'Developer',
      organization: '360 Bright Media',
      period: 'Jul 2024 – Present',
      location: 'Mumbai, India',
      bullets: [
        'Working on web applications and event-based solutions.',
        'Contributed to frontend and backend development using Python, JavaScript and modern tools.',
        'Built features for event registration, photo distribution and real-time event experiences.',
      ],
    },
    {
      type: 'education',
      role: 'B.E. in AI & Data Science',
      organization: 'Rizvi College of Engineering',
      period: '2020 – 2024',
      location: 'Mumbai University',
      bullets: [
        'Graduated with 8.99 CGPA.',
        'Built projects in computer vision, NLP and data analytics.',
        'Published a research paper in IJRASET (2024).',
      ],
    },
  ],
};
