'use client'
import mission from './mission.png'
import journey from './journey.png'
import Image, { StaticImageData } from 'next/image'
import { Heading, Maxwidth, Paragraph } from '@/components'
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'

import abdulkareem from './assets/ridwan.png'
import adebisi from './assets/adebisi.png'
import sanni from './assets/sanni.png'
import adejumo from './assets/adejumo.png'
import opoola from './assets/opoola.png'
import ismail from './assets/ismail.png'
import durojaiye from './assets/durojaiye.png'

const TheTeam = () => {
  return (
    <section>
      <Maxwidth tw="text-center px-6 lg:(px-[6.25rem])">
        <Heading $variant="h2" as={'h2'} tw="pb-4 mx-auto">
          Meet the Team
        </Heading>

        <Paragraph tw="max-w-[63.43rem] pb-6 mx-auto lg:(text-2xl)">
          Meet the passionate individuals behind Acco-Rifaaq. Our diverse team
          brings together expertise in technology, Islamic studies, and personal
          development, united by a common goal — to make purposeful living
          accessible to all.
        </Paragraph>

        <ul tw="grid gap-6 mx-auto md:(grid-cols-2) lg:(grid-cols-3)">
          {team.map((member, idx) => {
            const { image, name, role, x, in: linkedIn } = member
            return (
              <li
                key={idx}
                tw="relative w-full bg-customGrey rounded-[1rem] overflow-hidden shadow-2xl"
              >
                <div tw="min-h-[21rem] relative bg-primary text-white bg-center bg-cover">
                  <div tw="absolute top-0 w-full h-full bg-[linear-gradient(180deg,_rgba(26,_92,_171,_0.00) 0%,_rgba(13,_48,_90,_0.70)_100%)] z-[1] transition-all delay-150 ease-in-out hocus:(bg-none)" />
                  <Image src={image} fill alt="name" tw="object-cover" />
                </div>

                <div tw="w-full p-3 bg-customGrey text-white text-left flex flex-col gap-2">
                  <Paragraph tw="font-calm">{name}</Paragraph>
                  <Paragraph tw="text-sm">{role}</Paragraph>
                  <div tw="flex items-center gap-4">
                    <a href={x} target="_blank" rel="noopener noreferrer">
                      <FaXTwitter size={20} />
                    </a>
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Maxwidth>
    </section>
  )
}

const team = [
  {
    name: 'Ridwan Abdulkareem',
    role: 'CEO/Co-Founder - Frontend Engineer',
    image: abdulkareem,
    x: 'https://twitter.com/RidwanGboyegaAK',
    in: 'https://www.linkedin.com/in/ridwan-abdulkareem/',
  },
  {
    name: 'AbdulQuadri Sanni',
    role: 'CTO/Co-founder - Backend Engineer',
    image: sanni,
    x: 'https://twitter.com/omoalfa_dev',
    in: 'https://www.linkedin.com/in/sanni-abdulquadri-a44a7416b/',
  },
  {
    name: 'Awwal Adebisi',
    role: 'Product Manager/Co-founder',
    image: adebisi,
    x: 'https://twitter.com/uxrarity',
    in: 'https://www.linkedin.com/in/awwaladebisi/',
  },
  {
    name: 'AbdulRaqib Durojaiye',
    role: 'Brand Designer',
    image: durojaiye,
    x: 'https://twitter.com/Jaiye_abdul',
    in: 'https://www.linkedin.com/in/abdulraqib-durojaiye-aa52b117b/',
  },
  {
    name: 'Aminat Adejumo',
    role: 'Social Media Manager',
    image: adejumo,
    x: 'https://twitter.com/aminat_adejumo3',
    in: 'https://www.linkedin.com/in/aminat-adejumo-58b266213/',
  },
  {
    name: 'Hudhayfah Ismail',
    role: 'Backend Engineer',
    image: ismail,
    x: 'https://twitter.com/HudhayfahIsmail',
    in: 'https://www.linkedin.com/in/hudhayfah-ismail-2241711b5/',
  },
  {
    name: 'Abdurahman Opoola',
    role: 'Product Designer',
    image: opoola,
    x: 'https://twitter.com/MHarbudul',
    in: 'https://www.linkedin.com/in/abdurahman-opoola-bb05a6162/',
  },
]

export default TheTeam
