'use client'

import Logo from '@/components/Logo'
import { headerLinks } from '@/lib/routes'
import { usePathname } from 'next/navigation'
import tw from 'twin.macro'
import { GetStarted } from './Button'

const DesktopNav = () => {
  const path = usePathname()

  return (
    <nav tw="hidden lg:flex relative items-center flex-1 justify-between text-white">
      <Logo asHomeNav />

      <ul tw="flex flex-row items-center gap-[2rem] xl:gap-[3rem]">
        {headerLinks.map(link => {
          let href = link.href
          return (
            <li
              key={link.title}
              css={[
                tw`hocus:(underline) font-normal`,
                path === link.href &&
                  tw`text-white font-semibold underline decoration-2 underline-offset-[1.5rem]`,
              ]}
            >
              <a href={href}>{link.title}</a>
            </li>
          )
        })}

        <GetStarted />
      </ul>
    </nav>
  )
}

export default DesktopNav
