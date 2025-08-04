"use client"

import Header from "@/layouts/Header"
import Logo from "@/layouts/Logo"
import { useScroll, useTransform, Variants } from "motion/react"
import * as m from 'motion/react-m'
import { memo, useEffect, useRef, useState } from "react"
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

const CONTAINER_VARIANTS: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
}

const ITEM_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
}

const FLOATING_VARIANTS: Variants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
}

type ParticlesProps = {
    id: number,
    x: number,
    y: number,
    size: number,
    opacity: number,
    animationDelay: number
}

const Hero = () => {

    const [particles, setParticles] = useState<ParticlesProps[]>([])

    const containerRef = useRef(null)

    const [isScrolled, setIsScrolled] = useState(false)
    const [showHeader, setShowHeader] = useState(false)
    const { scrollY } = useScroll()

    const logoScale = useTransform(scrollY, [0, 100], [1, 0])
    const logoOpacity = useTransform(scrollY, [0, 80], [1, 0])
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const starsY = useTransform(scrollYProgress, [0, 1], [0, -200])

    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
            setShowHeader(scrollPosition > 80)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    useEffect(() => {

        const newParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * (window?.innerWidth || 1200),
            y: Math.random() * ((window?.innerHeight * 3.5) || 800),
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: Math.random() * 4,
        }))

        setParticles(newParticles)

    }, [])

    return (
        <LazyMotion features={loadFeatures}>

            <Header
                isVisible={showHeader}
                isScrolled={isScrolled}
            />

            <m.section
                ref={containerRef}
                className="relative h-full min-h-[100dvh] w-full flex flex-col justify-center items-center bg-black snap-start"
                style={{ opacity: heroOpacity }}>

                <m.div
                    className="absolute inset-0 z-0"
                    style={{ y: starsY }}>

                    {particles.map((particle) => (
                        <m.div
                            key={particle.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: particle.x,
                                top: particle.y,
                                width: particle.size,
                                height: particle.size,
                                boxShadow: `0 0 ${particle.size * 4}px rgba(255,255,255,0.6)`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: particle.animationDelay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                </m.div>

                <m.div
                    className="relative flex flex-col md:flex-row-reverse z-10 px-4 max-w-6xl mx-auto w-full justify-around items-center gap-10"
                    variants={CONTAINER_VARIANTS}
                    initial="hidden"
                    animate="visible">

                    <m.div
                        className="flex justify-center"
                        style={{
                            scale: logoScale,
                            opacity: logoOpacity,
                        }}
                        variants={FLOATING_VARIANTS}
                        animate="animate">

                        <m.div
                            className="relative"
                            variants={ITEM_VARIANTS}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}>

                            <Logo size="lg" layoutId="main-logo" />

                        </m.div>

                    </m.div>

                    <div className="flex flex-col items-start justify-start font-space">

                        <m.h1
                            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight w-full uppercase"
                            variants={ITEM_VARIANTS}>
                            <span className="bg-gradient-to-t from-[#5ce3cc] to-primary md:to-[#5ce3cc] bg-clip-text text-transparent">Akhil</span> <span className="bg-gradient-to-t md:bg-gradient-to-r from-[#5ce3cc] to-primary bg-clip-text text-transparent">Harikumar</span>
                        </m.h1>

                        <m.h1
                            className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight"
                            variants={ITEM_VARIANTS}>
                            Full Stack Developer
                        </m.h1>

                    </div>

                </m.div>

            </m.section>

        </LazyMotion>
    )
}

export default memo(Hero)
