"use client"

import Loading from "@/layouts/Loading"
import HeroV2 from "./HeroV2"
import { useEffect, useState } from "react"
import Skills from "./Skills"

const Layout = () => {

    // const [load, setLoad] = useState(false)

    // useEffect(() => {
    //     setLoad(true)
    //     setTimeout(() => { setLoad(false) }, 2000)
    // }, [])

    return (
        // load ?

        //     <Loading />

        //     :

        <>
            <HeroV2 />
            <Skills />
        </>
    )
}

export default Layout