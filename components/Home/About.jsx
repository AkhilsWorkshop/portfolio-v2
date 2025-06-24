import React, { memo, useEffect, useRef, useState } from 'react'
import { LinkPreview } from '../Effects/LinkPreview'
import { motion } from 'motion/react'
import Heading from '../Reuse/Heading'

const About = () => {

    const [particles, setParticles] = useState([])

    const containerRef = useRef(null)

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 1,
            opacity: Math.random() * 0.5 + 0.1, speed: Math.random() * 2 + 0.5,
        }))
        setParticles(newParticles)
    }, [])

    return (
        <div
            ref={containerRef}
            className='relative h-full min-h-[100dvh] w-full flex flex-col justify-center items-center bg-black'>

            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-[#082A3A] rounded-full"
                    initial={{
                        x: particle.x,
                        y: particle.y,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        y: [particle.y, particle.y - 100, particle.y],
                        opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
                    }}
                    transition={{
                        duration: particle.speed * 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    style={{
                        width: particle.size,
                        height: particle.size,
                    }}
                />
            ))}

            <div className="z-30 flex flex-col justify-between items-center gap-20 w-full h-full max-w-6xl m-auto p-6">

                <Heading name="The Intro" />

                <motion.div
                    className='flex flex-col items-center justify-center gap-8 h-auto z-40 text-white/70'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{}}
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                            visible: {
                                opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                transition: { duration: 0.9, delay: 0.1, type: 'spring', bounce: 0.3 }
                            }
                        }}
                    >
                        <span>I'm Akhil Harikumar, a full-stack software developer with a passion for building clean, performant, and user-focused applications. I enjoy working across the stack—bringing together beautiful front-end interfaces with robust backend systems—and I love blending technical precision with thoughtful design.{" "}</span>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                            visible: {
                                opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                transition: { duration: 1.1, delay: 0.5, type: 'spring', bounce: 0.3 }
                            }
                        }}
                    >
                        <span>
                            Currently, I'm a Software Engineer at{" "}
                        </span>
                        <LinkPreview
                            url="https://gye.band/artistportal"
                            previewURL="https://artistportal.gye.band/artistportal/login"
                            urlName="Groovin' You Entertainment" />
                        <span>, where I help develop and maintain a portal for musicians to manage their gigs. From venues & itineraries to setlists & repertoire management, I work on creating tools that streamline every aspect of a musician's workflow. Whether it's crafting seamless UI experiences or architecting backend features, I care deeply about building software that's both functional and enjoyable to use.
                        </span>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' },
                            visible: {
                                opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
                                transition: { duration: 1.3, delay: 0.9, type: 'spring', bounce: 0.3 }
                            }
                        }}
                    >
                        <span>
                            I completed my Master's in Computer Science at{" "}
                        </span>
                        <LinkPreview
                            url="https://www.uta.edu/"
                            urlName="The University of Texas at Arlington" />
                        <span>, where I deepened my understanding of modern software systems. Some of the courses I took include Cloud Computing, Python Programming, Software Engineering, Database Systems, and Web Data Management—each of which shaped my approach to building scalable, maintainable, and efficient software.
                        </span>
                    </motion.div>
                </motion.div>

            </div>

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-64 bg-white/50 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            />

        </div>
    )
}

export default memo(About)