import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://images.ctfassets.net/anjlutb8dq3v/5GL5QhkIFH8u8ajGtZT19X/c089768a98e6c5907020a5b6ce2a19a0/me.png"
            width={50}
            height={50}
            alt=""
          />
        </Link>
        <h1>The Meatspin</h1>
      </div>

      <div className="ml-auto flex items-center space-x-2">
        <Link
          href="/"
          className="flex items-center rounded-full bg-gray-900 px-5 py-3 text-center text-sm text-[#f7ab0a] md:text-base"
        >
          Sign up to the meatspin
        </Link>
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <Link
          href="/studio"
          className="flex items-center rounded-full bg-gray-900 px-5 py-3 text-center text-sm text-[#f7ab0a] md:text-base"
        >
          Login to Sanity
        </Link>
      </div>
    </header>
  )
}

export default Header
