"use client"

import Hero from "./Hero"
import { useEffect, useState } from "react"
import Skills from "./Skills"
import About from "./About"
import Experience from "./Experience"
import SkillsV2 from "./SkillsV2"

const Layout = () => {

    const [showFullContent, setShowFullContent] = useState(true)

    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         setShowFullContent(true)
    //     }, 1500)

    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <>
            {/* <Hero /> */}
            {showFullContent && (
                <>
                    <About />
                    <Experience />

                    <SkillsV2 />

                    <Skills />
                </>
            )}
        </>
    )
}

export default Layout