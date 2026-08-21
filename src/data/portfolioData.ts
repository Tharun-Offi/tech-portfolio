import { Project, ExperienceItem, EducationItem, SkillCategory, ContactInfo } from '../types';

export const personalInfo = {
  name: "Tharun Murugavel",
  role: "Full Stack Developer & AI / Cyber Security Engineer",
  currentPosition: "Assistant System Engineer @ Tata Consultancy Services",
  headline: "Java Full Stack & Python AI Engineer • Spring Boot, FastAPI, Angular, React & ML",
  aboutSummary: `Computer Science and Engineering graduate specialized in Cyber Security (CGPA 7.92). Specialized in enterprise Java Full Stack architectures (Spring Boot, Java Servlets, Angular, React) and Python AI / Machine Learning pipelines (FastAPI, Flask, Transformers, Scikit-learn). Experienced in database engineering (PostgreSQL, MySQL, PL/SQL, Supabase) and asynchronous microservices (Redis, Celery). Currently Assistant System Engineer at Tata Consultancy Services (TCS), Chennai, with past industry experience building Software-in-the-Loop (SiL) server architectures at Expleo Solutions, Bangalore.`,
  cgpa: "7.92",
  experienceYears: "1+ Years",
  projectsCompleted: "7+",
  skillsCount: "20+",
};

export const contactData: ContactInfo = {
  email: "tharunmbecse@gmail.com",
  phone: "+91 8122250010",
  whatsapp: "https://wa.me/+918122250010",
  location: "Tamil Nadu, India",
  birthday: "November 26, 2003",
  socials: {
    github: "https://github.com/Tharun-Offi",
    linkedin: "https://www.linkedin.com/in/tharun-offi/",
    instagram: "https://www.instagram.com/tharun_murugavel/",
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: "tcs-ase",
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Chennai, Tamil Nadu",
    period: "May 2026 - Present",
    status: "Current",
    type: "work",
    description: "Engineering enterprise Java & Python systems, building scalable microservices, and implementing secure architectural patterns.",
    highlights: [
      "Developing robust enterprise services using Spring Boot, Java Servlets, and Python.",
      "Designing optimized database queries and transaction pipelines with PostgreSQL, MySQL, and PL/SQL.",
      "Ensuring system resilience, secure API authentication, and CI/CD integration."
    ],
    skills: ["Spring Boot", "Java Servlets", "FastAPI", "PostgreSQL", "PL/SQL", "Enterprise Architecture", "Cyber Security"]
  },
  {
    id: "expleo-intern",
    role: "Full Stack Developer Intern",
    company: "Expleo Solutions",
    location: "Bangalore, Karnataka",
    period: "Oct 2024 - May 2025",
    status: "Completed",
    type: "work",
    description: "Contributed to the Software-in-the-Loop (SiL) Application Server, engineering end-to-end full stack interfaces, REST APIs, and automated test suites.",
    highlights: [
      "Engineered full-stack simulation server modules and dashboards with Angular and React.",
      "Built performant RESTful endpoints and data streaming services with Python and Flask-SocketIO.",
      "Designed automated testing suites with Pytest and integrated asynchronous tasks with Celery & Redis."
    ],
    skills: ["Angular", "React", "Python", "FastAPI", "Flask", "Redis", "Celery", "MySQL", "Pytest", "SiL Server"]
  }
];

export const educations: EducationItem[] = [
  {
    id: "be-cse",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering (Cyber Security)",
    institution: "Erode Sengunthar Engineering College",
    location: "Perundurai, Tamil Nadu",
    period: "Oct 2021 - Apr 2025",
    score: "CGPA: 7.92 / 10",
    description: "Graduated in Computer Science & Engineering with Cyber Security specialization. Coursework: OOP, Data Structures, DBMS, Network Security, Operating Systems, Cryptography, and Cloud Computing.",
    type: "education"
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Certificate (XIIth)",
    institution: "S.D. Eaden Matric. Hr. Sec. School",
    location: "Vadalur, Tamil Nadu",
    period: "2019 - 2021",
    score: "84.34% (506.06 / 600)",
    description: "Graduated with distinction in Mathematics, Physics, Chemistry, and Computer Science.",
    type: "education"
  },
  {
    id: "secondary",
    degree: "Secondary School Leaving Certificate (Xth)",
    institution: "St. Paul Matric. Hr. Sec. School",
    location: "Kurinjipadi, Tamil Nadu",
    period: "2018 - 2019",
    score: "80.40%",
    description: "Strong foundational academic performance in science and mathematics.",
    type: "education"
  }
];

