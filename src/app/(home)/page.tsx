'use client'

import React from 'react'
import Hero from './hero'
import WaitListForm from './waitListForm'
import Attention from './Attention'
import Features from './Features'
import Faq from './Faq'
import { zonedTimeToUtc } from 'date-fns-tz'
import CountDown from '../Countdown'
import tw from 'twin.macro'

const Home = () => {
  const targetTimeZone = 'Africa/Lagos' // WAT is Africa/Lagos time zone
  const watDateTime = zonedTimeToUtc(
    new Date(2023, 7, 20, 17, 0, 0),
    targetTimeZone,
  )
  const now = new Date()
  const isPrelaunch = now < watDateTime

  return (
    <>
      <div
        css={[
          isPrelaunch && tw`fixed w-full h-full overflow-hidden z-[200] top-0`,
          !isPrelaunch && tw`hidden`,
        ]}
      >
        <CountDown />
      </div>
      <Hero />
      <Attention />
      <Features />
      <Faq />
      <WaitListForm />
    </>
  )
}

export default Home
