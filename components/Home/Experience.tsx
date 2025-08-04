import React, { memo, useEffect, useRef, useState } from "react"
import { progressData } from "@/data/progressList"
import { useScroll, useTransform } from "motion/react"
import * as m from 'motion/react-m'
import ProgressBar from "../Effects/ProgressBar"
import { GoLink, GoUnlink } from "react-icons/go"
import { LazyMotion } from "motion/react"
import Heading from "../Reuse/Heading"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type ParticlesProps = {
    id: number,
    x: number,
    y: number,
    size: number,
    opacity: number,
    animationDelay: number
}

const Experience = () => {

    const containerRef = useRef(null)
    const [particles, setParticles] = useState<ParticlesProps[]>([])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], [0, 50])
    const starsY = useTransform(scrollYProgress, [0, 1], [0, -200])

    useEffect(() => {

        const newParticles = Array.from({ length: 120 }, (_, i) => ({
            id: i,
            x: Math.random() * (window?.innerWidth || 1200),
            y: Math.random() * ((window?.innerHeight * 3.5) || 800),
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: Math.random() * 4,
        }))

        setParticles(newParticles)

    }, [])

    const progress = progressData
        .filter(item => item.title)
        .reverse()
        .map((item, index) => {
            return (
                <m.div
                    key={index}
                    className="flex flex-col gap-6 relative h-full p-2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }} >

                    <div className="flex flex-col items-start">
                        <h1 className="text-base md:text-lg font-semibold text-gray-200 font-space">{item.title}</h1>
                        <p className="text-sm text-gray-500 font-medium uppercase">{item.date}</p>
                    </div>

                    <p className="text-base text-gray-200 leading-relaxed">
                        {item.shortDescription}
                    </p>

                    {item.fullDescription && (
                        <p className="text-[15px] text-gray-500 leading-5">
                            {item.fullDescription}
                        </p>
                    )}

                    {Array.isArray(item?.links) && item.links.length > 0 && (

                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">

                            {item.links.map((link, linkIndex) => (

                                link.url ?

                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        className="text-gray-400 hover:text-primary/80 underline underline-offset-4 transition-colors duration-200 inline-flex items-center gap-1"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <GoLink size={12} /> {link.label}
                                    </a>

                                    :

                                    <p
                                        key={linkIndex}
                                        className="text-gray-400 underline underline-offset-4 inline-flex items-center gap-1">
                                        <GoUnlink size={12} /> {link.label}
                                    </p>
                            ))}

                        </div>

                    )}

                    {item?.tech?.length > 0 && (

                        <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                            {item.tech.map((tech, index) => (
                                <p
                                    key={index}
                                    className="rounded-md px-2 py-1 text-xs bg-[#0a300a86] text-primary transition-colors duration-200 inline-flex items-center gap-1">{tech}
                                </p>
                            ))}
                        </div>

                    )}

                </m.div>
            )
        })

    return (

        <LazyMotion features={loadFeatures}>

            <div
                ref={containerRef}
                className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden bg-black pb-32">

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

                <m.div style={{ y: textY }} className="relative z-30 flex flex-col justify-between items-center gap-4 w-full h-full max-w-6xl m-auto p-2 md:p-6">

                    <Heading name="Timeline" />

                    <ProgressBar data={progress} />

                </m.div>

            </div>

        </LazyMotion>
    )
}

export default memo(Experience)