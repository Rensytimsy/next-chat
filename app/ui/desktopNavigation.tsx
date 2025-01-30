"use client";

import * as React from "react";
import Link from "next/link";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const loraFont = Lora({ subsets: ["latin"] });
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ClassNames } from "@emotion/react";
import { SignOut } from "../actions/authActions";
import { redirect } from "next/dist/server/api-utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sign up",
    href: "/signup",
    description:
      "Create an account with us as either a person leasing or renting a vehicle.",
  },
  {
    title: "Provide Services",
    href: "/provide-services",
    description: "List your car for rent and earn extra income.",
  },
  {
    title: "Find a Car",
    href: "/find-car",
    description: "Search for the perfect car to rent for your needs.",
  },
  {
    title: "Deals & Offers",
    href: "/deals-offers",
    description: "Explore special deals and discounts on car rentals.",
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    description: "Learn how to rent or lease a car on our platform.",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Get in touch with our support team for assistance.",
  },
];

export function DesktopNavigationMenu() {

  const {data: session} = useSession();
  console.log(session);

  return (
    <div className={`flex justify-around p-4`}>
      <div className={`mt-2 ${loraFont.className}`}>
        <h1 className="text-xl font-semibold"><Link href="/">Rent a Car</Link></h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/lease-vehicle" title="Lease Vehicle">
                  Lease your car to someone in need and earn extra cash.
                </ListItem>
                <ListItem href="/rent-vehicle" title="Rent Vehicle">
                  Follow the steps to rent a car and enjoy your ride.
                </ListItem>
                <ListItem href="/how-it-works" title="How It Works">
                  Learn how our platform works for renters and lessors.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Join Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 w-[500px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/how-to-rent" title="How to Rent a Car">
                  A step-by-step guide to renting a car on our platform.
                </ListItem>
                <ListItem
                  href="/terms-and-conditions"
                  title="Terms and Conditions"
                >
                  Read our terms and conditions for using the platform.
                </ListItem>
                <ListItem href="/about-us" title="About Our Platform">
                  Learn more about our mission and values.
                </ListItem>
                <ListItem href="/faq" title="FAQ">
                  Find answers to frequently asked questions.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 w-[500px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/popular-cars" title="Popular Cars">
                  Browse the most popular cars available for rent.
                </ListItem>
                <ListItem href="/luxury-cars" title="Luxury Cars">
                  Explore our collection of luxury vehicles.
                </ListItem>
                <ListItem href="/economy-cars" title="Economy Cars">
                  Find affordable and fuel-efficient cars.
                </ListItem>
                <ListItem href="/suvs" title="SUVs">
                  Rent spacious SUVs for family trips.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className={`mt-1 ${loraFont.className}`}>
        <div className="flex ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-sm mr-3">{session?.user ? session.user.name : ""}</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {session && <ul className="w-[200px]">
                    <ListItem href="/account" title="Account">
                      View Account
                    </ListItem>
                    <ListItem href="/inbox" title="Inbox">
                      Inbox Messages
                    </ListItem>
                    <ListItem href="/logout" title="Logout">
                      Logout
                    </ListItem>
                  </ul>}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <PersonIcon className="bg-gray-200 rounded-full cursor-pointer mt-2" />
          {session ?
          (<Button variant={"default"} size={"sm"}
          className="ml-[100px]"
          onClick={SignOut}
          >Sign Out</Button>) : (
            <Link href="/auth/signin">
            <Button variant={"default"} size={"sm"}
              className="ml-[100px]"
              >Sign in</Button>
            </Link>
          )
          }
        </div>
      </div>
    </div>
  );
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
  );
});
ListItem.displayName = "ListItem";
