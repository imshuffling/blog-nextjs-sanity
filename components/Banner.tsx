import React from 'react'

const Banner = () => {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="mb-4 text-7xl">David&apos;s daily blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{' '}
          <span className="underline decoration-[#f7ab0a] decoration-4">
            Every developers
          </span>{' '}
          favorite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 max-w-sm text-gray-400 md:mt-2">
        New product features | The latest in technology | The weekly debugging
        nightmares & more!
      </p>
    </div>
  )
}

export default Banner
