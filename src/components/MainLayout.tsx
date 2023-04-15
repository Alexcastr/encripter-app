import { type FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return <main className="grid grid-cols-1 lg:grid-cols-3 h-screen container m-auto">{children}</main>
}
