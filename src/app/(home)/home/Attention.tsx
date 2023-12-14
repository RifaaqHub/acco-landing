import { GetStarted, Heading, Maxwidth, Paragraph } from '@/components'

const Attention = () => {
  return (
    <section tw="bg-lightGold px-6 py-12 lg:(px-[6.25rem] py-[3.75rem])">
      <Maxwidth tw="p-6 flex flex-col items-center bg-primary text-white rounded-[1rem] shadow-2xl lg:(py-16 flex-row px-[6.25rem])">
        <div tw="flex-1">
          <Heading as={'h4'} $variant="h4" tw="pb-4">
            Start Your Journey Today!
          </Heading>

          <Paragraph>
            Embrace conscious living, build accountability, and continuously
            grow with Acco-Rifaaq. Your ultimate Islamic productivity companion
            awaits.
          </Paragraph>
        </div>

        <GetStarted tw="px-16" />
      </Maxwidth>
    </section>
  )
}

export default Attention
