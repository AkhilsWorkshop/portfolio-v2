import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown, BsDownload } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"

const Hero = () => {

    return (
        <div className="h-screen w-full bg-gradient-to-tr from-bgDark via-black to-black">

            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-10 sm:py-0 sm:px-4">

                <div className="flex flex-col justify-center gap-2 sm:gap-4 h-full">

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 1,
                                staggerChildren: 1.5, // set delay between each child animation
                            },
                        }}
                        className="flex flex-col justify-center gap-2 sm:gap-4"
                    >
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="text-primary py-4 font-slogan font-normal"
                        >
                            Hello, my name is
                        </motion.p>
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="text-4xl sm:text-7xl font-bold text-[#F3F0EB]"
                        >
                            Akhil Harikumar
                        </motion.h2>
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="text-third text-2xl sm:text-6xl font-bold"
                        >
                            Full Stack Developer
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="text-third py-4 sm:w-1/2"
                        >
                            I&apos;m a passionate Full Stack Developer who loves to build & design web applications. Currently, I&apos;m pursing my Masters in Computer Science at <span className="text-[#ABDF12]">
                                The University of Texas at Arlington.
                            </span>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-start gap-3"
                        initial={{ opacity: 0, x: -100 }} // Set initial position and opacity
                        animate={{ opacity: 1, x: 0 }} // Set final position and opacity
                        transition={{ duration: 0.5, delay: 0.5 }} // Set duration of animation
                    >
                        <a href="https://hellobuddy.ga/" target="_blank" rel="noreferrer" className="text-[#ABDF12] font-slogan border-2 border-[#ABDF12] my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer duration-500 hover:bg-[#ABDF12]/20">
                            Check out my latest Project<FiExternalLink size={18} />
                        </a>

                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-[#ABDF12] font-slogan border-2 border-[#ABDF12] my-2 px-6 py-3 rounded-md hidden md:flex items-center gap-1 cursor-pointer duration-500 hover:bg-[#ABDF12]/20">
                            Resume <BsDownload size={15} />
                        </a>
                    </motion.div>

                    <Link href="#about" scroll={true} >
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 100 }} // Set initial position and opacity
                            animate={{ opacity: 1, y: 0 }} // Set final position and opacity
                            transition={{ duration: 0.5, delay: 0.7 }} // Set duration of animation
                        >

                            <BsChevronDown className="text-primary p-2 mt-5 sm:mt-10 rounded-full hover:bg-primary/20 duration-300 cursor-pointer" size={50} />
                        </motion.div>
                    </Link>
                </div>


            </div>

        </div >
    )
}

export default Hero