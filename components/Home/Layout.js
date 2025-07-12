"use client"

import Hero from "./Hero"
import Loading from "@/layouts/Loading"
import LoadingSpinner from "@/layouts/LoadingSpinner"
import { Suspense, lazy } from "react"

const About = lazy(() => import("./About"))
const Experience = lazy(() => import("./Experience"))
const Projects = lazy(() => import("./Projects"))
const Toolkit = lazy(() => import("./Toolkit"))
const Footer = lazy(() => import("@/layouts/Footer"))

const Layout = () => {

    return (
        <Loading>

            <Hero />

            <Suspense fallback={<LoadingSpinner />}>
                <About />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Experience />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Projects />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Toolkit />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Footer />
            </Suspense>

        </Loading>
    )
}

export default Layout