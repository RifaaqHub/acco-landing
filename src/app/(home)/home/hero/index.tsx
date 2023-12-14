import { Heading, GetStarted, Maxwidth, Paragraph } from '@/components'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section tw="bg-primary text-white bg-[linear-gradient(180deg,_rgba(10,_22,_54,_0.89)_51.57%,_rgba(15,_32,_77,_0.77)_100%)]">
      <Maxwidth tw="py-[7.69rem] px-6 relative lg:(gap-8 py-16 px-[6.25rem])">
        <div tw="mx-auto relative z-[1] flex flex-col gap-6 text-center items-center justify-center lg:(max-w-[80%])">
          <Paragraph tw="py-2 px-12 rounded-full bg-[#EBF0FF33] max-w-fit lg:(py-4 px-16)">
            🌟 Transform Your Intentions into Purposeful Actions
          </Paragraph>

          <Heading tw="pb-4 max-sm:(text-[2rem] leading-[3rem])">
            Your Ultimate <span tw="text-secondary">Islamic Productivity</span>{' '}
            Companion!
          </Heading>

          <Paragraph tw="pb-4 lg:(text-2xl)">
            Unlock a life of conscious living, accountability, and continuous
            growth with Acco-Rifaaq. Tailored for every Muslim, at every level,
            our app is your guide to a balanced and purposeful life.
          </Paragraph>

          <GetStarted tw="text-lg px-16" shadow />
        </div>

        <div tw="absolute top-0 left-0 w-full h-full z-[0]">
          <Image
            src={one}
            tw="hidden lg:(block top-12 left-12 absolute)"
            alt=""
          />
          <Image
            src={two}
            tw="max-lg:max-w-[100px] lg:(block bottom-12  left-12 absolute)"
            alt=""
          />
          <Image
            src={four}
            tw="max-lg:(max-w-[100px] right-4) right-12 bottom-12 absolute"
            alt=""
          />
          <Image
            src={three}
            tw="hidden lg:(block right-12 top-12 absolute)"
            alt=""
          />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
