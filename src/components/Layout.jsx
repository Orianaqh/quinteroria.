import React from 'react'
// framer-motion
import { motion } from 'framer-motion'

const animations = {
  initial: {opacity:0, height:50},
  animate: {opacity:1, x:0},
  exit: {opacity:0, x: -100},
}

const Layout = ({children}) => {
  return (
    <motion.div variants={animations} initial='initial' animate='animate' exit='exit'>
      {children}
    </motion.div>
  )
}

export default Layout