"use client"

import { memo, useCallback, useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

const Footer = () => {

    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [])

    return (
        <LazyMotion features={loadFeatures}>

            <m.button
                className="hidden md:flex fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-gray-800 to-black border border-gray-700/50 rounded-full items-center justify-center shadow-2xl shadow-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0,
                    y: showScrollTop ? 0 : 100,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                aria-label="Scroll to top">

                <m.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>

                    <FaArrowUp className="w-6 h-6 text-gray-300" />

                </m.div>

            </m.button>

            <footer className="relative bg-black border-t border-gray-800/50 overflow-hidden">

                <div className="relative z-10 max-w-6xl mx-auto p-4 py-8">

                    <m.div
                        className="md:hidden mb-6 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>

                        <m.button
                            className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border border-gray-700/50 rounded-full flex items-center justify-center shadow-lg shadow-black/30"
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToTop}
                            aria-label="Scroll to top">

                            <m.div
                                animate={{ y: [-1, 1, -1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>

                                <FaArrowUp className="w-6 h-6 text-gray-300" />

                            </m.div>

                        </m.button>

                    </m.div>

                    <m.div
                        className="text-center"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>

                        <p className="text-gray-300 text-sm">Orbiting smoothly with Next.js 15 & Tailwind CSS 4</p>

                    </m.div>

                    <m.div
                        className="mt-4 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>

                        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

                    </m.div>

                </div>

            </footer>

        </LazyMotion>
    )
}

export default memo(Footer)
