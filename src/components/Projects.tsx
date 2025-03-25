import React from "react"
import { motion } from "framer-motion"
import { myProjects } from "../consts"
import { SelectScreenPayload } from "../types"

const Projects: React.FC = ({
  screen,
  setScreen,
  data,
}: SelectScreenPayload): React.ReactNode => {
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
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {myProjects.map((project) => {
            const { id, title, description, screenStr } = project
            return (
              <motion.div
                key={id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700/30 p-6 overflow-hidden relative"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow:
                    "0 15px 30px rgba(0, 100, 255, 0.2), 0 0 15px rgba(0, 200, 255, 0.3)",
                  //   rotate: 0.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                {/* Glow effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/0 to-purple-400/0 z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold mb-2 dark:text-white"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description}
                  </p>
                  <motion.p
                    className="dark:bg-blue-800 dark:text-white px-4 py-2 rounded dark:hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    // onClick={() => selectScreen(screen) } // Assuming selectScreen is a function to set the current screen
                    onClick={() => setScreen(screenStr || "")} // Update to use setScreen with fallback
                  >
                    View Project
                  </motion.p>
                  {/* <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:bg-blue-800 dark:text-white px-4 py-2 rounded dark:hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a> */}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
