import "./App.css"
import Header from "./components/Header"
import MidSection from "./components/MidSection"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Header />

      {/* Intro Section */}
      <MidSection />
      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Super Pocket 64</p>
      </footer>
    </div>
  )
}

export default App
