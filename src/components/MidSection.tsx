import React from "react"
import { motion } from "framer-motion"
// import { projects } from "../consts"

const MidSection: React.FC = () => {
  // const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //         opacity: 1,
  //         transition: {
  //             staggerChildren: 0.2
  //         }
  //     }
  // }

  // const itemVariants = {
  //     hidden: { y: 50, opacity: 0 },
  //     visible: {
  //         y: 0,
  //         opacity: 1,
  //         transition: { type: "spring", stiffness: 100 }
  //     }
  // }

  // const tagVariants = {
  //     hidden: { scale: 0 },
  //     visible: { scale: 1, transition: { type: "spring", stiffness: 500 } }
  // }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-10 bg-blue-500 dark:bg-blue-700 text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I'm Super Pocket 64
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-10"
        >
          I'm always building random stuff, check out my latest projects below
        </motion.p>
      </div>
    </motion.section>
  )
}

export default MidSection
