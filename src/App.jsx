import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 3D Tilt Effect
  const handleMouseEnter = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  return (
    <div className="font-sans text-gray-100 relative overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Zephyr
          </div>
          <div className="flex space-x-8">
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        {/* 3D Floating Elements */}
        <div 
          className="absolute top-20 left-20 w-20 h-20 opacity-20 transform-gpu"
          style={{
            transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px) rotateX(${scrollY * 0.1}deg)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform rotate-45 animate-pulse"></div>
        </div>
        <div 
          className="absolute top-1/2 right-32 w-16 h-16 opacity-20 transform-gpu"
          style={{
            transform: `translateX(${-mousePosition.x * 0.03}px) translateY(${-mousePosition.y * 0.03}px) rotateY(${scrollY * 0.15}deg)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-spin-slow"></div>
        </div>
        <div 
          className="absolute bottom-32 left-1/4 w-12 h-12 opacity-20 transform-gpu"
          style={{
            transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px) rotateZ(${scrollY * 0.2}deg)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        </div>
      </div>

      {/* Hero Section with 3D Room/Desk */}
      <section 
        ref={heroRef}
        className="relative z-10 h-screen flex flex-col justify-center items-center text-center pt-20"
      >
        <div className="relative z-20 max-w-6xl mx-auto px-6">
          
          {/* 3D Isometric Workspace */}
          <div className="mb-12 relative">
            <div 
              className="mx-auto relative transform-gpu transition-all duration-700 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateX(${15 + mousePosition.y * 0.01}deg) rotateY(${-5 + mousePosition.x * 0.01}deg)`
              }}
            >
              {/* Desk Base */}
              <div className="relative w-80 h-60 mx-auto">
                {/* Desk Surface */}
                <div 
                  className="absolute w-full h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-lg"
                  style={{transform: 'rotateX(75deg) translateZ(20px)'}}
                ></div>
                
                {/* Desk Front */}
                <div 
                  className="absolute w-full h-20 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-lg"
                  style={{transform: 'translateY(4px)'}}
                ></div>

                {/* Monitor */}
                <div 
                  className="absolute w-32 h-24 bg-slate-800 rounded-lg border-4 border-slate-700 left-1/2 transform -translate-x-1/2"
                  style={{transform: 'translateX(-50%) translateY(-40px) rotateX(15deg)'}}
                >
                  <div className="w-full h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded m-1 flex items-center justify-center text-xs text-white font-bold">
                    {'<CODE/>'}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 w-2 h-6 bg-slate-700 transform -translate-x-1/2"></div>
                  <div className="absolute -bottom-6 left-1/2 w-12 h-2 bg-slate-600 rounded transform -translate-x-1/2"></div>
                </div>

                {/* Laptop */}
                <div 
                  className="absolute w-20 h-16 left-8"
                  style={{transform: 'translateY(-30px) rotateX(25deg) rotateY(-20deg)'}}
                >
                  <div className="w-full h-12 bg-slate-700 rounded-t-lg"></div>
                  <div className="w-full h-1 bg-slate-800 rounded-b-lg"></div>
                  <div className="absolute inset-1 top-1 bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Coffee Cup */}
                <div 
                  className="absolute w-6 h-8 right-12"
                  style={{transform: 'translateY(-25px)'}}
                >
                  <div className="w-full h-6 bg-white rounded-b-full"></div>
                  <div className="absolute top-1 left-1 w-4 h-4 bg-amber-700 rounded-b-full"></div>
                  <div className="absolute top-2 -right-1 w-2 h-3 border-2 border-white rounded-full"></div>
                </div>

                {/* Books */}
                <div 
                  className="absolute right-20 w-12 h-8"
                  style={{transform: 'translateY(-25px) rotateY(10deg)'}}
                >
                  <div className="w-full h-2 bg-red-600 mb-1"></div>
                  <div className="w-full h-2 bg-blue-600 mb-1"></div>
                  <div className="w-full h-2 bg-green-600"></div>
                </div>

                {/* Mouse */}
                <div 
                  className="absolute w-4 h-6 right-32 bg-slate-600 rounded-lg"
                  style={{transform: 'translateY(-22px)'}}
                ></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-blue-300 font-medium">
              Hi mate, I am Zephyr 👨‍💻
            </p>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zephyr's Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Graduate Software Developer | Finance + IT | 
              <span className="text-blue-400 font-semibold"> Passionate about AI, Cloud, and Data Engineering</span>
            </p>
          </div>

          {/* Floating Action Text */}
          <div 
            className="absolute bottom-40 right-10 transform rotate-12 text-yellow-400 font-bold text-2xl animate-bounce"
            style={{
              transform: `rotate(12deg) translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`
            }}
          >
            Hello World!
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6 mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
              <span className="relative z-10">View My Work</span>
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 rounded-xl text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I am a Master of IT student at Monash University with a background in finance. 
                  Skilled in <span className="text-blue-400 font-bold">Java, Python, databases, and cloud technologies</span>, 
                  I enjoy solving problems through software engineering and building impactful projects.
                </p>
                <p className="text-gray-400">
                  My journey combines the analytical mindset of finance with the creative problem-solving of technology, 
                  creating unique perspectives on digital solutions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {['Java', 'Python', 'AWS', 'Databases', 'React/Vue'].map((skill, index) => (
                <div key={skill} className="group relative">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">{skill}</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 delay-300"
                          style={{ width: `${90 - index * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-6" id="work">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "📱 Android App",
                description: "Built with Java/Kotlin for Android, including user authentication and local storage.",
                tech: ["Java", "Kotlin", "Android", "SQLite"],
                color: "from-green-500 to-teal-500"
              },
              {
                title: "☁️ AWS Cloud Project", 
                description: "Designed and deployed a serverless app using AWS Lambda, API Gateway, and DynamoDB.",
                tech: ["AWS", "Lambda", "DynamoDB", "API Gateway"],
                color: "from-orange-500 to-red-500"
              },
              {
                title: "🌱 EcoGenius",
                description: "A team project using AI models in Python to classify waste and provide recycling tips.",
                tech: ["Python", "AI/ML", "TensorFlow", "Computer Vision"],
                color: "from-green-500 to-blue-500"
              },
              {
                title: "💻 HealthConnect",
                description: "Web application with Vue + Java backend, including authentication and rating features.",
                tech: ["Vue.js", "Java", "Spring Boot", "MySQL"],
                color: "from-blue-500 to-cyan-500"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleCardMouseMove}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 rounded-3xl blur-xl transition-all duration-300 group-hover:opacity-40`}></div>
                
                <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 h-full hover:border-blue-500/50 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      View Project
                    </button>
                    <button className="px-6 py-3 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="text-white">Let's Create Something </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and explore the possibilities together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {[
              { text: "Email Me", href: "mailto:xusc591@gmail.com", icon: "📧" },
              { text: "LinkedIn", href: "https://www.linkedin.com/in/sicheng-xu-25a33333a/", icon: "💼" },
              { text: "GitHub", href: "https://github.com/Zephyr591", icon: "💻" }
            ].map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{contact.icon}</span>
                  <span>{contact.text}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-slate-700/50">
        <p className="text-gray-400">
          © 2025 Zephyr Xu. Crafted with passion and creativity. 
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Built with React + TailwindCSS</span>
        </p>
      </footer>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </div>
  );
}