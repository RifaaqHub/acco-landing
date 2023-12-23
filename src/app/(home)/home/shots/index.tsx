'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'
import { useIsClient } from 'usehooks-ts'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import analytics from './assets/analytics.png'
import circles1 from './assets/circles-1.png'
import circles2 from './assets/circles-2.png'
import templates1 from './assets/templates-1.png'
import templates2 from './assets/templates-2.png'
import daily from './assets/daily.png'
import weekly from './assets/week-template.png'
import Image, { StaticImageData } from 'next/image'

const ScreensShots = () => {
  const isClient = useIsClient()

  return (
    <Maxwidth>
      <Heading as={'h2'} $variant="h2" tw="pb-6 text-center">
        Features Shots
      </Heading>

      <ul tw="px-6 lg:(px-[6.25rem])">
        {isClient ? (
          <Slider
            arrows={false}
            dots={false}
            infinite
            slidesToScroll={1}
            slidesToShow={1}
            variableWidth
            adaptiveHeight
            autoplay
            autoplaySpeed={2000}
          >
            {shots.map((screen, idx) => (
              <li
                key={idx}
                tw="bg-lightGold mx-3 flex flex-col rounded-[1rem] overflow-hidden w-full max-w-[18.6rem]"
              >
                <div tw="flex-1 w-full relative overflow-hidden p-6 h-[18.5rem]">
                  <Image src={screen.img} alt={''} />
                </div>

                <Paragraph tw="z-[1] p-4 relative min-h-[6.625rem] bg-customGrey text-white text-sm">
                  {screen.text}
                </Paragraph>
              </li>
            ))}
          </Slider>
        ) : null}
      </ul>
    </Maxwidth>
  )
}

const shots: { text: string; img: StaticImageData }[] = [
  {
    text: 'Define your goals from various categories, As comprehensive as Islam is.',
    img: weekly,
  },
  {
    text: 'We bring them to you every day, and we remind you to stay on track.',
    img: daily,
  },
  {
    text: 'Find a good place to start using our ready made templates for various individuals.',
    img: templates1,
  },
  {
    text: 'You can optimize our templates to suit your needs and your person.',
    img: templates2,
  },
  {
    text: 'Do you yearn for righteous companions, we make that a step easier for you.',
    img: circles1,
  },
  {
    text: 'Gather your family and friend, and form partnerships that leads to Jannah!',
    img: circles2,
  },
  {
    text: 'We help you track your progress, and keep your records for you, allowing you to make informed decisions',
    img: analytics,
  },
]

export default ScreensShots
