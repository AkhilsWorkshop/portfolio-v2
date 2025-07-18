"use client"

import { useEffect, useRef, useState } from "react"
import { projectsData } from "@/data/projectList"
import * as m from 'motion/react-m'
import { LazyMotion, useScroll, useTransform } from "motion/react"
import ProjectCard from "../Reuse/ProjectCard"
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

const Projects = () => {

    const [particles, setParticles] = useState<ParticlesProps[]>([])

    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

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

    return (
        <LazyMotion features={loadFeatures}>

            <div
                ref={containerRef}
                className='relative h-full min-h-[100dvh] w-full flex flex-col justify-center items-center bg-black overflow-hidden'>

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

                <div className="z-30 flex flex-col justify-between items-center gap-20 w-full h-full max-w-4xl xl:max-w-6xl m-auto p-6">

                    <Heading name="Projects" />

                    <ProjectCard project={projectsData?.[0]} />

                </div>

            </div>

        </LazyMotion>
    )
}

export default Projects
