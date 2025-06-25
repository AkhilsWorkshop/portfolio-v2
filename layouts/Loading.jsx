"use client"

import { motion, AnimatePresence } from "motion/react"
import { memo, useEffect, useState } from "react"
import Logo from "./Logo"

const Loading = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [showTransition, setShowTransition] = useState(false)

    useEffect(() => {

        let progressInterval

        const startProgress = () => {
            progressInterval = setInterval(() => {
                setLoadingProgress((prev) => {
                    if (prev >= 90) {
                        clearInterval(progressInterval)
                        return prev
                    }
                    return prev + Math.random() * 15
                })
            }, 100)
        }

        const handleCompleteLoad = () => {

            const checkComplete = () => {

                if (document.readyState === "complete") {

                    setLoadingProgress(100)

                    setTimeout(() => {
                        setShowTransition(true)
                    }, 500)

                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500)

                } else {

                    const onLoad = () => {

                        setLoadingProgress(100)

                        setTimeout(() => {
                            setShowTransition(true)
                        }, 500)

                        setTimeout(() => {
                            setIsLoading(false)
                        }, 1500)
                    }

                    window.addEventListener("load", onLoad, { once: true })

                }
            }

            startProgress()

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
        <>
            <AnimatePresence mode="wait">

                {isLoading && (
                    <motion.div
                        key="loading"
                        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}>

                        <motion.div
                            className="relative z-10"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                y: showTransition ? -1000 : 0,
                            }}
                            transition={{ duration: showTransition ? 1 : 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{
                                    y: showTransition ? 0 : [-8, 8, -8],
                                    rotate: showTransition ? 0 : [0, 3, -3, 0],
                                }}
                                transition={{
                                    duration: showTransition ? 0 : 4,
                                    repeat: showTransition ? 0 : Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }} >

                                <Logo size="lg" layoutId="main-logo" />

                            </motion.div>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>

            <AnimatePresence>

                {!isLoading && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                )}

            </AnimatePresence>

        </>
    )
}

export default memo(Loading)
