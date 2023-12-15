'use client'

import { Maxwidth } from '@/components'
import Faq from '../home/Faq'
import {
  FeaturesElevate,
  JoinCommunity,
} from '../home/join-community/feature-list-join'
import Testimonials from '../home/testimonials'
import Hero from './hero'
import PricingInfo from './pricing-info'

const Pricing = () => {
  return (
    <>
      <Hero />
      <Maxwidth tw="py-12 px-6 flex flex-col gap-6 lg:(p-[6.25rem] gap-[6.25rem]) text-center">
        <PricingInfo />

        <div tw="bg-primary rounded-[1rem] text-white">
          <FeaturesElevate darkBg />
        </div>
      </Maxwidth>

      <Testimonials />

      <Maxwidth tw="py-12 px-6 lg:(p-[6.25rem])">
        <JoinCommunity />
      </Maxwidth>

      <Faq />
    </>
  )
}

export default Pricing
