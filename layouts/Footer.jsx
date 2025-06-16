import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div name="Contact" className="w-full bg-black text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full">
                <div className="sm:hidden flex text-gray-500 pb-4 gap-3 cursor-pointer items-center">

                    <a href="https://github.com/AkhilsWorkshop" target="_blank" rel="noreferrer">
                        <AiFillGithub size={30} className="duration-300 hover:text-secondary" />
                    </a>
                    <a href="https://www.linkedin.com/in/akhilkumarh/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin size={30} className="duration-300 hover:text-secondary" />
                    </a>
                    <a href="mailto://hakhilkumar@gmail.com" target="_blank" rel="noreferrer">
                        <MdEmail size={32} className="duration-300 hover:text-secondary" />
                    </a>
                </div>
                <div className="pb-8">
                    <Link to="Home" smooth duration={500}>
                        <p className="tracking-[.20em] cursor-pointer text-sm font-slogan text-gray-500 duration-300 hover:text-primary">Built & Designed by Akhil</p>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Footer