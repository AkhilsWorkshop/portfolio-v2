import { FiGithub, FiExternalLink } from "react-icons/fi"
import { FaTools } from "react-icons/fa"
import { list } from "../../data/projectData"
import { v4 as uuidv4 } from 'uuid';
import TitleBar from "../../components/Common/TitleBar";

const Project = () => {

    return (
        <>
            <div name="Work" className="relative min-h-screen w-full bg-gradient-to-tr from-bgDark via-black to-bgDark text-secondary">

                <div className="max-w-screen-lg mx-auto flex flex-col h-full px-10 pt-20 sm:px-4">

                    <div className="flex flex-col justify-center w-full">

                        <TitleBar name="Few things I've made" sNo="02." />

                        <div className="flex flex-col gap-5 items-center justify-center">


                            {list.map(({ id, name, desc, first, second, github, url, tags }) => (
                                <div key={uuidv4()} className="flex flex-col sm:relative text-third pt-5 ">

                                    <img className="absolute hidden sm:flex aspect-auto w-[30%] right-0 mt-[10%] drop-shadow-xl z-10" src={second} alt={id}
                                        data-aos="fade-left"
                                        data-aos-once="true"
                                        data-aos-duration="1500" />

                                    <img className="aspect-auto w-full sm:w-[80%] drop-shadow-xl" src={first} alt={id + 1}
                                        data-aos="fade-right"
                                        data-aos-once="true"
                                        data-aos-duration="1500" />

                                    <div className="flex flex-col sm:w-[70%] sm:min-h-[12rem] bg-gradient-to-br from-fifth via-bgDark to-fifth mt-2 sm:mt-0 p-5 rounded-md shadow-lg hover:shadow-xl gap-2"
                                        data-aos="fade-up"
                                        data-aos-once="true"
                                        data-aos-duration="1000" >

                                        <div className="flex items-center justify-between">
                                            <p className="text-primary text-xl font-slogan">{name}</p>
                                            <div className="flex gap-2 items-center font-slogan">
                                                <a href={github} target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary"><FiGithub size={18} />Code
                                                </a>

                                                <a href={github} target="_blank" rel="noreferrer"><FiGithub className="sm:hidden" size={25} /></a>
                                                <a href={url} target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary">View Site <FiExternalLink size={18} />
                                                </a>
                                                <a href={url} target="_blank" rel="noreferrer"><FiExternalLink className="sm:hidden" size={30} /></a>
                                            </div>

                                        </div>

                                        <p className="text-sm">{desc}</p>

                                        <div className="flex justify-end items-center flex-wrap gap-3">
                                            <FaTools size={20} />
                                            {tags.map((tags) => (
                                                <p key={uuidv4()} className="border-b text-base font-slogan">{tags}</p>
                                            ))}
                                        </div>


                                    </div>

                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Project