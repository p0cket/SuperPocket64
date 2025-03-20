import React from "react"
import { motion } from "framer-motion"

const Header: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren" },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10 },
    },
  }

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  }

  return (
    <motion.header
      className="bg-blue-600 text-white shadow-lg"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto p-2 flex justify-between items-center">
        <motion.h2
          className="text-3xl font-bold flex overflow-hidden"
          variants={titleVariants}
        >
          {"Super Pocket 64".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.nav variants={navVariants}>
          <ul className="flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "Games", path: "/games" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={item.path} className="hover:text-white transition">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
