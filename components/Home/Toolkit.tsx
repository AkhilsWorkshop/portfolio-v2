import React, { memo, useState, useRef, useEffect } from 'react'
import CardShine from '../Effects/CardShine'
import { skillsData } from '@/data/skillsList'
import { useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import Heading from '../Reuse/Heading'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type ParticlesProps = {
    id: number,
    x: number,
    y: number,
    size: number,
    opacity: number,
    animationDelay: number
}

const Toolkit = () => {

    const containerRef = useRef(null)

    const [particles, setParticles] = useState<ParticlesProps[]>([])

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

    const animationsRef = useRef(skillsData.map(() => ({
        xOffset: Math.random() * 40 - 20,
        yOffset: Math.random() * 40 - 20,
        rotation: Math.random() * 6 - 3,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 3
    })))

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <LazyMotion features={loadFeatures}>

            <div
                ref={containerRef}
                className='relative h-full w-full flex flex-col justify-center items-center overflow-hidden bg-black pb-12 pt-6'>

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

                <div className='z-30 flex flex-col justify-between items-center gap-20 w-full h-full max-w-6xl m-auto p-6'>

                    <Heading name="Toolkit" />

                    <div className='relative flex flex-wrap justify-center items-center gap-4'>

                        {skillsData.map((item, index) => {

                            const animation = animationsRef.current[index]
                            const isHovered = hoveredIndex === index

                            const popDelay = Math.random() * 0.7

                            return (
                                <m.div
                                    key={index}
                                    className="relative"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.5 + Math.random() * 0.5,
                                        y: 40 + Math.random() * 40,
                                        filter: 'blur(8px)'
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        filter: 'blur(0px)'
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    animate={
                                        isHovered
                                            ? { x: 0, y: 0, rotate: 0 }
                                            : {
                                                x: [animation.xOffset, -animation.xOffset, animation.xOffset],
                                                y: [animation.yOffset, -animation.yOffset, animation.yOffset],
                                                rotate: [0, animation.rotation, 0],
                                            }
                                    }
                                    transition={{
                                        opacity: { duration: 0.7, delay: popDelay, ease: 'easeOut' },
                                        scale: { duration: 0.7, delay: popDelay, ease: 'backOut' },
                                        y: { duration: 0.7, delay: popDelay, ease: 'backOut' },
                                        filter: { duration: 0.7, delay: popDelay, ease: 'easeOut' },
                                        x: { duration: animation.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: animation.delay },
                                        rotate: { duration: animation.duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: animation.delay },
                                    }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                >
                                    <CardShine
                                        techName={item.title}
                                        techSrc={item.URL}
                                        techClassName={item.property}
                                    />
                                </m.div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </LazyMotion>
    )
}

export default memo(Toolkit)