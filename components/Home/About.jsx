import React, { memo, useEffect, useRef, useState } from 'react'
import { LinkPreview } from '../Effects/LinkPreview'
import { useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"
import Heading from '../Reuse/Heading'

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

const About = () => {

    const [particles, setParticles] = useState([])

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

                <div className="z-30 flex flex-col justify-between items-center gap-20 w-full h-full max-w-3xl xl:max-w-6xl m-auto p-6">

                    <Heading name="The Intro" />

                    <m.div
                        className='flex flex-col items-center justify-center gap-8 h-auto z-40 text-white/70'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={{}}>

                        <m.div
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                                visible: {
                                    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                    transition: { duration: 0.9, delay: 0.1, type: 'spring', bounce: 0.3 }
                                }
                            }}>
                            <span>I'm Akhil Harikumar, a full stack software developer with a passion for building clean, performant, and user-centric applications. I enjoy working across the stack, bringing together beautiful frontend interfaces with robust backend systems.{" "}</span>
                        </m.div>

                        <m.div
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                                visible: {
                                    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                    transition: { duration: 1.1, delay: 0.5, type: 'spring', bounce: 0.3 }
                                }
                            }}>
                            <span>
                                Currently, I'm a Software Engineer at{" "}
                            </span>
                            <LinkPreview
                                url="https://gye.band/artistportal"
                                previewURL="https://artistportal.gye.band/artistportal/login"
                                urlName="Groovin' You Entertainment" />
                            <span>, where I help develop and maintain multiple portals that allow management, musicians and crew to manage their gigs. From venues & itineraries to setlists & repertoire management, I work on creating tools that streamline every aspect of an artist's workflow. Whether it's crafting seamless UI experiences or architecting backend features, I care deeply about building software that's both functional and enjoyable to use.
                            </span>
                        </m.div>

                        <m.div
                            variants={{
                                hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                                visible: {
                                    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                    transition: { duration: 1.3, delay: 0.9, type: 'spring', bounce: 0.3 }
                                }
                            }}>
                            <span>
                                I completed my Master's in Computer Science at{" "}
                            </span>
                            <LinkPreview
                                url="https://www.uta.edu/"
                                urlName="The University of Texas at Arlington" />
                            <span>, where I deepened my understanding of modern software systems. Some of the courses I took include Cloud Computing, Python Programming, Software Engineering, Database Systems and Web Data Management each of which shaped my approach to building scalable, maintainable, and efficient software.
                            </span>
                        </m.div>
                    </m.div>

                </div>

                <div
                    className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[60px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(22,163,74,0.1) 40%, transparent 100%)'
                    }}
                />

                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[60px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(220,38,38,0.1) 40%, transparent 100%)'
                    }}
                />

            </div>

        </LazyMotion>
    )
}

export default memo(About)