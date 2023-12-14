'use client'

import { Button, Heading, Maxwidth, Paragraph } from '@/components'
import voyager from './desert.png'
import Image from 'next/image'
import { useToggle } from 'usehooks-ts'

const QuoteAndDonate = () => {
  const [showDetails, toggleDetails] = useToggle(false)
  return (
    <Maxwidth tw="px-6 py-12 flex flex-col gap-12 text-white lg:(gap-[6.25rem] p-[6.25rem])">
      <div tw="rounded-[1rem] bg-customGrey overflow-hidden text-center max-lg:(max-w-[34rem] mx-auto) flex flex-col lg:(grid grid-cols-2)">
        <Image src={voyager} alt="" tw="object-cover w-full h-full" />

        <blockquote tw="py-6 px-4 flex flex-col gap-4 lg:(p-6 justify-center order-first)">
          <Heading as={'p'} $variant="h3">
            حاسبوا أنفسكم قبل أن تحاسبوا، وزنوها قبل أن توزنوا
          </Heading>

          <Paragraph>
            Hold yourselves accountable before you are held accountable and
            evaluate yourselves before you are evaluated.
          </Paragraph>

          <Paragraph tw="text-center border-t border-white py-4">
            Umar R.A
          </Paragraph>
        </blockquote>
      </div>

      <div tw="rounded-[1rem] bg-customGrey overflow-hidden max-lg:(max-w-[34rem] mx-auto) flex flex-col lg:(grid grid-cols-2)">
        <Image src={voyager} alt="" tw="object-cover w-full h-full" />

        <div tw="py-6 px-4 flex flex-col gap-4 lg:(p-6 justify-center)">
          <Heading as={'p'} $variant="h2">
            Invest in Progress: Sodaqah To Impact with Acco-Rifaaq
          </Heading>

          <Paragraph>
            Building Tomorrow, Today: Join hands with Acco-Rifaaq - where
            innovation meets execution. Be a part of the transformation.
          </Paragraph>

          <Button tw="w-fit" onClick={toggleDetails}>
            Donate Now
          </Button>
          {showDetails ? (
            <div>
              <p>6381746965</p>
              <p>Rifaaq</p>
              <p>Moniepoint MFB</p>
            </div>
          ) : null}
        </div>
      </div>
    </Maxwidth>
  )
}

export default QuoteAndDonate
