'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'
import Image, { StaticImageData } from 'next/image'
import tasks from './assets/task.png'
import users from './assets/users.png'
import rating from './assets/rating.png'
import partnership from './assets/partnership.png'

const DiscoverAcco = () => {
  return (
    <section tw="bg-customGrey">
      <Maxwidth tw="py-12 px-6 flex flex-col gap-6 text-center text-white lg:(py-[6.25rem])">
        <div>
          <Heading $variant="h2" as="h2" tw="px-4">
            Discover Acco-Rifaaq
          </Heading>
          <Paragraph>Checked by 1000+ muslims and counting</Paragraph>
        </div>

        <ul tw="grid gap-4 justify-center max-w-[52.4rem] mx-auto md:(grid-cols-2 gap-6 items-stretch)">
          {metrics.map((feature, index) => (
            <li key={index}>
              <Metric {...feature} />
            </li>
          ))}
        </ul>
      </Maxwidth>
    </section>
  )
}

const Metric = ({
  title,
  desc,
  img,
}: {
  title: string
  desc: string
  img: StaticImageData
}) => {
  return (
    <div tw="rounded-[2rem] h-full bg-lightGold text-white border-2 border-lightGold flex gap-4 p-4 items-center lg:(px-6 max-w-[34.375rem])">
      <Image
        src={img}
        tw="w-12 lg:(min-w-[5.375rem] h-[5.375rem])"
        alt={title}
      />

      <div tw="text-left">
        <Heading as={'h4'} $variant={'h4'} tw="lg:(text-[1.4rem])">
          {title}
        </Heading>

        <Paragraph tw="text-[#CFD1D8] text-sm md:(text-lg) lg:(text-2xl)">
          {desc}
        </Paragraph>
      </div>
    </div>
  )
}

const metrics = [
  {
    title: 'Amazing Muslim Users',
    desc: `1000+`,
    img: users,
  },
  {
    title: 'Task Created',
    desc: `1200+`,
    img: tasks,
  },
  {
    title: 'Partnerships Formed',
    desc: `100+`,
    img: rating,
  },
  {
    title: 'Average Rating',
    desc: `4.5`,
    img: partnership,
  },
]

export default DiscoverAcco
