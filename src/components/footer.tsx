import { Logo, Maxwidth, Paragraph } from '@/components'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer tw="bg-customGrey text-white border-b-2 border-b-secondary">
      <Maxwidth tw="flex flex-col gap-[3.38rem] px-6 py-16 items-center lg:(flex-row justify-between items-center px-[6.25rem])">
        <Logo asHomeNav $lightBg={false} />

        <div tw="p-4 flex flex-row gap-8">
          {socials.map(social => {
            const Icon = social.icon
            return (
              <Link href={social.link} key={social.title} title={social.title}>
                <Icon size={35} />
              </Link>
            )
          })}
        </div>

        <div tw="flex flex-col gap-4 items-center">
          <Link href={routes.privacy.path}>
            <Paragraph>Privacy Policy</Paragraph>
          </Link>
          <Paragraph>&copy; Copyright 2023</Paragraph>
        </div>
      </Maxwidth>
    </footer>
  )
}

const socials = [
  {
    title: 'twitter',
    icon: FaTwitter,
    link: routes.twitter.path,
  },
  {
    title: 'facebook',
    icon: FaFacebook,
    link: routes.facebook.path,
  },
  {
    title: 'linkedin',
    icon: FaLinkedinIn,
    link: routes.linkedIn.path,
  },
]

export default Footer
