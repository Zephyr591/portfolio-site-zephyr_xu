// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "📱 VolunTrack - Android Volunteer Tracking App",
    description:
      "A comprehensive volunteer tracking mobile application built with Kotlin and Jetpack Compose. Features Google Authentication, Firebase integration, personalized event recommendations based on Google Calendar analysis, progress tracking with visual charts, and a modern Material Design UI with dark/light mode support.",
    tech: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "Firebase",
      "Google Authentication",
      "Google Calendar API",
      "Room Database",
      "Retrofit",
      "Material Design"
    ],
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
  {
    id: 2,
    title: "🦉 BirdTag – AWS Serverless Cloud Platform",
    description:
      "A cross-region, cloud-native platform for wildlife researchers to manage tagged bird media. Built with a modern AWS serverless architecture and scalable search capabilities.",
    tech: [
      "AWS Lambda",
      "Amazon S3",
      "DynamoDB",
      "Oracle Cloud Object Storage",
      "Node.js",
      "React",
      "REST API",
      "CI/CD",
      "Docker"
    ],
    color: "from-orange-500 to-red-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591",
    screenshots: [
      "/images/projects/birdtag-search.png",
      "/images/projects/birdtag-architecture.png",
      "/images/projects/birdtag-files.png",
      "/images/projects/birdtag-notification.png",
      "/images/projects/birdtag-upload.png"
    ]
  },
  {
    id: 3,
    title: "🏥 HealthConnect – Men’s Health Digital Platform",
    description:
      "A Vue 3-based responsive web app promoting men’s health awareness. Features interactive health event listings, tailored tips, rating system, and role-based dashboards.",
    tech: [
      "Vue 3",
      "JavaScript",
      "Bootstrap 5",
      "Pinia",
      "Vue Router",
      "localStorage"
    ],
    color: "from-fuchsia-500 to-rose-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591/healthconnect",
    screenshots: ["/images/projects/healthconnect-home.png"]
  },
  {
    id: 4,
    title: "🌿 EcoGenius – Smart Sustainability Platform",
    description:
      "An all-in-one sustainability solution promoting waste reduction, smart disposal, and community engagement. EcoGenius empowers users to classify waste using AI, exchange unwanted items, and gain personalized disposal advice – all tailored to their local council’s rules. Built collaboratively as part of Monash University's Industry Experience capstone project.",
    tech: [
      "React",
      "Tailwind CSS",
      "Lucide Icons",
      "ECharts",
      "OpenAI API",
      "Node.js",
      "GitHub Actions",
      "Amazon RDS"
    ],
    color: "from-emerald-500 to-lime-500",
    projectUrl: "#",
    githubUrl: "https://github.com/Zephyr591/ecogenius",
    screenshots: [
      "/images/projects/ecogenius-home.png",
      "/images/projects/ecogenius-ai-result.png",
      "/images/projects/ecogenius-billboard.png",
      "/images/projects/ecogenius-data-insight.png",
      "/images/projects/ecogenius-search-guide.png"
    ]
  }
];

export const skillsData = [
  { name: "Java", level: 90 },
  { name: "Python", level: 90 },
  { name: "JavaScript/Vue.js", level: 85 },
  { name: "Cloud Technologies", level: 80 },
  { name: "Databases", level: 85 }
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
  preferredName: "Sicheng Xu",
  title: "Graduate Software Developer",
  subtitle: "Master of IT Student at Monash University",
  location: "Melbourne, VIC, Australia",
  bio: "Graduate Software Developer with a Master of Information Technology from Monash University, skilled in Java, Python, SQL, and full-stack web development. Previously worked for two years at a top-five securities firm in China, bringing unique perspective combining finance expertise with technical skills.",
  extendedBio:
    "My journey from finance to technology was driven by a desire to build tools that make financial systems more reliable and accessible. I'm passionate about connecting technical expertise with real-world business needs."
};