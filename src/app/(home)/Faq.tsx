import { Heading, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import question from 'public/question.png'

const Faq = () => {
  return (
    <section tw="bg-[#C4C9E166] bg-[url(/subtle-bg.svg)] bg-cover">
      <Maxwidth tw="flex flex-col gap-16 py-20 px-6 lg:(flex-row-reverse justify-between items-center p-[6.25rem])">
        <Image src={question} alt="faq" tw="max-lg:(mx-auto max-w-[203px])" />

        <div tw="flex flex-col gap-6 lg:(gap-[2.62rem] max-w-[40.4rem])">
          <Heading
            $variant="h2"
            tw="text-primary xl:(text-[3.375rem] leading-[4.05rem])"
          >
            Is Acco-Rifaaq for me?
          </Heading>

          <Paragraph tw="text-[#494C55]">
            Whether you're striving to manage your time more effectively, deepen
            your spiritual connection, or engage with a community that shares
            your values, Acco-Rifaaq offers a comprehensive solution. <br />
            <br /> It caters to those seeking effective time management,
            spiritual growth, and a supportive community that shares their
            values.{' '}
            <em tw="not-italic font-semibold">
              Whether you're an entrepreneur, student, professional, or anyone
              striving to enhance both productivity and faith, Acco-rifaaq
              offers a versatile platform to enrich your journey.
            </em>
          </Paragraph>
        </div>
      </Maxwidth>
    </section>
  )
}

export default Faq
