"use client"

import Hero from "./Hero"
import { useEffect, useState } from "react"
import Skills from "./Skills"
import About from "./About"
import Experience from "./Experience"

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
                </>
            )}
        </>
    )
}

export default Layout