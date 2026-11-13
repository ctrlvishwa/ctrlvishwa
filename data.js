/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION - NIKHIL KUMAR GIRI (VISHWA)
 * =========================================================================
 * Hey Nikhil! You can update ANY text, links, projects, and skills right here
 * without ever having to touch HTML, CSS, or JavaScript code!
 * 
 * Instructions:
 * 1. Just edit the values between the quotation marks "..."
 * 2. Save the file (Ctrl + S), and your portfolio website updates automatically!
 * 3. You can also use the on-screen "Edit Info" button on the website anytime.
 * 4. To add your photo: place an image named "profile.jpg" in this folder,
 *    or enter the image file name / web link in `avatarUrl` below.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // Personal & Brand Information
  personal: {
    fullName: "Nikhil Kumar Giri",
    preferredName: "Vishwa",
    brandTitle: "Nikhil (Vishwa)",
    roleTitle: "BCA Student specializing in AI & Data Analytics | Full-Stack & UI Developer",
    statusBadge: "Available for Internships & Freelance Work",
    currentLocation: "India",
    // Put your picture file in this folder (e.g. "profile.jpg" or "myphoto.png")
    avatarUrl: "profile.jpg",
    avatarFallbackText: "NKG"
  },

  // Social Links (Used in Hero and Footer)
  socialLinks: {
    github: "https://github.com/ctrlvishwa",
    linkedin: "https://www.linkedin.com/in/nikhil-giri-808b9a419/",
    instagram: "https://www.instagram.com/ctrl_vishwa/",
  },

  // Direct Contact Information
  contact: {
    email: "nikhil1512006@gmail.com",
    phone: "7255899651",
    formattedPhone: "+91 72558 99651",
    whatsappLink: "https://wa.me/917255899651",
    location: "Moradabad / India",
    responseCommitment: "Typically replies within 24 hours"
  },

  // About Me Section Content
  about: {
    heading: "About Me",
    subheading: "Building AI-Driven Applications, Clean UIs & Full-Stack Solutions",
    bio: "I am a BCA student at Teerthanker Mahaveer University graduating in 2027. I have an active passion for building AI-driven applications, clean UIs, and full-stack solutions. With practical experience engineering live commercial websites for clients and deploying AI systems on the cloud, I bridge machine learning capabilities with delightful, high-speed web experiences.",
    highlights: [
      {
        icon: "graduation",
        title: "BCA Candidate (Class of 2027)",
        description: "Teerthanker Mahaveer University, specializing in Artificial Intelligence & Data Analytics."
      },
      {
        icon: "briefcase",
        title: "Live Freelance & Client Delivery",
        description: "Engineered and configured production web presences for Remark Chemical and KVG2Chem Industries."
      },
      {
        icon: "brain",
        title: "AI & Full-Stack Synergy",
        description: "Developed and deployed live LLM-powered tools such as Bug Catcher AI on Render Cloud."
      }
    ]
  },

  // Skills Section (Minimalist cards & badges)
  skills: {
    languages: [
      { name: "Python", category: "Language", level: "Advanced", icon: "python", highlight: "AI, LLMs & Backend Models" },
      { name: "JavaScript", category: "Language", level: "Advanced", icon: "javascript", highlight: "Modern ES6+, React & Web APIs" },
      { name: "Golang", category: "Language", level: "Intermediate", icon: "golang", highlight: "Fast Microservices & Concurrency" }
    ],
    frameworksAndTools: [
      { name: "React", category: "Framework", level: "Advanced", icon: "react", highlight: "Component Architecture & State" },
      { name: "Next.js", category: "Framework", level: "Advanced", icon: "nextjs", highlight: "SSR, SSG & Full-Stack Routing" },
      { name: "Streamlit", category: "Framework", level: "Advanced", icon: "streamlit", highlight: "Interactive Data & ML Apps" },
      { name: "Flutter", category: "Framework", level: "Intermediate", icon: "flutter", highlight: "Cross-Platform Mobile Apps" }
    ],
    additionalCompetencies: [
      { name: "LLM APIs & Prompt Engineering", category: "AI & ML" },
      { name: "Render Cloud Deployments", category: "DevOps" },
      { name: "RESTful API Integration", category: "Backend" },
      { name: "Data Analytics & Pandas", category: "Data" },
      { name: "Responsive UI/UX & Tailwind", category: "Design" },
      { name: "Git & Version Control", category: "Workflow" }
    ]
  },

  // Projects Section: Separated into Live Client Work & AI/Engineering Projects
  projects: [
    // 1. Live Client & Freelance Projects
    {
      id: "remark-chemical",
      title: "Remark Chemical",
      section: "client",
      badge: "Live Client Website",
      badgeType: "client",
      description: "Engineered and configured the complete commercial web presence and product catalog for remarkchem.com. Built with responsive catalog navigation, high-speed mobile loading, and direct quotation/inquiry channels for industrial clients.",
      tags: ["React", "Enterprise Catalog", "UI/UX Systems", "Client Work", "SEO"],
      highlights: [
        "Live production website at https://remarkchem.com/",
        "Structured chemical product catalog with inquiry call-to-actions",
        "Optimized for fast mobile rendering and business lead conversion"
      ],
      links: {
        demo: "https://remarkchem.com/"
      }
    },
    {
      id: "kvg2chem",
      title: "KVG2Chem Industries",
      section: "client",
      badge: "Live Client Website",
      badgeType: "client",
      description: "Designed interface components and engineered the corporate web presence for KVG2Chem Industries (kvg2chem.in). Focused on industrial product presentation, clean component architecture, and supply inquiry workflows.",
      tags: ["Web Architecture", "UI Design System", "B2B Chemical Portal", "Client Work"],
      highlights: [
        "Live production website at https://www.kvg2chem.in/",
        "Modular UI interface components for chemical product lines",
        "Configured for reliable business communication and search indexing"
      ],
      links: {
        demo: "https://www.kvg2chem.in/"
      }
    },

    // 2. AI, Analytics & Engineering Projects
    {
      id: "bug-catcher-ai",
      title: "Bug Catcher AI",
      section: "ai",
      badge: "Live on Render Cloud",
      badgeType: "live",
      description: "A fully functional AI-powered code auditing & bug catching tool that interacts directly with LLMs and custom inference APIs. Detects syntax anomalies, security vulnerabilities, and generates optimized code patches in real-time.",
      tags: ["Python", "LLMs & APIs", "Render Cloud", "FastAPI", "AI Auditing"],
      highlights: [
        "Live deployed backend and web service hosted on Render (bug-catcher-ai.onrender.com)",
        "Direct integration with LLM APIs for automated code analysis and refactoring",
        "Instant vulnerability identification and performance optimization benchmarks"
      ],
      links: {
        demo: "https://bug-catcher-ai.onrender.com/",
        github: "https://github.com/ctrlvishwa"
      }
    },
    {
      id: "streamlit-analytics-dashboards",
      title: "Streamlit Analytics Dashboards",
      section: "ai",
      badge: "Data & ML Platform",
      badgeType: "featured",
      description: "Interactive data visualization and predictive modeling dashboards built with Streamlit. Features dynamic UI pipelines specifically engineered for student dropout risk prediction and real-time financial fraud detection.",
      tags: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "Data Analytics"],
      highlights: [
        "Visualized early student dropout risk indicators based on academic & socio-economic metrics",
        "Financial fraud anomaly classification using machine learning decision models",
        "Interactive filtering, exportable analytics, and real-time risk heatmaps"
      ],
      links: {
        github: "https://github.com/ctrlvishwa"
      }
    },
    {
      id: "local-mart",
      title: "LocalMart",
      section: "ongoing",
      badge: "Ongoing Project",
      badgeType: "ongoing",
      description: "A modern hyperlocal marketplace platform bridging neighborhood corner shops and local consumers. Designed with intuitive mobile-friendly product browsing, cart flows, real-time inventory synchronization, and rapid order dispatching.",
      tags: ["Full-Stack", "React", "Node.js", "Hyperlocal E-Commerce"],
      highlights: [
        "Hyperlocal vendor onboarding and live store inventory management",
        "Frictionless checkout experience with location-based store routing",
        "Active development focusing on responsive PWA and Flutter mobile compatibility"
      ],
      links: {
        github: "https://github.com/ctrlvishwa"
      }
    }
  ],

  // Footer Information
  footer: {
    copyrightYear: "2026",
    copyrightName: "Nikhil Kumar Giri (Vishwa)",
    tagline: "Designed & Built with precision. Crafted for intelligent web experiences."
  }
};

// Make accessible to browser window or module exports
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
