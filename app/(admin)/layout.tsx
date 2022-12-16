import '../../styles/globals.css'

import { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
