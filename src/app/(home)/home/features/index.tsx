import { Heading, Maxwidth, Paragraph } from '@/components'
import Image, { StaticImageData } from 'next/image'
import tw from 'twin.macro'
import accountability from './assets/accountability.png'
import guided from './assets/guided.png'
import partnership from './assets/partnership.png'
import reminders from './assets/reminders.png'
import tasks from './assets/tasks.png'
import reward from './assets/reward.png'
import progress from './assets/progress.png'
import screen from './assets/screen.png'

const Features = () => {
  return (
    <section>
      <Maxwidth tw="py-12 flex flex-col gap-12 lg:(pt-[6.25rem] gap-[6.25rem])">
        <div>
          <Heading $variant="h2" as="h2" tw="text-center pb-4 lg:(pb-6)">
            Features That Resonate
          </Heading>

          <ul tw="grid gap-2 pt-12 pb-16 px-6 lg:(grid-cols-2 items-stretch py-16 px-[6.25rem])">
            {features.map((feature, index) => (
              <li key={index}>
                <Feature {...feature} />
              </li>
            ))}
          </ul>
        </div>

        <div tw="bg-customGrey rounded-[1rem] py-12 px-4 lg:(p-12)">
          <Heading $variant="h2" as="h2" tw="text-secondary pb-6">
            Why Choose Acco-Rifaaq?
          </Heading>

          <div tw="flex flex-col gap-6 lg:(gap-16 flex-row-reverse)">
            <ul tw="grid gap-2 pt-12 pb-16 px-6 lg:(gap-5 max-w-[34.4rem] flex-1)">
              {reasons.map((reason, index) => (
                <li key={index}>
                  <Reason {...reason} />
                </li>
              ))}
            </ul>

            <Image src={screen} alt="acco-partnership" tw="max-w-[14.1rem]" />
          </div>
        </div>
      </Maxwidth>
    </section>
  )
}

const Feature = ({
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
        tw`rounded-[2rem] h-full bg-customGrey text-white flex flex-col gap-6 px-8 py-6 lg:(gap-8)`,
      ]}
    >
      <Image src={img} tw="w-12 lg:(w-[4.25rem])" alt={title} />
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
        tw`rounded-[2rem] h-full bg-lightGold text-white border-2 border-lightGold flex flex-col gap-6 px-4 lg:(px-6 flex-row gap-4)`,
      ]}
    >
      <Image src={img} tw="w-12 lg:(w-[4.25rem])" alt={title} />

      <div>
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
    </div>
  )
}

const features = [
  {
    title: 'Accountability Elevated',
    desc: 'Mark your daily tasks, witness your completion percentage rise. Instill a sense of accountability, in preparation for the ultimate account on the Day of Judgment.',
    img: accountability,
  },
  {
    title: 'Reminders that Fetch Rewards',
    desc: 'Receive push notifications as gentle reminders. Your mobile becomes a valuable companion, aiding you in earning spiritual rewards in your everyday actions.',
    img: reminders,
  },
  {
    title: 'Partnerships that Matter',
    desc: 'Forge connections with like-minded individuals. Elevate your existing relationships with purposeful engagement. Surround yourself with those striving for improvement — a principle deeply valued in Islam.',
    img: partnership,
  },
  {
    title: 'Guided Growth for Every Level',
    desc: `Whether you're seasoned in balance or a newcomer seeking improvement, Acco-Rifaaq offers targeted categories for deliberate growth. Choose what matters to you, see impactful suggestions, and embark on your journey.`,
    img: guided,
  },
]

const reasons = [
  {
    title: 'Purposeful Living',
    desc: `Your tasks are not just routines; they're steps towards spiritual accountability and growth.`,
    img: tasks,
  },
  {
    title: 'Guided Progress',
    desc: `Whether you're a seasoned individual or starting fresh, Acco-Rifaaq is your compass for intentional living.`,
    img: progress,
  },
  {
    title: 'Real Rewards',
    desc: `Your daily actions, guided by our reminders, become a means to earn spiritual rewards and strengthen your connection with Allah.`,
    img: reward,
  },
]

export default Features
