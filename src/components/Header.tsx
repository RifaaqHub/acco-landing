'use client'

import { useEffect, useState } from 'react'
import { JoinWaitlist } from './Button'
import Logo from './Logo'
import Maxwidth from './Maxwidth'
import tw from 'twin.macro'

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
      <Maxwidth tw="flex items-center py-2 px-6 justify-start justify-between lg:(py-8 px-[6.25rem])">
        <Logo />

        <JoinWaitlist tw="p-3 sm:(px-8 py-4)" />
      </Maxwidth>
    </header>
  )
}

export default Header
