import React, { useState } from 'react'
import { motion } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';
import logo from "../public/logo.svg"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import Image from 'next/image'
import { Sling as Hamburger } from 'hamburger-react'

const Header = () => {

    const [menu, setMenu] = useState(false)

    const menuItems: { name: String, duration: Number }[] = [
        {
            name: "Home",
            duration: 0.2
        },
        {
            name: "About",
            duration: 0.3
        },
        {
            name: "Work",
            duration: 0.4
        },
        {
            name: "Skills",
            duration: 0.5
        },
        {
            name: "Contact",
            duration: 0.6
        }
    ]

    return (
        <>
            <header className="fixed flex justify-center items-center w-full h-12 text-secondary
        px-4 shadow-xl transition-all ease-in duration-300 bg-black/90 backdrop-blur">
                <nav className="max-w-screen-lg flex justify-between items-center w-full">
                    <motion.div
                        initial={{
                            x: "30vw",
                            y: "50vh",
                            opacity: 0,
                            scale: 2
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 0.7
                        }}
                    >
                        <Image priority={true} className="w-14 cursor-pointer hover:scale-95 duration-500" src={logo} alt="Logo" />
                    </motion.div>

                    {/* Desktop Version */}
                    <div className="hidden md:flex gap-5">
                        {menuItems.map(({ name, duration }) => (
                            <motion.p
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: duration
                                }}
                                key={uuidv4()} className="cursor-pointer text-secondary duration-300 hover:text-primary hover:underline hover:underline-offset-[6px]">
                                {name}
                            </motion.p>
                        ))}
                        <motion.div
                            initial={{
                                x: 100,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1
                            }}
                            className="md:flex gap-5">
                            <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="500">
                                <AiFillGithub size={25} className="duration-300 hover:text-[#ABDF12] hover:scale-110" />
                            </a>

                            <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="600">
                                <AiFillLinkedin size={25} className="duration-300 hover:text-primary hover:scale-110" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile Version */}
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1
                        }}
                        className="cursor-pointer md:hidden">
                        <Hamburger toggled={menu} toggle={setMenu} color="#ffffff" />
                    </motion.div>

                    <div className={`md:hidden flex flex-col absolute right-0 top-12 w-full h-[calc(100vh_-_3rem)] bg-black/90 transition-all ease-in-out duration-300 z-10 ${menu ? 'backdrop-blur-sm' : 'translate-x-[100%]'}`}>

                        <div className="flex flex-col justify-between items-start w-full h-full p-14">
                            <div className="flex flex-col justify-center items-start gap-6">
                                {menuItems.map(({ name, duration }) => (
                                    <motion.p
                                        initial={{
                                            x: 100,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: duration
                                        }}
                                        key={uuidv4()} onClick={() => setMenu(!menu)} className="text-xl text-secondary">
                                        {name}
                                    </motion.p>
                                ))}
                                <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-fifth font-bold flex items-center rounded-md bg-primary/70 p-2 px-3">My Resume
                                </a>
                                <div className="flex gap-3">
                                    <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer">
                                        <AiFillGithub size={30} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer">
                                        <AiFillLinkedin size={30} />
                                    </a>
                                    <a href="mailto://hakhilkumar@gmail.com" target="_blank" rel="noreferrer">
                                        <MdEmail size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header