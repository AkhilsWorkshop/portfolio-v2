"use client"

import { useScroll, useTransform, motion } from "motion/react"
import React, { memo, useEffect, useRef, useState } from "react"
import CardGlow from "./CardGlow"

const ProgressBar = ({ data }) => {

    const ref = useRef(null)
    const containerRef = useRef(null)

    const [height, setHeight] = useState(0)
    const [maxProgress, setMaxProgress] = useState(0)
    const [showResumeButton, setShowResumeButton] = useState(false)
    const [animateResumeButton, setAnimateResumeButton] = useState(false)

    useEffect(() => {

        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            setHeight(rect.height)
        }

    }, [ref])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end 40%"],
    })

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setMaxProgress(prev => Math.max(prev, latest))

            if (latest > 0.95 && !showResumeButton) {
                setShowResumeButton(true)

                setTimeout(() => {
                    setAnimateResumeButton(true)
                }, 300)
            }
        })
        return unsubscribe
    }, [scrollYProgress, showResumeButton])

    const heightTransform = useTransform(() => maxProgress * height)
    const opacityTransform = useTransform(() => maxProgress >= 0.1 ? 1 : maxProgress * 10)

    return (

        <div
            className="w-full bg-transparent font-sans md:px-10"
            ref={containerRef}>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">

                {data.map((item, index) => {

                    const isLeft = index % 2 === 0
                    const totalItems = data.length
                    const milestonePosition = totalItems > 1 ? index / (totalItems - 1) : 0
                    const milestoneVerticalPosition = milestonePosition * height
                    const progressBarEnd = maxProgress * height
                    const tolerance = 20
                    const shouldActivate = progressBarEnd >= (milestoneVerticalPosition - tolerance)

                    return (
                        <motion.div
                            key={index}
                            className="relative flex items-center pt-10 md:pt-20"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{
                                opacity: 1,
                                y: 0, x: [0, -2, 2, -1, 1, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                                x: { duration: 0.6, delay: 0.8 }
                            }} viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                        >
                            <div className="hidden md:flex w-full items-center">

                                {isLeft ? (
                                    <>
                                        <div className="w-5/12 pr-8">

                                            <motion.div
                                                className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/20 to-gray-950/20 border-2 border-gray-800/30 backdrop-blur-sm shadow-xl"
                                                transition={{
                                                    duration: 0.3
                                                }}
                                            >

                                                <CardGlow
                                                    spread={40}
                                                    glow={true}
                                                    disabled={false}
                                                    proximity={64}
                                                    inactiveZone={0.01}
                                                    borderWidth={2}
                                                />

                                                <div className="absolute inset-0 opacity-10">
                                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
                                                </div>

                                                <div className="relative z-10">
                                                    {item}
                                                </div>

                                            </motion.div>
                                        </div>

                                        <div className="w-2/12 flex justify-center">
                                            <motion.div
                                                data-milestone={index}
                                                className={`relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg border-2 ${shouldActivate ? 'border-primary/60' : 'border-gray-600'
                                                    }`}
                                                style={{
                                                    boxShadow: shouldActivate ? "0 0 20px rgba(171,223,18,0.6)" : "0 0 0 rgba(171,223,18,0)"
                                                }}
                                            >
                                                <motion.div
                                                    className={`w-4 h-4 rounded-full shadow-inner ${shouldActivate ? 'bg-primary' : 'bg-gray-400'
                                                        }`}
                                                    style={{
                                                        boxShadow: shouldActivate ? "0 0 15px rgba(171,223,18,0.8)" : "0 0 0 rgba(171,223,18,0)"
                                                    }}
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="w-5/12" />
                                    </>
                                ) : (<>
                                    <div className="w-5/12" />

                                    <div className="w-2/12 flex justify-center">
                                        <motion.div
                                            data-milestone={index}
                                            className={`relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg border-2 ${shouldActivate ? 'border-primary/60' : 'border-gray-600'
                                                }`}
                                            style={{
                                                boxShadow: shouldActivate ? "0 0 20px rgba(171,223,18,0.6)" : "0 0 0 rgba(171,223,18,0)"
                                            }}
                                        >
                                            <motion.div
                                                className={`w-4 h-4 rounded-full shadow-inner ${shouldActivate ? 'bg-primary' : 'bg-gray-400'
                                                    }`}
                                                style={{
                                                    boxShadow: shouldActivate ? "0 0 15px rgba(171,223,18,0.8)" : "0 0 0 rgba(171,223,18,0)"
                                                }}
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="w-5/12 pl-8">

                                        <motion.div
                                            className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/20 to-gray-950/20 border border-gray-800/30 backdrop-blur-sm shadow-xl"
                                            transition={{
                                                duration: 0.3
                                            }}
                                        >

                                            <CardGlow
                                                spread={40}
                                                glow={true}
                                                disabled={false}
                                                proximity={64}
                                                inactiveZone={0.01}
                                                borderWidth={2}
                                            />

                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
                                            </div>

                                            <div className="relative z-10">
                                                {item}
                                            </div>

                                        </motion.div>
                                    </div>
                                </>
                                )}
                            </div>

                            <div className="md:hidden w-full px-4">

                                <div className="flex items-start gap-4">
                                    <div className="flex flex-col items-center">
                                        <motion.div
                                            data-milestone={index}
                                            className={`w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg border-2 ${shouldActivate ? 'border-primary/60' : 'border-gray-600'
                                                }`}
                                            style={{
                                                boxShadow: shouldActivate ? "0 0 15px rgba(171,223,18,0.6)" : "0 0 0 rgba(171,223,18,0)"
                                            }}
                                        >
                                            <motion.div
                                                className={`w-3 h-3 rounded-full shadow-inner ${shouldActivate ? 'bg-primary' : 'bg-gray-400'
                                                    }`}
                                                style={{
                                                    boxShadow: shouldActivate ? "0 0 10px rgba(171,223,18,0.8)" : "0 0 0 rgba(171,223,18,0)"
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1 min-w-0">

                                        <motion.div
                                            className="relative p-4 rounded-lg bg-gradient-to-br from-gray-900/20 to-gray-950/20 border border-gray-800/30 shadow-lg overflow-hidden"
                                            transition={{
                                                duration: 0.3
                                            }}>

                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:30px_30px]" />
                                            </div>

                                            <div className="relative z-10">
                                                {item}
                                            </div>

                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}

                <div
                    style={{
                        height: height + "px",
                    }}
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800/30 to-transparent">

                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            boxShadow: "0 0 8px rgba(171,223,18,0.6), 0 0 16px rgba(171,223,18,0.4)"
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: "linear-gradient(180deg, rgba(171,223,18,1) 0%, rgba(171,223,18,0.8) 50%, rgba(171,223,18,0.6) 100%)"
                            }}
                        />

                        {Array.from({ length: 3 }, (_, i) => (
                            <motion.div
                                key={`energy-wave-${i}`}
                                className="absolute w-full h-3 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                                animate={{
                                    y: ["100%", "-100%"]
                                }}
                                transition={{
                                    duration: 2 + i * 0.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.7,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        style={{
                            top: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full shadow-lg"
                            style={{
                                boxShadow: "0 0 8px rgba(171,223,18,0.8), 0 0 16px rgba(171,223,18,0.4)"
                            }}
                        />
                    </motion.div>

                    {Array.from({ length: 15 }, (_, i) => {

                        const particleSize = Math.random() * 1.5 + 0.5
                        const particleOpacity = Math.random() * 0.4 + 0.4
                        const particleColor = i % 3 === 0 ? 'bg-primary/60' : i % 3 === 1 ? 'bg-blue-400/40' : 'bg-cyan-300/50'

                        return (
                            <motion.div
                                key={`desktop-particle-${i}`}
                                className={`absolute rounded-full ${particleColor}`}
                                style={{
                                    left: `${-3 + (Math.random() * 10 - 5)}px`,
                                    top: `${i * (height / 15) + Math.random() * 25}px`,
                                    width: `${particleSize}px`,
                                    height: `${particleSize}px`,
                                    opacity: (maxProgress * height) >= (i * (height / 15)) ? particleOpacity : 0,
                                    boxShadow: (maxProgress * height) >= (i * (height / 15)) ?
                                        `0 0 ${particleSize * 3}px rgba(171,223,18,0.5)` : 'none'
                                }}
                                animate={{
                                    y: [0, -15, 0],
                                    x: [0, Math.random() * 8 - 4, 0],
                                    scale: [0.8, 1.3, 0.8],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 2.5 + Math.random() * 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 3,
                                    ease: "easeInOut",
                                }}
                            />
                        )
                    })}
                </div>

                <div
                    style={{
                        height: height + "px",
                    }}
                    className="md:hidden absolute left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800/30 to-transparent">

                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            boxShadow: "0 0 6px rgba(171,223,18,0.6), 0 0 12px rgba(171,223,18,0.4)"
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: "linear-gradient(180deg, rgba(171,223,18,1) 0%, rgba(171,223,18,0.8) 50%, rgba(171,223,18,0.6) 100%)"
                            }}
                        />

                        {Array.from({ length: 2 }, (_, i) => (
                            <motion.div
                                key={`mobile-energy-wave-${i}`}
                                className="absolute w-full h-2 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                                animate={{
                                    y: ["100%", "-100%"]
                                }}
                                transition={{
                                    duration: 2.5 + i * 0.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.8,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        style={{
                            top: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-lg"
                            style={{
                                boxShadow: "0 0 6px rgba(171,223,18,0.8), 0 0 12px rgba(171,223,18,0.4)"
                            }}
                        />

                    </motion.div>
                    {Array.from({ length: 12 }, (_, i) => {

                        const particleSize = Math.random() * 1.2 + 0.4
                        const particleOpacity = Math.random() * 0.3 + 0.4
                        const particleColor = i % 3 === 0 ? 'bg-primary/60' : i % 3 === 1 ? 'bg-blue-400/40' : 'bg-cyan-300/50'

                        return (
                            <motion.div
                                key={`mobile-particle-${i}`}
                                className={`absolute rounded-full ${particleColor}`}
                                style={{
                                    left: `${-2 + (Math.random() * 8 - 4)}px`,
                                    top: `${i * (height / 12) + Math.random() * 20}px`,
                                    width: `${particleSize}px`,
                                    height: `${particleSize}px`,
                                    opacity: (maxProgress * height) >= (i * (height / 12)) ? particleOpacity : 0,
                                    boxShadow: (maxProgress * height) >= (i * (height / 12)) ?
                                        `0 0 ${particleSize * 2}px rgba(171,223,18,0.4)` : 'none'
                                }}
                                animate={{
                                    y: [0, -12, 0],
                                    x: [0, Math.random() * 6 - 3, 0],
                                    scale: [0.7, 1.2, 0.7],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 1.8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 2.5,
                                    ease: "easeInOut",
                                }}
                            />
                        )
                    })}
                </div>

                <div className="hidden md:block pb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={showResumeButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-50"
                    >
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative inline-block">
                            <div className="relative overflow-hidden px-8 py-3 rounded-lg font-medium text-white border-2 border-primary/60 bg-black/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={animateResumeButton ? { width: "100%" } : { width: "0%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 pointer-events-none"
                                />
                                <div className="relative z-10">View My Resume</div>

                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div className="md:hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={showResumeButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-1/2 z-50"
                    >
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative inline-block">
                            <div className="relative overflow-hidden px-6 py-2 rounded-lg font-medium text-white border-2 border-primary/60 bg-black/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={animateResumeButton ? { width: "100%" } : { width: "0%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 pointer-events-none"
                                />
                                <div className="relative z-10">View Resume</div>

                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:16px_16px]" />
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {showResumeButton && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '50%' }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            style={{
                                position: 'absolute',
                                left: '8px',
                                top: '50%',
                                height: '2px',
                                background: 'linear-gradient(90deg, rgba(171,223,18,1) 0%, rgba(171,223,18,0.7) 70%, rgba(171,223,18,0.5) 100%)',
                                boxShadow: "0 0 8px rgba(171,223,18,0.6), 0 0 16px rgba(171,223,18,0.4)",
                                zIndex: 40
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default memo(ProgressBar)
