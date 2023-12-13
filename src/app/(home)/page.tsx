'use client'

import React from 'react'
import Hero from './home/hero'
import WaitListForm from './waitListForm'
import Attention from './home/Attention'
import Features from './home/features'
import Faq from './home/Faq'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Attention />
      <Faq />
      <WaitListForm />
    </>
  )
}

export default Home
