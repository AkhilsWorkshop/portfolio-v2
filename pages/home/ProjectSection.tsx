import React from 'react'
import Title from '../../components/Title'
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { FaTools } from "react-icons/fa"
import { Projects } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    projects: Projects[]
}

const ProjectSection = ({ projects }: Props) => {
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-tr from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col h-full px-10 pt-20 sm:px-4">

                <div className="flex flex-col justify-center w-full">

                    <Title name="Few things I've made" sNo="02." />

                    <div className="flex flex-col gap-5 items-center justify-center">


                        {projects?.map(({ _id, title, description, github, demo, mobileImg, desktopImg, tags }) => (
                            <div key={_id} className="flex flex-col sm:relative text-third pt-5 ">

                                <img className="absolute hidden sm:flex aspect-auto w-[30%] right-0 mt-[10%] drop-shadow-xl z-10" src={urlFor(mobileImg).url()} alt={title} />

                                <img className="aspect-auto w-full sm:w-[80%] drop-shadow-xl" src={urlFor(desktopImg).url()} alt={title} />

                                <div className="flex flex-col sm:w-[70%] sm:min-h-[12rem] bg-gradient-to-br from-fifth via-bgDark to-fifth mt-2 sm:mt-0 p-5 rounded-md shadow-lg hover:shadow-xl gap-2">

                                    <div className="flex items-center justify-between">
                                        <p className="text-primary text-xl font-slogan">{title}</p>
                                        <div className="flex gap-2 items-center font-slogan">
                                            <a href={github} target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary"><FiGithub size={18} />Code
                                            </a>

                                            <a href={github} target="_blank" rel="noreferrer"><FiGithub className="sm:hidden" size={25} /></a>
                                            <a href={demo} target="_blank" rel="noreferrer" className="hidden sm:flex border px-2 py-1 rounded-md items-center gap-1 cursor-pointer duration-300 hover:text-primary hover:border-primary">View Site <FiExternalLink size={18} />
                                            </a>
                                            <a href={demo} target="_blank" rel="noreferrer"><FiExternalLink className="sm:hidden" size={30} /></a>
                                        </div>

                                    </div>

                                    <p className="text-sm">{description}</p>

                                    <div className="flex justify-end items-center flex-wrap gap-3">
                                        <FaTools size={20} />
                                        {/* {tags.map((tags) => (
                                                <p key={uuidv4()} className="border-b text-base font-slogan">{tags}</p>
                                            ))} */}
                                    </div>


                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProjectSection