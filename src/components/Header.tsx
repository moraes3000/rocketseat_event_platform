import { Logos } from "./Logo";

export function Header() {
  return (
    <header className='w-full py-5 flex justify-center items-center bg-gray-700 border-b  border-gray-600'>
      <Logos />
    </header>
  )
}