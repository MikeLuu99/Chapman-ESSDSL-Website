"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CULogo from "../../public/cu-logo-small.svg";
import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDirection(currentScroll > prevScroll ? "down" : "up");
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return scrollDirection;
}
// This would typically be imported from a JSON file
const navConfig = {
	logo: "/Logo.svg",
	links: [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Research", href: "/research" },
		{ name: "Gallery", href: "/gallery" },
	],
};

export function Navbar() {
  const scrollDirection = useScrollDirection();
  
  return (
    <header className={`sticky transition-transform duration-300 ${
      scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
    } top-0 z-50 w-full`}>
      <div className="w-full border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Left section with logos */}
            <div className="flex items-center space-x-6">
              <Link href="https://www.chapman.edu" target="_blank">
                <Image
                  src={CULogo}
                  alt="Chapman University Logo"
                  width={75}
                  height={40}
                />
              </Link>
              <Link href="/">
                <Image
                  src={navConfig.logo}
                  alt="Lab Logo"
                  width={128}
                  height={128}
                />
              </Link>
            </div>

            {/* Center/Right section with navigation links */}
            <nav className="flex-1 flex items-center justify-end">
              <div className="flex items-center space-x-8">
                {navConfig.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-foreground/60 hover:text-foreground/80 hover:underline hover:text-[#a40033]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}