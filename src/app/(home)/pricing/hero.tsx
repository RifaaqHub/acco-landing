'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'
import img from './assets/hero.png'

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img.src})` }}
      tw="bg-primary text-white bg-center bg-cover"
    >
      <Maxwidth tw="py-[7.69rem] px-6 relative lg:(gap-8 py-16 px-[6.25rem])">
        <div tw="mx-auto relative z-[1] flex flex-col gap-6 text-center items-center justify-center lg:(max-w-[80%])">
          <Paragraph tw="py-2 px-12 rounded-full bg-[#EBF0FF33] max-w-fit lg:(py-4 px-16)">
            Transform your productivity to power amazing progress and
            spirituality
          </Paragraph>

          <Heading tw="pb-4 max-sm:(text-[2rem] leading-[3rem])">
            Empower Your Journey with{' '}
            <span tw="text-secondary">Acco-Rifaaq's Premium</span> Experience.
          </Heading>

          <Paragraph tw="pb-4 lg:(text-2xl)">
            Unlock a World of Enhanced Productivity, Deeper Spirituality, and
            Personalized Growth. Choose Your Plan and Elevate Your Daily Strive
            for Excellence!
          </Paragraph>
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
