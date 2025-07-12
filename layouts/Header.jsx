"use client"

import Logo from "./Logo"
import { memo } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

const Header = ({ isVisible = false, isScrolled = false }) => {
    return (
        <LazyMotion features={loadFeatures}>

            <m.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>

                <div className="container mx-auto px-4 py-2">

                    <nav className="flex justify-between items-center">

                        <div className="flex items-center space-x-3">

                            <Logo size="sm" layoutId="header-logo" />

                        </div>

                        <div className="flex space-x-4 md:space-x-8">

                            <a
                                href="https://github.com/AkhilsWorkshop"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub">
                                <AiFillGithub className="h-6 md:h-8 w-6 md:w-8 duration-300 text-white hover:text-primary hover:scale-110" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/akhilkumarh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn">
                                <AiFillLinkedin className="h-6 md:h-8 w-6 md:w-8 duration-300 text-white hover:text-primary hover:scale-110" />
                            </a>

                        </div>

                    </nav>

                </div>

            </m.header>

        </LazyMotion>
    )
}

export default memo(Header)
