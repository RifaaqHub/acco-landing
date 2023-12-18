import { Heading, Maxwidth, Paragraph } from '@/components'
import Image, { StaticImageData } from 'next/image'
import tw from 'twin.macro'
import accountability from './assets/accountability.png'
import reward from './assets/reward.png'
import guided from './assets/guided.png'
import connections from './assets/partnership.png'

const Features = () => {
  return (
    <section>
      <Maxwidth tw="py-12 flex flex-col gap-12 lg:(pt-[6.25rem] gap-[6.25rem])">
        <div tw="bg-customGrey rounded-[1rem] mx-6 py-12 px-4 lg:(p-12 mx-[6.25rem])">
          <Heading $variant="h2" as="h2" tw="text-secondary text-center pb-6">
            Why Choose Acco-Rifaaq?
          </Heading>

          <ul tw="grid gap-6 pt-12 pb-16 mx-auto md:(grid-cols-2 flex-1)">
            {reasons.map((reason, index) => (
              <li key={index}>
                <Reason {...reason} />
              </li>
            ))}
          </ul>
        </div>
      </Maxwidth>
    </section>
  )
}

const Reason = ({
  title,
  desc,
  img,
}: {
  title: string
  desc: string
  img: StaticImageData
}) => {
  return (
    <div
      css={[
        tw`rounded-[2rem] h-full bg-lightGold text-white border-2 border-lightGold flex flex-col gap-6 p-4 lg:(px-6 flex-row items-center gap-4 max-w-[34.375rem])`,
      ]}
    >
      <Image
        src={img}
        tw="w-12 lg:(min-w-[5.375rem] h-[5.375rem])"
        alt={title}
      />

      <div>
        <Heading as={'h4'} $variant={'h4'}>
          {title}
        </Heading>

        <Paragraph tw="text-[#CFD1D8] text-sm md:(text-base) lg:(text-lg)">
          {desc}
        </Paragraph>
      </div>
    </div>
  )
}

const reasons = [
  {
    title: 'Accountability Redefined',
    desc: `Witness the power of tracking tasks daily and consistent evaluation. Instill a sense of accountability in preparation for the Day of Judgment.`,
    img: accountability,
  },
  {
    title: 'Guided Growth for All',
    desc: `Acco-Rifaaq caters to seasoned individuals and newcomers alike. Choose from impactful categories, receive tailored suggestions, and embark on your journey of improvement.`,
    img: guided,
  },
  {
    title: 'Real Rewards in Real Time',
    desc: `With push notifications as gentle reminders, your mobile device becomes a valuable companion, aiding you in earning spiritual rewards with every spiritual and worldly action.`,
    img: reward,
  },
  {
    title: 'Connections that Matter',
    desc: `Forge meaningful connections through accountability partnerships. Strengthen existing relationships with purposeful engagement, surrounded by those striving for improvement — a principle deeply valued in Islam.`,
    img: connections,
  },
]

export default Features
