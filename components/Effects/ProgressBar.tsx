"use client"

import { useScroll, useTransform } from "motion/react"
import React, { JSX, memo, useCallback, useEffect, useRef, useState } from "react"
import CardGlow from "./CardGlow"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type ProgressBarProps = {
    data: JSX.Element[]
}

const MilestoneDot = ({ shouldActivate }: { shouldActivate: boolean }) => (
    <m.div
        className='rounded-full bg-primary'
        style={{
            width: '10px',
            height: '10px',
            boxShadow: shouldActivate ? "0 0 15px rgba(171,223,18,0.8)" : "0 0 0 rgba(171,223,18,0)",
        }}
        animate={{
            scale: shouldActivate ? 1.35 : 1,
            transition: { type: "spring", stiffness: 320, damping: 18 }
        }}
    />
)

interface CardContentProps {
    children: React.ReactNode,
    className?: string,
    direction?: 'left' | 'right'
}

const ContentCard = ({ children, className, direction }: CardContentProps) => (
    <m.div
        className={`relative p-6 rounded-xl bg-gradient-to-br from-gray-900/20 to-gray-950/20 border border-gray-900/50 shadow-xl ${className || ''}`}
        transition={{ duration: 0.3 }}>

        <CardGlow />

        {direction &&
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? '-left-[25px]' : '-right-[26px]'
                    }`}>

                <div
                    className="w-0 h-0"
                    style={{
                        borderTop: '12px solid transparent',
                        borderBottom: '12px solid transparent',
                        ...(direction === 'right' ?
                            { borderLeft: '24px solid rgba(16,24,40,0.5)' } :
                            { borderRight: '24px solid rgba(16,24,40,0.5)' }
                        ),
                    }}
                />

            </div>
        }

        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">
            {children}
        </div>

    </m.div>
)

const MobileCard = ({ children }: { children: React.ReactNode }) => (
    <m.div
        className="relative p-4 rounded-lg bg-gradient-to-br from-gray-900/20 to-gray-950/20 border border-gray-900/50 shadow-lg overflow-hidden"
        transition={{ duration: 0.3 }}>

        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">
            {children}
        </div>

    </m.div>
)

interface ProgressLineProps {
    height: number,
    heightTransform: any,
    opacityTransform: any,
    isMobile?: boolean
}

const ProgressLine = ({ height, heightTransform, opacityTransform, isMobile }: ProgressLineProps) => (
    <div
        style={{ height: height + "px" }}
        className={`absolute top-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800/30 to-transparent ${isMobile ? 'md:hidden left-5' : 'hidden md:block left-1/2 transform -translate-x-1/2'
            }`}>

        <m.div
            style={{
                height: heightTransform,
                opacity: opacityTransform,
                boxShadow: isMobile ?
                    "0 0 6px rgba(171,223,18,0.6), 0 0 12px rgba(171,223,18,0.4)" :
                    "0 0 8px rgba(171,223,18,0.6), 0 0 16px rgba(171,223,18,0.4)"
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full overflow-hidden">

            <m.div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "linear-gradient(180deg, rgba(171,223,18,1) 0%, rgba(171,223,18,0.8) 50%, rgba(171,223,18,0.6) 100%)"
                }}
            />

        </m.div>

        <m.div
            style={{ top: heightTransform, opacity: opacityTransform }}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
                className={`bg-primary rounded-full shadow-lg ${isMobile ? 'w-1.5 h-1.5' : 'w-1 h-1'}`}
                style={{
                    boxShadow: isMobile ?
                        "0 0 6px rgba(171,223,18,0.8), 0 0 12px rgba(171,223,18,0.4)" :
                        "0 0 8px rgba(171,223,18,0.8), 0 0 16px rgba(171,223,18,0.4)"
                }}
            />
        </m.div>

    </div>
)

const ProgressBar = ({ data }: ProgressBarProps) => {

    const ref = useRef<HTMLDivElement>(null)
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
                setTimeout(() => setAnimateResumeButton(true), 200)
            }
        })

        return unsubscribe

    }, [scrollYProgress, showResumeButton])

    const heightTransform = useTransform(() => maxProgress * height)
    const opacityTransform = useTransform(() => maxProgress >= 0.1 ? 1 : maxProgress * 10)

    const calculateActivation = useCallback((index: number) => {

        const totalItems = data.length
        const milestonePosition = totalItems > 1 ? index / (totalItems - 1) : 0
        const milestoneVerticalPosition = milestonePosition * height
        const progressBarEnd = maxProgress * height
        const tolerance = 5

        return progressBarEnd >= (milestoneVerticalPosition - tolerance)

    }, [data.length, height, maxProgress])

    return (
        <LazyMotion features={loadFeatures}>

            <div className="w-full bg-transparent" ref={containerRef}>

                <div ref={ref} className="relative max-w-7xl mx-auto md:pb-20">

                    {data.map((item, index) => {

                        const isLeft = index % 2 === 0
                        const shouldActivate = calculateActivation(index)

                        return <m.div
                            key={index}
                            className="relative flex items-center pt-10 md:pt-20"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.2,
                                ease: "easeOut",
                                x: { duration: 0.2, delay: 0.2 }
                            }}
                            viewport={{ once: true, margin: "-40% 0px -40% 0px" }}>

                            <div className="hidden md:flex w-full items-center">

                                {isLeft ?

                                    <>
                                        <div className="w-5/12 pr-8">
                                            <ContentCard className="border-2" direction="right">
                                                {item}
                                            </ContentCard>
                                        </div>

                                        <div className="w-2/12 flex justify-center">
                                            <m.div data-milestone={index} className="relative z-10 flex items-center">
                                                <MilestoneDot shouldActivate={shouldActivate} />
                                            </m.div>
                                        </div>

                                        <div className="w-5/12" />
                                    </>

                                    :

                                    <>
                                        <div className="w-5/12" />

                                        <div className="w-2/12 flex justify-center">
                                            <m.div data-milestone={index} className="relative z-10 flex items-center">
                                                <MilestoneDot shouldActivate={shouldActivate} />
                                            </m.div>
                                        </div>

                                        <div className="w-5/12 pl-8">
                                            <ContentCard direction="left">
                                                {item}
                                            </ContentCard>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="md:hidden w-full px-4">

                                <div className="flex items-start gap-4">

                                    <div className="flex flex-col items-center">
                                        <m.div data-milestone={index} className="relative z-10 flex items-center">
                                            <MilestoneDot shouldActivate={shouldActivate} />
                                        </m.div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <MobileCard>
                                            {item}
                                        </MobileCard>
                                    </div>

                                </div>

                            </div>

                        </m.div>

                    })}

                    <ProgressLine
                        height={height}
                        heightTransform={heightTransform}
                        opacityTransform={opacityTransform}
                    />

                    <ProgressLine
                        height={height}
                        heightTransform={heightTransform}
                        opacityTransform={opacityTransform}
                        isMobile
                    />

                    <div className="block pb-12">

                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={showResumeButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50 w-full md:w-auto px-4">
                            <a href="/Akhil-Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative inline-block w-full">

                                <div className="relative overflow-hidden px-8 py-3 rounded-lg font-medium text-white border-2 border-primary/60 bg-black/40 backdrop-blur-sm shadow-lg transition-all duration-300 group">

                                    <m.div
                                        initial={{ height: "0%" }}
                                        animate={animateResumeButton ? { height: "100%" } : { height: "0%" }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-[#5ce3cc]/30 group-hover:from-primary/20 to-primary/20 group-hover:to-[#5ce3cc]/30 duration-300 transition-colors pointer-events-none hidden md:block"
                                    />

                                    <m.div
                                        initial={{ width: "0%" }}
                                        animate={animateResumeButton ? { width: "100%" } : { width: "0%" }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-[#5ce3cc]/30 group-hover:from-primary/20 to-primary/20 group-hover:to-[#5ce3cc]/30 duration-300 transition-colors pointer-events-none md:hidden"
                                    />

                                    <div className="relative z-10 text-sm text-primary text-center tracking-wider font-space">View My Resume</div>

                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(171,223,18,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(171,223,18,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    </div>

                                </div>

                            </a>

                        </m.div>

                    </div>

                </div>

            </div>

        </LazyMotion>
    )
}

export default memo(ProgressBar)
