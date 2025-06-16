"use client"

import logo from '../assets/Images/layouts/Navbar/logo.svg';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { Turn as Hamburger } from 'hamburger-react'
import { MdEmail } from 'react-icons/md';
import { items } from '@/data/navData';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className={`flex justify-center items-center w-full h-12 text-secondary
        px-4 fixed shadow-xl z-50 transition-all ease-in duration-300 ${menu ? 'bg-black/90' : 'backdrop-blur bg-black/70'}`}>
                <div className="max-w-screen-lg flex justify-between items-center w-full">
                    <h1>
                        <img className="z-30 w-14 cursor-pointer hover:scale-95 duration-200" src={logo} alt="Logo"
                            data-aos="fade-up-left"
                            data-aos-once="true"
                            data-aos-delay="0"></img>
                    </h1>


                    <div className="hidden md:flex gap-5">
                        {items.map(({ item, offset }) => (
                            <h1 activeClass="text-[#ABDF12] font-bold underline underline-offset-[6px]" spy={true} key={uuidv4()} offset={offset} to={item} smooth duration={500} className="cursor-pointer text-secondary duration-300 hover:text-primary hover:underline hover:underline-offset-[6px]">
                                {item}
                            </h1>
                        ))}
                        <div className="md:flex gap-5">
                            <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="500">
                                <AiFillGithub size={25} className="duration-300 hover:text-primary hover:scale-110" />
                            </a>

                            <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer"
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay="600">
                                <AiFillLinkedin size={25} className="duration-300 hover:text-primary hover:scale-110" />
                            </a>
                        </div>
                    </div>



                    {/* Mobile Version */}
                    <div className="cursor-pointer z-30 md:hidden">
                        <Hamburger toggled={menu} toggle={setMenu} color={menu ? "#000000" : "#ffffff"} />
                    </div>


                    <div className={`md:hidden flex flex-col absolute left-0 top-0 w-full h-screen transition-all ease-in duration-150 z-10 ${menu ? ' visible bg-black/90 backdrop-blur-sm' : ' invisible'}`}>

                        <div className="flex bg-primary h-12 w-full"></div>
                        <div className="flex flex-col justify-between items-center w-full h-full">
                            <div className="flex flex-col items-center w-full">
                                <img className="z-30 w-20 my-8" src={logo} alt="Logo"></img>
                                <div className="flex bg-gradient-to-r from-black via-primary to-black h-[0.1rem] w-full"></div>
                            </div>

                            <div className="flex flex-col justify-center items-center px-8 py-4 ">
                                {items.map(({ item }) => (

                                    <h1 onClick={() => setMenu(!menu)} to={item} smooth duration={500} key={uuidv4()} className=" cursor-pointer uppercase text-secondary py-2 text-lg">
                                        {item}
                                    </h1>

                                ))}
                            </div>
                            <div className="flex flex-col gap-10 cursor-pointer items-center pb-32 w-full">
                                <div className="flex bg-gradient-to-r from-black via-primary to-black h-[0.1rem] w-full"></div>
                                <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-primary w-fit flex items-center rounded-md border-2 border-primary p-2">Resume
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

                </div>



            </div>

        </>
    )
}

export default Navbar