// Streamlined into 4 Consolidated High-Impact Pillars
export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    description: "Solid foundation across compiled, scripting, and database languages.",
    skills: [
      { name: "Python", level: 92, icon: "Code", description: "Async, OOP, AI/ML pipelines & backend frameworks", color: "#06b6d4" },
      { name: "Java", level: 88, icon: "Server", description: "Core Java, multithreading, OOP & Spring ecosystem", color: "#ef4444" },
      { name: "TypeScript & JavaScript", level: 90, icon: "Cpu", description: "ES6+, type-safety, Angular & React ecosystem", color: "#facc15" },
      { name: "SQL & PL/SQL", level: 88, icon: "Database", description: "Stored procedures, triggers, cursors & optimization", color: "#38bdf8" },
      { name: "C & HTML/CSS", level: 85, icon: "Layers", description: "Memory management, semantic HTML5 & responsive CSS3", color: "#a855f7" }
    ]
  },
  {
    title: "Backend & Cloud APIs",
    description: "Enterprise Java microservices, Python APIs, and asynchronous message brokers.",
    skills: [
      { name: "Spring Boot & Servlets", level: 88, icon: "Server", description: "Enterprise microservices, Spring Security & MVC", color: "#10b981" },
      { name: "FastAPI & Flask", level: 92, icon: "Zap", description: "High-throughput asynchronous APIs & Swagger documentation", color: "#06b6d4" },
      { name: "REST APIs & Security", level: 90, icon: "Shield", description: "JWT, OAuth2, RBAC & API security best practices", color: "#ec4899" },
      { name: "Redis & Celery", level: 85, icon: "Activity", description: "Distributed background task queues & in-memory caching", color: "#dc2626" },
      { name: "Flask-SocketIO & WebSockets", level: 82, icon: "Radio", description: "Real-time bidirectional event streaming", color: "#eab308" }
    ]
  },
  {
    title: "Frontend & 3D WebVR",
    description: "Modern component-driven web user interfaces, responsive design, and 3D graphics.",
    skills: [
      { name: "React.js & Vite", level: 90, icon: "Code", description: "SPA architecture, hooks, state management & tooling", color: "#06b6d4" },
      { name: "Angular Framework", level: 86, icon: "Layout", description: "TypeScript, services, dependency injection & RxJS", color: "#f43f5e" },
      { name: "Tailwind CSS & Bootstrap", level: 92, icon: "Palette", description: "Modern responsive styling, glassmorphism & UX", color: "#38bdf8" },
      { name: "Three.js & A-Frame (WebVR)", level: 82, icon: "Glasses", description: "Interactive 3D WebGL scenes & spatial VR modules", color: "#8b5cf6" }
    ]
  },
  {
    title: "Databases, AI & IoT",
    description: "Relational data engines, machine learning pipelines, and hardware integration.",
    skills: [
      { name: "PostgreSQL & MySQL", level: 90, icon: "Database", description: "Enterprise relational schemas, indexing & transactions", color: "#38bdf8" },
      { name: "Supabase, SQLite & H2", level: 86, icon: "Layers", description: "Cloud Postgres, embedded storage & test DBs (SQLAlchemy)", color: "#10b981" },
      { name: "AI/ML & NLP (Transformers)", level: 85, icon: "Brain", description: "DistilBERT, Scikit-learn, XGBoost, LSTM & spaCy", color: "#eab308" },
      { name: "Git, Agile & IoT Arduino", level: 90, icon: "GitBranch", description: "CI/CD, version control, postman testing & microcontroller IoT", color: "#a855f7" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "brain-friendly",
    title: "Brain Friendly (VR Infused e-Learning)",
    category: "web",
    type: "Web Development / Virtual Reality",
    description: "An immersive educational platform utilizing Web-based Virtual Reality (A-Frame & WebVR) concepts to create engaging, memory-enhancing learning experiences.",
    longDescription: "Brain Friendly is an innovative educational platform engineered to transform digital learning by infusing interactive virtual reality modules. Designed to increase learner retention, the platform breaks complex educational concepts into interactive 3D spatial representations.",
    tags: ["WebVR", "A-Frame", "JavaScript", "HTML5/CSS3", "3D Models", "Interactive UI"],
    githubUrl: "https://github.com/Tharun-Offi/VR_infused_e-learning",
    featured: true,
    accentColor: "#06b6d4",
    iconName: "Glasses",
    metrics: [
      { label: "Concept", value: "WebVR / A-Frame" },
      { label: "Focus", value: "Retention" }
    ]
  },
  {
    id: "stock-prediction",
    title: "Stock Market Prediction System",
    category: "ml",
    type: "Machine Learning & AI / Python",
    description: "Predictive analytics pipeline applying Scikit-learn, LSTM neural networks, and statistical modeling to historical financial market trends.",
    longDescription: "An intelligent data processing and predictive machine learning tool built using Python and FastAPI. It ingests historical stock data, conducts feature engineering with Scikit-learn & Pandas, and utilizes LSTM models to forecast potential price trends with visualization graphs.",
    tags: ["Python", "FastAPI", "Scikit-learn", "LSTM", "Machine Learning", "Data Analytics"],
    githubUrl: "https://github.com/Tharun-Offi/Stock_Market_Prediction",
    featured: true,
    accentColor: "#8b5cf6",
    iconName: "TrendingUp",
    metrics: [
      { label: "Domain", value: "FinTech / ML" },
      { label: "Stack", value: "Python / LSTM" }
    ]
  },
  {
    id: "pyropatrol",
    title: "PyroPatrol (Automated Fire Safety System)",
    category: "systems",
    type: "Embedded C / Arduino IoT",
    description: "An autonomous safety monitoring system written in Embedded C and Arduino, leveraging hardware sensors for real-time fire detection and alert triggers.",
    longDescription: "PyroPatrol is a critical hardware-software embedded system designed for autonomous hazard mitigation. Utilizing temperature and flame sensor inputs with Arduino microcontrollers, the system continuously monitors environmental conditions to trigger safety alerts.",
    tags: ["Embedded C", "Arduino", "Sensors", "IoT Hardware", "Real-Time"],
    githubUrl: "https://github.com/Tharun-Offi/PyroPatrol",
    featured: true,
    accentColor: "#f43f5e",
    iconName: "Flame",
    metrics: [
      { label: "Hardware", value: "Arduino" },
      { label: "Language", value: "Embedded C" }
    ]
  },
  {
    id: "iphone-waiting-list",
    title: "iPhone Waiting List Management",
    category: "web",
    type: "Python Flask / PostgreSQL & Redis",
    description: "A full-stack queue management web application built with Python Flask, PostgreSQL, and Redis for handling high-volume consumer product pre-order reservations.",
    longDescription: "Created to address queueing and pre-order reservation bottlenecks, this web application manages queue positions, customer details, and live order status notifications through a Flask backend and PostgreSQL database.",
    tags: ["Python", "Flask", "PostgreSQL", "Redis", "Backend Architecture"],
    githubUrl: "https://github.com/Tharun-Offi/iphone_waiting_list",
    featured: false,
    accentColor: "#3b82f6",
    iconName: "Smartphone",
    metrics: [
      { label: "Framework", value: "Flask" },
      { label: "DB", value: "PostgreSQL" }
    ]
  },
  {
    id: "console-runtime-apps",
    title: "Runtime Utility Applications",
    category: "systems",
    type: "Python & Java OOP Tools",
    description: "A robust collection of console-based algorithms, automation utilities, and system tooling demonstrating core computer science and OOP concepts.",
    longDescription: "A comprehensive repository of algorithmic implementations, data manipulation tools, and command-line automation scripts built with object-oriented Python and Java, focusing on modularity, memory efficiency, and CLI ergonomics.",
    tags: ["Python", "Java", "Pytest", "Algorithms", "CLI Tooling", "OOP"],
    githubUrl: "https://github.com/Tharun-Offi/Console-Based-Projects",
    featured: false,
    accentColor: "#10b981",
    iconName: "TerminalSquare",
    metrics: [
      { label: "Core", value: "Algorithms / OOP" },
      { label: "Testing", value: "Pytest" }
    ]
  },
  {
    id: "anime-portfolio",
    title: "Anime Themed Dynamic Portfolio",
    category: "web",
    type: "HTML, CSS & JavaScript",
    description: "A creative, animated web portfolio featuring interactive character motifs, particle effects, and dynamic theme switching.",
    longDescription: "An artistic frontend showcase engineered with custom CSS keyframes, interactive JavaScript DOM manipulation, and responsive layout techniques to deliver an engaging anime aesthetic experience.",
    tags: ["JavaScript", "CSS3 Animations", "Creative Frontend", "Responsive UI"],
    githubUrl: "https://github.com/Tharun-Offi/my-portfolio",
    featured: false,
    accentColor: "#eab308",
    iconName: "Sparkles",
    metrics: [
      { label: "Design", value: "Creative UI" },
      { label: "Stack", value: "JS / CSS" }
    ]
  }
];

export const techCloudSkills = [
  "Spring Boot", "FastAPI", "Python", "Java", "Angular", "React.js",
  "PostgreSQL", "MySQL", "PL/SQL", "Redis", "Celery", "Transformers",
  "Scikit-learn", "Flask", "TypeScript", "JavaScript", "A-Frame (WebVR)",
  "Arduino IoT", "Cyber Security", "Tailwind CSS", "Git", "Supabase",
  "SQLAlchemy", "REST APIs"
];
