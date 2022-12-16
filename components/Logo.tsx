import Image from 'next/image'

const Logo = (props: any) => {
  const { renderDefault, title } = props

  return (
    <div className="flex items-center space-x-2 ">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://images.ctfassets.net/anjlutb8dq3v/5GL5QhkIFH8u8ajGtZT19X/c089768a98e6c5907020a5b6ce2a19a0/me.png"
        alt={title || 'Logo'}
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
