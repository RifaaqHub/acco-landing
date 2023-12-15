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
                tw="p-6 rounded-[1rem] bg-customGrey text-white w-full h-full lg:(max-w-[25rem])"
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
    name: 'Saheed',
    comment: `"For me, it's the ability to reactivate 'almost forgotten' acts of ibadaat like solatul tesbih, family usrah, family Du'a, Monday and Thursday fasts etc. To be honest, this app has been my best accountability companion since it was launched"`,
  },
  {
    name: 'Maya',
    comment:
      '"One of the things I love most about the app is the timely notifications to ginger you and remind you about your tasks. Thanks to the teams for the amazing job."',
  },
  {
    name: 'Fatimah',
    comment:
      '"Jazakumullohu khoiroo on your hardwork for the Muslim community as a whole"',
  },
  {
    name: 'Aminah',
    comment:
      '"The app has been a veritable accountability partner, not only with my deen, but in other aspect of my life."',
  },
  {
    name: 'Anas',
    comment: `"I like the way it help with my task.  The analysis it does, so i would know what I've accomplished in a week and where I'm lacking"`,
  },
  {
    name: 'Usman',
    comment:
      '"What has been the best for me is the consistency it pushes, making everyday counts to better myself. 🤍"',
  },
]

export default Testimonials
