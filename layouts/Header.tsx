import React, { useState } from 'react'
import { motion } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';
import logo from "../public/logo.svg"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'

type Props = {}

const Header = (props: Props) => {

    const [menu, setMenu] = useState(false)

    const menuItems: { name: String, duration: Number }[] = [
        {
            name: "Home",
            duration: 0.6
        },
        {
            name: "About",
            duration: 0.7
        },
        {
            name: "Work",
            duration: 0.8
        },
        {
            name: "Skills",
            duration: 0.9
        },
        {
            name: "Contact",
            duration: 1
        }
    ]

    return (
        <>
            <header className="fixed flex justify-center items-center w-full h-12 text-secondary
        px-4 shadow-xl transition-all ease-in duration-300 bg-black/90 backdrop-blur">
                <nav className="max-w-screen-lg flex justify-between items-center w-full">

                    <motion.div
                        initial={{
                            x: 500,
                            y: 500,
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

                    <div className="cursor-pointer md:hidden">
                        <Hamburger toggled={menu} toggle={setMenu} color="#ffffff" />
                    </div>

                    <div

                        className="hidden md:flex gap-5">
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
                </nav>
            </header>
        </>
    )
}

export default Header