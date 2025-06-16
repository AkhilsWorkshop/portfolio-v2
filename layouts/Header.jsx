"use client"

import { useState, useEffect, memo } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { Turn as Hamburger } from 'hamburger-react'
import Image from "next/image"

const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

const Header = () => {

    const [activeSection, setActiveSection] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation.map((item) => item.href.substring(1))
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <Image
                        onClick={() => scrollToSection("#home")}
                        src='/assets/images/layouts/logo.svg'
                        alt="AK Logo"
                        width={56}
                        height={56}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                    />

                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${activeSection === item.href.substring(1) ? "text-primary" : "text-white"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4 text-white">
                        <button variant="ghost" size="icon" className="duration-300 hover:text-primary hover:scale-110">
                            <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <AiFillGithub className="h-5 w-5" />
                            </a>
                        </button>
                        <button variant="ghost" size="icon" className="duration-300 hover:text-primary hover:scale-110">
                            <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <AiFillLinkedin className="h-5 w-5" />
                            </a>
                        </button>
                    </div>

                    <div className="cursor-pointer z-30 md:hidden">
                        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="#fff" />
                    </div>

                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-gray-800 rounded-md ${activeSection === item.href.substring(1) ? "text-primary bg-gray-800" : "text-white"
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="flex items-center space-x-4 px-3 py-2">
                                <button className="text-white hover:text-primary hover:bg-gray-800">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <AiFillGithub className="h-5 w-5" />
                                    </a>
                                </button>
                                <button className="text-white hover:text-primary hover:bg-gray-800">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <AiFillLinkedin className="h-5 w-5" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default memo(Header)
