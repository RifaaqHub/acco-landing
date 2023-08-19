import { Heading, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import tw from 'twin.macro'

const Features = () => {
  return (
    <section>
      <Maxwidth tw="grid gap-2 pt-12 pb-16 px-6 lg:(grid-cols-2 py-16 px-[6.25rem])">
        {features.map((feature, index) => (
          <Feature {...feature} reverse={index === 1 || index === 2} />
        ))}
      </Maxwidth>
    </section>
  )
}

const Feature = ({
  title,
  desc,
  img,
  available,
  reverse,
}: {
  title: string
  desc: string
  img: string
  available: boolean
  reverse: boolean
}) => {
  return (
    <div
      css={[
        tw`rounded-[2rem] bg-customGrey flex flex-col gap-14 px-8 py-16 lg:(px-16 py-20)`,
        !available && tw`bg-primary`,
        reverse && tw`flex-col-reverse`,
      ]}
    >
      <div tw="flex flex-col gap-4">
        <Heading as={'p'} $variant="h4" tw="text-[#B5B7BC] pb-6">
          {available ? 'Feature' : 'Upcoming Feature'}
        </Heading>

        <Heading
          as={'h4'}
          tw="text-secondary text-[1.75rem] leading-[2.275rem] md:(text-4xl) lg:(text-[2.5rem] leading-[3.25rem])"
        >
          {title}
        </Heading>

        <Paragraph tw="text-[#CFD1D8] text-sm md:(text-base) lg:(text-lg)">
          {desc}
        </Paragraph>
      </div>

      <div tw="relative w-full h-[23rem] object-cover lg:(h-[36.8rem])">
        <Image alt="" src={img} fill tw="object-contain" />
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Creating weekly tasks',
    desc: 'Users can create and organize their weekly tasks and goals. This helps them prioritize their activities in alignment with their religious commitments.',
    img: '/weekly.png',
    available: true,
  },
  {
    title: 'Enabling task tracking',
    desc: 'Users can track their daily activities, ensuring that they are staying on track with their goals and commitments, both in terms of productivity and religious practices.',
    img: '/tracking.png',
    available: true,
  },
  {
    title: 'Providing periodic progress analytics',
    desc: 'Users can track their daily activities, ensuring that they are staying on track with their goals and commitments, both in terms of productivity and religious practices.',
    img: '/analytics.png',
    available: true,
  },
  {
    title: 'Accountability partnerships',
    desc: 'Users have the option to form accountability partnerships with fellow app users or friends. This fosters a sense of community and support, as users can motivate and encourage each other to achieve their goals.',
    img: '/upcoming.png',
    available: false,
  },
]

export default Features
