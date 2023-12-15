'use client'

import { Switch } from '@headlessui/react'
import tw from 'twin.macro'

interface IToggle {
  status: boolean
  handleToggle: () => void
  name?: string
}

const Toggle = ({ status, handleToggle, name }: IToggle) => {
  return (
    <Switch
      checked={status}
      onChange={handleToggle}
      tw="relative inline-flex h-6 w-14 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75  border-2 border-[#4d4d4d]"
      css={[status ? tw`bg-[#4d4d4d]` : tw`bg-[white]`]}
    >
      <span tw="sr-only">toggle {name ?? ''}</span>
      <span
        aria-hidden="true"
        css={[
          status
            ? tw`translate-x-8  bg-secondary`
            : tw`translate-x-1 bg-[#4d4d4d]`,
        ]}
        tw="pointer-events-none inline-block h-4 w-4 transform translate-y-[2px] rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  )
}

export default Toggle
