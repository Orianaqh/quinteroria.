import React from 'react'
// framer-motion
import { motion, useIsPresent } from 'framer-motion'

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};


const Layout = ({children}) => {
  const isPresent = useIsPresent();
  return (
    <motion.div
    initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 2, transition: { duration: 0.3, ease: "circIn" } }}
        className="privacy-screen">
      {children}
    </motion.div>
  )
}

export default Layout