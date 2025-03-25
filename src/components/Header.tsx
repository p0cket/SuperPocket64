import React, { useState } from "react"
import { motion } from "framer-motion"
import { screens } from "../consts"

type HeaderProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>
}

const { home, main, debounce } = screens
const links = [
  { name: "Home", path: "/", screenStr: home },
  { name: "Bebouncer", path: "/", screenStr: debounce },
  { name: "Games", path: "/games" },
  { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" },
  { name: "Main", path: "/main", screenStr: main },
]

const Header: React.FC<HeaderProps> = ({ setScreen }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  // Create particles array with different starting delays
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: i * 0.2, // Staggered delays for continuous effect
    size: Math.random() * 4 + 2,
    color: `hsl(${210 + Math.random() * 40}, 100%, 75%)`,
  }))

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

  // Continuous particle animation
  const particleAnimation = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0.5],
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 60,
    },
    transition: {
      duration: 1.2,
      ease: "easeOut",
      times: [0, 0.2, 1],
      repeat: Infinity,
      repeatType: "loop" as const,
    }
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
            {links.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScreen(item.screenStr || "home")}
                className="relative" // Added for positioning particles
                onHoverStart={() => setHoveredLink(item.name)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <a className="hover:text-white transition">{item.name}</a>

                {/* Continuous Particle effects */}
                {hoveredLink === item.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {particles.map((particle) => (
                      <motion.div
                        key={particle.id}
                        // className="absolute rounded-full"
                        className="absolute"

                        initial={{ 
                          opacity: 0, 
                          scale: 0, 
                          x: 0, 
                          y: 0,
                          left: "50%",
                          top: "50%",
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.2, .5],
                        //   x: (Math.random() - 0.5) * 60,
                        //   y: (Math.random() - 0.5) * 60,
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                        }}
                        transition={{
                        //   duration: 2.8,
                        duration: 2,
                        ease: "easeOut",
                        times: [0, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 0,
                        delay: particle.delay % 1.5, // Reduced modulo for faster particle generation
                        }}
                        style={{
                          width: particle.size,
                          height: particle.size,
                          backgroundColor: particle.color,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
