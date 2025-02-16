
import {Github,Twitter, Linkedin, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold mb-4 sm:mb-0">Ashish's Portfolio</h1>
            <nav className="w-full sm:w-auto">
              <ul className="flex flex-wrap justify-center sm:space-x-6">
                <li><a href="#about" className="px-3 py-2 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="px-3 py-2 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#education" className="px-3 py-2 hover:text-blue-400 transition-colors">Education</a></li>
                <li><a href="#contact" className="px-3 py-2 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-center space-x-6">
          <a href="https://github.com/ashishgithuba" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
           
          </a>
          <a href="https://leetcode.com/u/AshishkumarSingh1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            LeetCode
          </a>
          <a href="https://www.linkedin.com/in/ashish-kumar-singh-03531a268/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/AshishS00683806" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <Twitter className="w-5 h-5"/>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg">Software Engineer / Full Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Hi, I'm <span className="text-blue-500">Ashish Singh</span></h1>
          <p className="mt-6 max-w-2xl mx-auto">I specialize in creating dynamic, scalable, and user-friendly web applications.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="/background.jpg" 
                alt="Coding workspace" 
                className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300 mb-6">
                Hello! I'm Ashish Singh, a passionate web developer with a strong focus on creating responsive and engaging web applications. 
                I specialize in both front-end and back-end development, working towards building seamless and efficient user experiences.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-2">Skills & Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Backend Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Database Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Version Control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Development Tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-102 transition-transform">
              <h3 className="text-2xl font-bold">Bachelor's in Information Science and Engineering</h3>
              <p className="mt-2 text-gray-300">The Oxford College of Engineering, Bangalore, India</p>
              <p className="mt-2 text-sm text-gray-400">December 2021 - Present</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-102 transition-transform">
              <h3 className="text-2xl font-bold">Higher Secondary (12th Grade)</h3>
              <p className="mt-2 text-gray-300">Jay Prakash College, Bihar, India</p>
              <p className="mt-2 text-sm text-gray-400">June 2019 - May 2021</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-102 transition-transform">
              <h3 className="text-2xl font-bold">Secondary (10th Grade)</h3>
              <p className="mt-2 text-gray-300">Delhi Model Public School, Bihar, India</p>
              <p className="mt-2 text-sm text-gray-400">May 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform">
              <h3 className="text-2xl font-bold">College Management System</h3>
              <p className="mt-4">A web application designed to simplify college management, handling student data, courses, timetables, exams, and fees. It streamlines administrative tasks, improving efficiency for staff and faculty.</p>
              <p className="mt-2 text-sm text-gray-600">Technologies: HTML, CSS, JavaScript, Java, MySQL</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform">
              <h3 className="text-2xl font-bold">Quiz Website</h3>
              <p className="mt-4">An interactive platform where users can take quizzes on a variety of topics. The website tracks users' scores, providing a fun way to test and enhance knowledge.</p>
              <p className="mt-2 text-sm text-gray-600">Technologies: HTML, CSS, JavaScript, Java, MySQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="mb-6">Feel free to reach out if you'd like to collaborate or have any questions.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/3 text-left space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:aks06012004@gmail.com" className="text-blue-300 hover:underline">aks06012004@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918863933610" className="text-blue-300 hover:underline">+91 8863933610</a>
              </div>
              <p className="flex items-center space-x-3">
                <span className="text-blue-400">📍</span>
                <span>Bangalore, India</span>
              </p>
            </div>

            <form className="w-full md:w-2/3 bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label className="block font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Message</label>
                <textarea 
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  rows={4} 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 Ashish Singh</p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/ashish-kumar-singh-03531a268/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ashishgithuba" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:aks06012004@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918863933610" className="hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;