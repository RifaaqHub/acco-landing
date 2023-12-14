import { Heading, Maxwidth, Paragraph } from '@/components'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import question from 'public/question.png'
import { FaChevronUp } from 'react-icons/fa6'
import tw from 'twin.macro'

const Faq = () => {
  return (
    <section
      id="faq"
      tw="bg-customGrey bg-[url(/subtle-bg.svg)] bg-cover text-white"
    >
      <Maxwidth tw="py-20 px-6 lg:(p-[6.25rem])">
        <Heading
          $variant="h2"
          tw="text-center pb-6 xl:(text-[3.375rem] leading-[4.05rem])"
        >
          Frequently Asked Questions
        </Heading>

        <div tw="flex flex-col gap-16 lg:(flex-row justify-between gap-[7.8rem] items-center)">
          <Image
            src={question}
            alt="faq"
            tw="mx-auto max-w-[203px] lg:(max-w-[18.45rem])"
          />

          <div tw="flex flex-col flex-1 text-white gap-6 ">
            {faqs.map((faq, idx) => (
              <Disclosure as={'div'} key={idx}>
                {({ open }) => (
                  <div tw="bg-lightGold rounded-[1rem] py-4 px-6 lg:(p-6)">
                    <Disclosure.Button
                      tw="font-calm text-lg w-full flex items-center text-left justify-between lg:(text-2xl)"
                      css={[open && tw`border-b border-lightGold pb-4 mb-4`]}
                    >
                      <span>Q: {faq.question}</span>
                      <div
                        css={[open && tw`rotate-180 transform`]}
                        tw="h-5 w-5"
                      >
                        <FaChevronUp />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel tw="text-base lg:(text-lg)">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </Maxwidth>
    </section>
  )
}

const faqs = [
  {
    question: 'How do I get started?',
    answer: `It's simple! Click on the "Get Started" button on this page to go to the app, install the app, create at least 3 tasks, and click on "Start Your Tasks"`,
  },
  {
    question: 'How do I track my progress?',
    answer: `Answer: It's simple! Navigate to the "Analytics" page, and you can easily see your percentage of completion. Toggle the calendar to see your performance for each day of the week, or click the arrow beside the week to see your performance for previous weeks`,
  },
  {
    question: 'Must I have a Circle accountability partner?',
    answer: `Short answer, you don't have to. But we encourage you find someone from your family or friends who will assist you on your journey to self improvement and spiritual growth`,
  },
]

export default Faq
