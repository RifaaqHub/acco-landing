import { Heading, JoinWaitlist, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import heroImg from 'public/hero-img.png'

const Hero = () => {
  return (
    <section tw="bg-primary text-white bg-primary bg-center bg-cover bg-[linear-gradient(180deg,_rgba(10,_22,_54,_0.89)_51.57%,_rgba(15,_32,_77,_0.77)_100%)]">
      <Maxwidth tw="flex flex-col gap-[4.31rem] pt-12 pb-16 px-6 lg:(flex-row items-center justify-between py-16 px-[6.25rem] gap-8) xl:(gap-[2.31rem])">
        <div tw="">
          <Heading tw="pb-4">
            Your Ultimate Islamic Productivity Companion!
          </Heading>

          <Paragraph tw="pb-16 lg:(text-2xl)">
            Through innovation and compassion, we aspire to be the ultimate
            partner in personal and professional growth, driving positive change
            and creating a brighter future for all.
          </Paragraph>

          <JoinWaitlist tw="text-lg" shadow />
        </div>

        <Image src={heroImg} alt="" tw="max-w-[28rem]" />
      </Maxwidth>
    </section>
  )
}

export default Hero
