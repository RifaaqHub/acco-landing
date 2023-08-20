'use client'

import React from 'react'
import Hero from './hero'
import WaitListForm from './waitListForm'
import Attention from './Attention'
import Features from './Features'
import Faq from './Faq'

const Home = () => {
  return (
    <>
      <Hero />
      <Attention />
      <Features />
      <Faq />
      <WaitListForm />
    </>
  )
}

export default Home
