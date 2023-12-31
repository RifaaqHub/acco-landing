'use client'

import { useEffect, useState } from 'react'
import Maxwidth from './Maxwidth'
import tw from 'twin.macro'
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
    <header
      css={[
        tw`bg-customGrey relative  z-[1000]`,
        isScrolled && tw`sticky top-0`,
      ]}
    >
      <Maxwidth tw="flex items-center py-2 px-6 justify-start justify-between lg:(py-4 px-[6.25rem])">
        <MobileNav />

        <DesktopNav />
      </Maxwidth>
    </header>
  )
}

export default Header
