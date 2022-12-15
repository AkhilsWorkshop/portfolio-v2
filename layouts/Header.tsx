import React, { useState } from 'react'
import logo from "../public/logo.svg"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {

    const [menu, setMenu] = useState(false)

    const menuItems: String[] = ["Home", "About", "Work", "Skills", "Contact"]

    return (
        <div>
            <div className={`flex justify-center items-center w-full h-12 text-secondary
        px-4 fixed shadow-xl z-50 transition-all ease-in duration-300 ${menu ? 'bg-black/90' : 'backdrop-blur bg-black/70'}`}>
                <div className="max-w-screen-lg flex justify-between items-center w-full">

                    <Image priority={true} className="z-30 w-14 cursor-pointer hover:scale-95 duration-500" src={logo} alt="Logo" />

                    <div className="hidden md:flex gap-5">
                        {menuItems.map((eachItem, index) => (
                            <p key={index} className="cursor-pointer text-secondary duration-300 hover:text-primary hover:underline hover:underline-offset-[6px]">
                                {eachItem}
                            </p>
                        ))}
                        <div className="md:flex gap-5">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header