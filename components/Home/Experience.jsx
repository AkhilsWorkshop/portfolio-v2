import React, { memo, useEffect, useRef, useState } from "react"
import { progressData } from "@/data/ProgressData"
import { motion, useScroll, useTransform } from "motion/react"
import ProgressBar from "../Effects/ProgressBar"

const Experience = () => {

    const containerRef = useRef(null)
    const [particles, setParticles] = useState([])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], [0, 50])
    const starsY = useTransform(scrollYProgress, [0, 1], [0, -200])

    useEffect(() => {

        const newParticles = Array.from({ length: 80 }, (_, i) => ({
            id: i,
            x: Math.random() * (window?.innerWidth || 1200),
            y: Math.random() * (window?.innerHeight || 800),
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
            return ({
                content: (
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }} >

                        <div className="flex flex-col items-start">
                            <h4 className="text-lg font-semibold text-gray-200">{item.title}</h4>
                            <p className="text-sm text-gray-400 font-medium">{item.date}</p>
                        </div>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            {item.shortDescription}
                        </p>

                        {item.fullDescription && (
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                {item.fullDescription}
                            </p>
                        )}

                    </motion.div>
                ),
            })
        })

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden bg-black font-['Orbitron',_'Exo_2',_monospace]">

            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: starsY }}>

                {particles.map((particle) => (
                    <motion.div
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

            </motion.div>

            <div
                className="absolute top-1/4 left-1/5 w-[600px] h-[600px] rounded-full blur-[60px]"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 40%, transparent 70%)'
                }}
            />

            <div
                className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full blur-[70px]"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, rgba(126, 34, 206, 0.12) 40%, transparent 70%)'
                }}
            />

            <div
                className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[50px]"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.18) 0%, rgba(6, 182, 212, 0.08) 40%, transparent 70%)'
                }}
            />

            <div
                className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full blur-[40px]"
                style={{
                    background: 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(16, 185, 129, 0.06) 40%, transparent 70%)'
                }}
            />

            <motion.div style={{ y: textY }} className="relative z-30">
                <ProgressBar data={progress} />
            </motion.div>

        </div>
    )
}

export default memo(Experience)