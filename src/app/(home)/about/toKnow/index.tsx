'use client'

import mission from './mission.png'
import journey from './journey.png'
import Image, { StaticImageData } from 'next/image'
import { Heading, Maxwidth, Paragraph } from '@/components'

const ThingsToKnow = () => {
  return (
    <Maxwidth tw="py-12 px-6 lg:(p-[6.25rem])">
      <Heading $variant="h2" as={'h2'} tw="text-center max-w-[37rem] mx-auto">
        Things To Know About Acco-Rifaaq
      </Heading>

      <ul tw="grid gap-6 pt-12 pb-16 mx-auto md:(grid-cols-2 flex-1)">
        {infos.map((info, index) => (
          <li key={index}>
            <Info {...info} />
          </li>
        ))}
      </ul>
    </Maxwidth>
  )
}

const Info = ({
  title,
  desc,
  img,
}: {
  title: string
  desc: string
  img: StaticImageData
}) => {
  return (
    <div tw="rounded-[1rem] h-full bg-customGrey text-white flex flex-col gap-6 p-4 lg:(px-6 gap-8)">
      <div>
        <Heading as={'h4'} $variant={'h4'}>
          {title}
        </Heading>

        <Paragraph tw="text-[#CFD1D8] text-sm md:(text-base) lg:(text-lg)">
          {desc}
        </Paragraph>
      </div>

      <Image
        src={img}
        tw="ml-auto w-[6rem] h-[6rem] lg:(w-[12rem] h-[12rem])"
        alt={title}
      />
    </div>
  )
}

const infos = [
  {
    title: 'Our Journey',
    desc: `Acco-Rifaaq is born from a deep understanding that every moment holds potential, every action can be purposeful. Our journey started with a mission to bridge the gap between timeless Islamic values and the modern pursuit of productivity.`,
    img: journey,
  },
  {
    title: 'Our Mission',
    desc: `Empowering Muslims at every level to lead lives rich in purpose, accountability, and continuous growth. We aim to be more than an app; we are a guide, a companion on your journey to living intentionally.`,
    img: mission,
  },
]

export default ThingsToKnow
