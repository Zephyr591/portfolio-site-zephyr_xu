export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 flex justify-between items-center sticky top-0">
        <h1 className="text-2xl font-bold">Zephyr Xu</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I’m Zephyr 👋</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Master of IT student at Monash University, passionate about
          software development, cloud technologies, and data-driven solutions.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I have a background in finance and information technology, with hands-on
          experience in Python, Java, databases, and cloud computing (AWS, Oracle Cloud).
          I enjoy building web applications and solving problems that combine technical
          skills with real-world impact.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">📱 Android App</h3>
            <p className="mt-2 text-gray-600">
              Built with Java/Kotlin, featuring user authentication and local
              data storage for a smooth mobile experience.
            </p>
          </div>
          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">☁️ AWS Cloud Project</h3>
            <p className="mt-2 text-gray-600">
              Deployed a serverless application using AWS Lambda, API Gateway,
              and DynamoDB, demonstrating scalable cloud design.
            </p>
          </div>
          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">🌱 EcoGenius</h3>
            <p className="mt-2 text-gray-600">
              Team project using AI (Python) to classify waste items and provide
              recycling guidance. Worked on front-end and API integration.
            </p>
          </div>
          {/* Project 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">💻 HealthConnect</h3>
            <p className="mt-2 text-gray-600">
              Developed a web application with Vue + Java backend, including
              authentication, role-based logic, and rating features.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email: <a href="mailto:xusc591@gmail.com" className="text-blue-600 hover:underline">xusc591@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sicheng-xu-25a33333a/" className="text-blue-600 hover:underline">My Profile</a></p>
        <p>GitHub: <a href="https://github.com/" className="text-blue-600 hover:underline">GitHub</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        © 2025 Zephyr Xu. All rights reserved.
      </footer>
    </div>
  );
}