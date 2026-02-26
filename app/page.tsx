export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-indigo-400">Alan Joe Augusthy</span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-8">
          A passionate Full Stack Developer specializing in building modern,
          responsive, and high-performance web applications.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I'm a developer who loves creating beautiful and functional web
          experiences using modern technologies like Next.js and Tailwind CSS. Sql and python
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-20 bg-gray-900 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-indigo-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Portfolio Website", "E-commerce App", "Dashboard UI"].map(
              (title, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition"
                >
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-400">
                    Project description goes here.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">
          Contact Me
        </h2>

        <a
          href="mailto:alanjoekattakayam@gmail.com"
          className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Send Email
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </main>
  );
}
