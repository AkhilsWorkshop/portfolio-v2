import { FiExternalLink } from "react-icons/fi"
import { BsChevronDown, BsDownload } from "react-icons/bs"
import { LinkPreview } from "../Effects/LinkPreview"
import { HeaderBG } from "../Reuse/HeaderBG"
import { HeaderBG2 } from "../Reuse/HeaderBG2"
import { WavyBG } from "../Reuse/WavyBG"

const Hero = () => {

    return (

        <WavyBG
            id="home"
            containerClassName="bg-gradient-to-tr to-bgDark via-black from-black"
        >

            <div className="relative max-w-screen-sm mx-auto flex items-center justify-center h-full px-10 sm:py-0 sm:px-4 z-20">

                <div className="flex flex-col justify-center gap-2 sm:gap-4 h-full">

                    <p className="text-primary py-4 font-slogan font-normal"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="100">Hello, my name is</p>
                    <h2 className="text-2xl sm:text-5xl font-bold text-[#F3F0EB]"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="200">Akhil Harikumar</h2>
                    <h2 className="text-[#F3F0EB]/80 text-base sm:text-lg"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="300">Full Stack Developer</h2>
                    <div className="text-third py-4"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="400">
                        <span>I'm a Full Stack Developer with a love for clean code and creative tech. Currently, I'm a Software Engineer at{" "}</span>
                        <LinkPreview
                            url="https://artistportal.gye.band/artistportal/login"
                            urlName="Groovin' You Entertainment" />
                        <span>{" "}and I earned my Master's in Computer Science from{" "}</span>
                        <LinkPreview
                            url="https://www.uta.edu/"
                            urlName="The University of Texas at Arlington" />
                        .
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-3"
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="500">

                        <a href="/Resume-AkhilKumar.pdf" target="_blank" rel="noreferrer" className="text-primary font-slogan border-2 border-primary my-2 px-6 py-3 rounded-md flex items-center gap-1 cursor-pointer duration-500 hover:bg-primary/20">
                            Resume <BsDownload size={15} />
                        </a>

                    </div>
                    <div className="flex justify-center"
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-delay="500">
                        <h1>
                            <BsChevronDown className="text-primary p-2 mt-5 sm:mt-10 rounded-full hover:bg-primary/20 duration-300 cursor-pointer" size={50} />
                        </h1>
                    </div>

                </div>


            </div>

        </WavyBG>
    )
}

export default Hero
