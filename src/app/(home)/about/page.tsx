'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'
import Hero from './hero'
import Features from './features'
import WaitListForm from '../waitListForm'
import OurCommitment from './commitment'
import ThingsToKnow from './toKnow'
import TheTeam from './the-team'

const About = () => {
  return (
    <>
      <Hero />
      <ThingsToKnow />
      <TheTeam />
      <Features />

      <OurCommitment />
      <section tw="bg-lightGold">
        <Maxwidth tw="py-12 px-6 text-white lg:(py-[3.75rem] p-[6.25rem])">
          <div tw="py-12 px-6 text-white bg-primary rounded-[1rem] text-center shadow-2xl lg:(py-16 px-[6.25rem])">
            <Heading $variant="h3" as="h3" tw="pb-4">
              Contact Us
            </Heading>

            <Paragraph tw="lg:(max-w-[85%] mx-auto)">
              Questions, suggestions, or just want to say salaam? We'd love to
              hear from you. Reach out to our team at{' '}
              <a href="mailto:acco@rifaaq.com" tw="underline">
                acco.rifaaq.com
              </a>
              .
            </Paragraph>
          </div>
        </Maxwidth>
      </section>

      <WaitListForm />
    </>
  )
}

export default About
