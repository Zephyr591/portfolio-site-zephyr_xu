// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "📱 VolunTrack - Android Volunteer Tracking App",
    description: "A comprehensive volunteer tracking mobile application built with Kotlin and Jetpack Compose. Features Google Authentication, Firebase integration, personalized event recommendations based on Google Calendar analysis, progress tracking with visual charts, and a modern Material Design UI with dark/light mode support.",
    tech: ["Kotlin", "Android", "Jetpack Compose", "Firebase", "Google Authentication", "Google Calendar API", "Room Database", "Retrofit", "Material Design"],
    color: "from-green-500 to-teal-500",
    projectUrl: "#",
    githubUrl: "https://github.com/ellielok/VolunTrack",
    screenshots: [
      "/images/projects/voluntrack-welcome.png",
      "/images/projects/voluntrack-home.png", 
      "/images/projects/voluntrack-dashboard.png",
      "/images/projects/voluntrack-darkmode.png"
    ]
  },
  // ... rest of your projects remain unchanged
  {
    id: 2,
    title: "☁️ Cloud Infrastructure Project", 
    description: "Multi-cloud deployment using AWS and Oracle Cloud with Docker containerization and CI/CD pipelines.",
    tech: ["AWS", "Oracle Cloud", "Docker", "Kubernetes", "CI/CD"],
    color: "from-orange-500 to-red-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591"
  },
  {
    id: 3,
    title: "💼 Employee Data Platform",
    description: "Centralized data platform for international offices with automated workflows and real-time reporting dashboards.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Data Analytics"],
    color: "from-blue-500 to-purple-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591"
  },
  {
    id: 4,
    title: "🌐 Full-Stack Web Application",
    description: "Modern web application with Vue.js frontend, RESTful APIs, and responsive design for optimal user experience.",
    tech: ["Vue.js", "JavaScript", "FastAPI", "PostgreSQL", "HTML/CSS"],
    color: "from-cyan-500 to-blue-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591"
  }
];

// Rest of your exports remain unchanged
export const skillsData = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 90 },
  { name: 'JavaScript/Vue.js', level: 85 },
  { name: 'Cloud Technologies', level: 80 },
  { name: 'Databases', level: 85 }
];

export const contactData = [
  { 
    text: "Email Me", 
    href: "mailto:xusc591@gmail.com", 
    icon: "📧" 
  },
  { 
    text: "LinkedIn", 
    href: "https://www.linkedin.com/in/sicheng-xu-25a33333a/", 
    icon: "💼" 
  },
  { 
    text: "GitHub", 
    href: "https://github.com/Zephyr591", 
    icon: "💻" 
  }
];

export const personalInfo = {
  name: "Sicheng Xu",
  preferredName: "Zephyr Xu",
  title: "Graduate Software Developer",
  subtitle: "Master of IT Student at Monash University",
  location: "Melbourne, VIC, Australia",
  bio: "Graduate Software Developer with a Master of Information Technology from Monash University, skilled in Java, Python, SQL, and full-stack web development. Previously worked for two years at a top-five securities firm in China, bringing unique perspective combining finance expertise with technical skills.",
  extendedBio: "My journey from finance to technology was driven by a desire to build tools that make financial systems more reliable and accessible. I'm passionate about connecting technical expertise with real-world business needs."
};