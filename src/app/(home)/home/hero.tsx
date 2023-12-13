import { Heading, GetStarted, Maxwidth, Paragraph } from '@/components'

const Hero = () => {
  return (
    <section tw="bg-primary text-white">
      <Maxwidth tw="py-[7.69rem] px-6 lg:(gap-8 py-16 px-[6.25rem])">
        <div tw="mx-auto flex flex-col gap-6 text-center items-center justify-center lg:(max-w-[80%])">
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

          <GetStarted tw="text-lg" shadow />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Hero
