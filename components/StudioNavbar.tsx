import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#F7AB0A]">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-[#F7AB0A]" />
          Go To Website
        </Link>

        <div className="hidden justify-center rounded-lg border-2 border-[#F7AB0A] p-5 md:flex">
          <h1 className="font-bold text-white">
            Want Coding challenges & Solutions sent to your inbox daily?
          </h1>
          <Link
            href="https://www.papareact.com/universityofcode"
            className="ml-2 font-bold text-[#F7AB0A]"
          >
            www.papareact.com/universityofcode
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
