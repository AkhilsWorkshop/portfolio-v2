"use client"

import { AnimatePresence, LazyMotion } from "motion/react"
import { memo, useEffect, useState } from "react"
import Logo from "./Logo"
import * as m from 'motion/react-m'

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type LoadingProps = {
    children: React.ReactNode
}

const Loading = ({ children }: LoadingProps) => {

    const [isLoading, setIsLoading] = useState(true)
    const [showTransition, setShowTransition] = useState(false)

    useEffect(() => {

        let progressInterval

        const handleCompleteLoad = () => {

            const checkComplete = () => {

                if (document.readyState === "complete") {

                    setTimeout(() => {
                        setShowTransition(true)
                    }, 500)

                    setTimeout(() => {
                        setIsLoading(false)
                    }, 600)

                } else {

                    const onLoad = () => {

                        setTimeout(() => {
                            setShowTransition(true)
                        }, 500)

                        setTimeout(() => {
                            setIsLoading(false)
                        }, 600)
                    }

                    window.addEventListener("load", onLoad, { once: true })

                }
            }

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", checkComplete)
            } else {
                checkComplete()
            }
        }

        const timer = setTimeout(handleCompleteLoad, 100)

        return () => {
            clearTimeout(timer)
            clearInterval(progressInterval)
        }

    }, [])

    return (
        <LazyMotion features={loadFeatures}>

            <AnimatePresence mode="wait">

                {isLoading && (
                    <m.div
                        key="loading"
                        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}>

                        <m.div
                            transition={{
                                duration: showTransition ? 0 : 4,
                                repeat: showTransition ? 0 : Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            exit={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: 'blur(5px)',
                                transition: { duration: 0.9, delay: 0.1, type: 'spring', bounce: 0.3 }
                            }}
                            className="relative z-10">

                            <Logo size="lg" layoutId="main-logo" />

                        </m.div>

                    </m.div>
                )}

            </AnimatePresence>

            <AnimatePresence>

                {!isLoading && (
                    <m.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {children}
                    </m.div>
                )}

            </AnimatePresence>

        </LazyMotion>
    )
}

export default memo(Loading)
