'use client'

import { Bell, ChevronDown, Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { SidebarTrigger } from '../ui/sidebar'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { useAuth } from '@/context/AuthContext'
import ThemeToggler from '../common/ThemeToggler'
import Link from 'next/link'

export function Header() {
  const { logout, user } = useAuth()

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />

      <InputGroup className="hidden max-w-xl flex-1 md:flex">
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>

        <InputGroupInput type="search" placeholder="Search portfolios, templates..." />
      </InputGroup>

      <div className="ml-auto flex items-center gap-1">
        <ThemeToggler />

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell className="size-4" />

          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="ml-1 h-9 gap-2 px-2">
                <Avatar className="size-7">
                  <AvatarFallback className="bg-primary/10 text-xs text-primary">
                    HO
                  </AvatarFallback>
                </Avatar>

                <div className="hidden text-left md:block">
                  <p className="text-sm font-medium leading-none">{ user?.name }</p>
                </div>

                <ChevronDown className="hidden size-4 text-muted-foreground md:block" />
              </Button>
            }
          ></DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem
              render={<Link href="/profile">Profile</Link>}
            ></DropdownMenuItem>
            
            <DropdownMenuItem
              render={<Link href="/settings">Settings</Link>}
            ></DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={logout}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
