'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'
import img from './assets/hero.png'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img.src})` }}
      tw="bg-primary text-white bg-center bg-cover"
    >
      <Maxwidth tw="py-[7.69rem] px-6 relative lg:(gap-8 py-16 p-[6.25rem])">
        <div tw="mx-auto relative z-[1] flex flex-col gap-6 text-center items-center justify-center lg:(max-w-[80%])">
          <Heading tw="max-sm:(text-[2rem] leading-[3rem])">
            About Acco-Rifaaq
          </Heading>

          <Paragraph tw="py-2 px-12 rounded-full bg-[#EBF0FF33] max-w-fit lg:(py-4 px-16)">
            Guiding Your Journey to Purposeful Living
          </Paragraph>
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
