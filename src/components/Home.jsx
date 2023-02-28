import React from 'react'
import Content from './Content'
// framer-motion
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
    // initial={{ width: '100%' }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth }}>
      <div className='items-center relative flex flex-col '>
        <Content />
      </div>
    </motion.div>
  )
}

export default Home