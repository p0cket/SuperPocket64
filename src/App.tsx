import "./App.css"

function App() {
  // Replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of your first project",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of your second project",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of your third project",
      link: "https://example.com/project3",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-l">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Super Pocket 64</h1>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-10 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-xl">Check out my latest projects below</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/30 p-6"
              >
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Super Pocket 64</p>
      </footer>
    </div>
  )
}

export default App
