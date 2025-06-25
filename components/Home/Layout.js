"use client"

import About from "./About"
import Experience from "./Experience"
import Skills from "./Skills"
import HeroV2 from "./HeroV2"
import Loading from "@/layouts/Loading"

const Layout = () => {

    return (
        <Loading>
            <HeroV2 />
            <About />
            <Experience />
            <Skills />
        </Loading>
    )
}

export default Layout