import React from "react"
import { motion } from "framer-motion"
import { myProjects } from "../consts"

const Projects: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {myProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/30 p-6"
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                // className="inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-900 px-4 py-2 rounded text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
