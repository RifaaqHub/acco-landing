'use client'

import { GetStarted, Heading, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import badge from './badge.png'
import badgeLight from './badge-light.png'
import stack from './stack.png'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { routes } from '@/lib/routes'

const FeatureListJoin = () => {
  return (
    <Maxwidth tw="py-12 flex flex-col gap-12 px-6 lg:(grid grid-cols-2 py-14 px-[6.25rem])">
      <div tw="rounded-lg border border-primary">
        <FeaturesElevate />
      </div>

      <JoinCommunity />
    </Maxwidth>
  )
}

export const FeaturesElevate = ({ darkBg }: { darkBg?: boolean }) => (
  <div tw="py-6 px-4 lg:(px-12)">
    <Heading as="h4" $variant="h4" tw="pb-6">
      Features That Elevate
    </Heading>

    <div tw="flex flex-col gap-6 lg:(grid grid-cols-2 items-center)">
      <ul>
        {[
          'Send Dua',
          'Task Templates',
          'Task For Circles',
          'Send Commendations',
        ].map(feature => (
          <li key={feature} tw="flex items-center text-left gap-3">
            <Image src={darkBg ? badgeLight : badge} alt="" />
            <Paragraph>{feature}</Paragraph>
          </li>
        ))}
      </ul>

      <Image
        src={stack}
        alt=""
        tw="w-full max-w-[25rem] mx-auto lg:(max-w-[100%])"
      />
    </div>
  </div>
)

export const JoinCommunity = () => (
  <div tw="flex flex-col justify-center items-center text-center gap-6 bg-primary rounded rounded-lg text-white px-4 py-6 lg:(px-12 py-16)">
    <Heading as="h4" $variant="h4">
      Join the growing community today!
    </Heading>

    <GetStarted tw="px-16" />

    <div tw="flex items-center justify-center gap-6">
      <a href={routes.twitter.path}>
        <FaXTwitter size={25} />
      </a>
      <a href={routes.facebook.path}>
        <FaFacebook size={25} />
      </a>
      <a href={routes.whatsapp.path}>
        <FaWhatsapp size={25} />
      </a>
    </div>
  </div>
)

export default FeatureListJoin
