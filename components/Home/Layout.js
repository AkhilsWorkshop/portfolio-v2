"use client"

import Hero from "./Hero"
import { useEffect, useState } from "react"
import About from "./About"
import Experience from "./Experience"
import Skills from "./Skills"

const Layout = () => {

    const [showFullContent, setShowFullContent] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowFullContent(true)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Hero />
            {showFullContent && (
                <>
                    <About />
                    <Experience />

                    <Skills />
                </>
            )}
        </>
    )
}

export default Layout