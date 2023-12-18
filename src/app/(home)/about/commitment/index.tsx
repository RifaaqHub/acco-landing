'use client'

import { Maxwidth, Heading, Paragraph } from '@/components'
import check from './check.png'
import Image from 'next/image'

const OurCommitment = () => {
  return (
    <section tw="bg-[#C4C9E166] bg-[url(/subtle-bg.svg)] bg-cover">
      <Maxwidth tw="py-12 px-6 lg:(p-[6.25rem])">
        <Heading $variant="h3" as="h3" tw="pb-4 text-center lg:pb-6">
          Our Commitment
        </Heading>

        <div tw="grid gap-6 md:(grid-cols-2)">
          {commitments.map((commitment, idx) => (
            <div
              key={idx}
              tw="rounded-[1rem] h-full bg-white shadow-lg flex flex-col gap-6 p-4 lg:(px-6 flex-row gap-4)"
            >
              <Image src={check} tw="w-8 h-8" alt="" />

              <div>
                <Heading as={'h4'} $variant={'h4'}>
                  {commitment.title}
                </Heading>

                <Paragraph>{commitment.desc}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Maxwidth>
    </section>
  )
}

const commitments = [
  {
    title: `Purposeful Evolution`,
    desc: `Acco-Rifaaq is not static; it's an evolving project committed to constant improvement, adapting to your needs.`,
  },
  {
    title: `Privacy and Security`,
    desc: `Your trust is sacred. Acco-Rifaaq is built with robust security measures to ensure your personal information is always protected.`,
  },
]

export default OurCommitment
