import Image from 'next/image'
import Link from 'next/link'
import darkLogo from 'public/logo-dark-bg.png'
import tw, { styled } from 'twin.macro'

const Logo = ({
  $lightBg = true,
  asHomeNav,
}: {
  $lightBg?: boolean
  asHomeNav?: boolean
}) => {
  const RenderComp = () => (
    <Image
      tw="max-w-[113px] h-auto md:(max-w-[150px])"
      src={darkLogo}
      alt="rifaaq-logo"
    />
  )

  return (
    <div>
      {asHomeNav ? (
        <Link href={'/'}>
          <RenderComp />
        </Link>
      ) : (
        <RenderComp />
      )}
    </div>
  )
}

export const RifaaqIcon = styled.div(() => [
  tw`bg-[url(/fav.png)] w-[6.5rem] h-[6.5rem] bg-cover bg-no-repeat lg:(w-[12rem] h-[12rem])`,
])

export default Logo
