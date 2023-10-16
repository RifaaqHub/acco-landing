'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import Maxwidth from './Maxwidth'
import tw from 'twin.macro'
import { GetStarted } from './Button'
import MobileNav from './mobileNav'
import DesktopNav from './desktopNav'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header css={[tw`bg-customGrey`, isScrolled && tw`sticky top-0 z-[100]`]}>
      <Maxwidth tw="flex items-center py-2 px-6 justify-start justify-between lg:(py-4 px-[6.25rem])">
        <MobileNav />

        <DesktopNav />
      </Maxwidth>
    </header>
  )
}

export default Header
