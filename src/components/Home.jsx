import React from 'react'
import Content from './Content'
// framer-motion
import { motion } from 'framer-motion'
import Layout from './Layout'

function Home() {
  return (
    <Layout>
      <div className='items-center relative flex flex-col '>
        <Content />
      </div>
    </Layout>
  )
}

export default Home