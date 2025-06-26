"use client"

import About from "./About"
import Experience from "./Experience"
import Skills from "./Skills"
import Hero from "./Hero"
import Loading from "@/layouts/Loading"
import Footer from "@/layouts/Footer"

const Layout = () => {

    return (
        <Loading>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Footer />
        </Loading>
    )
}

export default Layout