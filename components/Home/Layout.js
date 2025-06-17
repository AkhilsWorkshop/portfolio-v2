"use client"

import HeroV2 from "./HeroV2"
import { useEffect, useState } from "react"
import Skills from "./Skills"
import AboutV2 from "./AboutV2"

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
            <HeroV2 />
            {showFullContent && (
                <>
                    <AboutV2 />
                    <Skills />
                </>
            )}
        </>
    )
}

export default Layout