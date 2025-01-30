"use client"

import * as React from "react"
import Link from "next/link"
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils"
import PersonIcon from '@mui/icons-material/Person';
const loraFont = Lora({subsets: ["latin"]});
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sign up",
    href: "/docs/primitives/alert-dialog",
    description:
      "Create an account with us as either a person leasing or renting a vehicle",
  },
  {
    title: "Provide Services",
    href: "/docs/primitives/hover-card",
    description:
      "Get the exact model of vehicle you want to ride",
  },
]

export function DesktopNavigationMenu() {
  return (
    <div className={`flex justify-around border p-4`}>
        <div className={`mt-2 ${loraFont.className}`}>
            <h1 className="text-lg">Rent a car</h1>
        </div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Lease  vehicle">
                Lease a car to someone ineed, for some extra cash
              </ListItem>
              <ListItem href="/docs/installation" title="Rent vehicle">
                Follow the steps to get a car and enjoy 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Join us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                About us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 w-[500px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="#"  title="How to rent a car">
                        How to rent a car
                    </ListItem>
                    <ListItem href="#"  title="Our terms and conditions">
                        Terms and Conditions
                    </ListItem>
                    <ListItem href="#"  title="About our platform">
                        About us
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className={`mt-1 ${loraFont.className}`}>
        <div className="flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>
                    <p className="text-sm  mr-3">John Doe</p>        
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-[200px]">
                            <ListItem href="#" title="Account">
                                View Account
                            </ListItem>
                            <ListItem href="#" title="Inbox">
                                Inbox Messages
                            </ListItem>
                            <ListItem href="#" title="Logout">
                                Logout
                            </ListItem>

                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        <PersonIcon className="bg-gray-200 rounded-full cursor-pointer mt-2"/>
        </div>
    </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
