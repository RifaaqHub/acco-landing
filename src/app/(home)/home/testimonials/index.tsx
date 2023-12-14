'use client'

import { Button, Heading, Maxwidth, Paragraph } from '@/components'
import user from '../features/assets/partnership.png'
import Image from 'next/image'
import { useToggle } from 'usehooks-ts'

const Testimonials = () => {
  const [truncate, toggleTruncate] = useToggle(true)
  const testimonialsList = truncate ? testimonials.slice(0, 3) : testimonials
  return (
    <section tw="bg-lightBlue bg-[url(/subtle-bg.svg)] bg-cover">
      <Maxwidth as="section" tw="py-12 px-6 lg:(p-[6.25rem])">
        <Heading $variant="h2" as="h2" tw="pb-6 text-center">
          Hear from amazing muslims like you:
        </Heading>

        <div tw="flex flex-wrap gap-5 items-center justify-center md:(grid grid-cols-2) lg:(grid-cols-3)">
          {testimonialsList.map((testimonial, idx) => {
            const { name, comment } = testimonial
            return (
              <div
                key={idx}
                tw="p-6 rounded-[1rem] bg-customGrey text-white w-full lg:(max-w-[25rem])"
              >
                <div tw="flex gap-4 items-center pb-6">
                  <Image src={user} tw="w-8 h-8" alt="" />
                  <Paragraph tw="font-calm">{name}</Paragraph>
                </div>
                <Paragraph>{comment}</Paragraph>
              </div>
            )
          })}
        </div>

        <Button
          tw="mt-6 px-16 bg-customGrey text-white mx-auto"
          onClick={toggleTruncate}
        >
          show {truncate ? 'more' : 'less'}
        </Button>
      </Maxwidth>
    </section>
  )
}

const testimonials = [
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
  {
    name: 'Rasheed',
    comment:
      '"Acco-Rifaaq transformed my daily routine, merging productivity and spirituality seamlessly."',
  },
]

export default Testimonials
