import { Heading, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import attention from 'public/distinction.png'

const Attention = () => {
  return (
    <section tw="bg-[#C4C9E166] bg-[url(/att.png)] bg-cover">
      <Maxwidth tw="flex flex-col gap-[4.31rem] py-16 px-6 lg:(flex-row-reverse items-center justify-between py-16 px-[6.25rem] gap-20)">
        <div>
          <Heading
            as={'blockquote'}
            tw="font-semibold text-right"
          >{`حاسبوا أنفسكم قبل أن تحاسبوا، وزنوها قبل أن توزنوا`}</Heading>

          <Paragraph tw="text-2xl font-semibold">
            <blockquote>
              Hold yourselves accountable before you are held accountable and
              evaluate yourselves before you are evaluated
            </blockquote>
            <br /> <span tw="italic">Umar R.A</span>
          </Paragraph>
        </div>

        <Image src={attention} tw="mx-auto" alt="" />
      </Maxwidth>
    </section>
  )
}

export default Attention
