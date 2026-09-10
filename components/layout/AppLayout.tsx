import { ReactNode } from 'react'
import { SidebarInset, SidebarProvider } from '../ui/sidebar'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <Header />

        <main className="flex min-h-0 flex-1 flex-col">
          <div className="container mx-auto w-full flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
