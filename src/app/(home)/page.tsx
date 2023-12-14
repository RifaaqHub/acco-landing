'use client'

import React from 'react'
import Hero from './home/hero'
import WaitListForm from './waitListForm'
import Attention from './home/Attention'
import Features from './home/features'
import Faq from './home/Faq'
import DiscoverAcco from './home/discover'
import FeatureListJoin from './home/join-community/feature-list-join'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DiscoverAcco />
      <FeatureListJoin />
      <Attention />
      <Faq />
      <WaitListForm />
    </>
  )
}

export default Home
