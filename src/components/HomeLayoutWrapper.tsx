'use client'

import Header from './Header'
import Footer from './footer'

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div tw="min-h-[80vh]">{children}</div>
      <Footer />
    </>
  )
}

export default HomeLayoutProvider
