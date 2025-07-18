import { memo } from "react"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"
import Image from "next/image"
import ImageSaveWrapper from "./ImageSaveWrapper"
import { FaArrowRight, FaGithub } from "react-icons/fa"
import CardGlow from "../Effects/CardGlow"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type ProjectCardProps = {
    project: {
        id: number,
        name: string,
        desktopImage: string,
        mobileImage: string,
        desc: string,
        tags: string[],
        url: string,
        github: string,
    }
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    return (
        <LazyMotion features={loadFeatures}>

            <div className="relative overflow-hidden flex">

                <div className="w-full md:w-2/3 h-full flex flex-col overflow-hidden space-y-6">

                    <ImageSaveWrapper customCSS="relative w-full h-full overflow-hidden">

                        <Image
                            src="/projects/outer-shell/Desktop.png"
                            alt="Desktop Shell"
                            width={1500}
                            height={600}
                            className="w-full h-full object-contain disableSave z-10"
                        />

                        <div className="absolute inset-0 flex items-center justify-center -z-10">

                            <m.div
                                initial={{ filter: 'blur(5px)' }}
                                whileInView={{ filter: 'blur(0px)' }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="w-[70%] h-[100%] overflow-hidden">

                                <Image
                                    src={project.desktopImage}
                                    alt={`${project.name} desktop view`}
                                    width={700}
                                    height={600}
                                    className="w-full h-full object-contain disableSave"
                                />

                            </m.div>

                        </div>

                    </ImageSaveWrapper>

                    <m.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative rounded-xl bg-gradient-to-br from-gray-900/20 to-gray-950/20 border-2 border-gray-900 p-6 flex flex-col gap-6">

                        <CardGlow />

                        <div className="space-y-2">

                            <h3 className="text-xl font-bold text-secondary">
                                {project.name}
                            </h3>

                            <p className="text-third/90 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                        </div>

                        <div className="flex items-center justify-between gap-2">

                            <div className="flex flex-wrap gap-2">

                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="rounded-md px-2 py-1 text-xs bg-[#0a302c] text-[#5ce3cc]  transition-colors duration-200 inline-flex items-center gap-1">
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <div className="flex items-center gap-4">

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group text-sm inline-flex items-center gap-1 border border-primary px-2 py-1 rounded-md text-primary cursor-pointer hover:brightness-75 duration-200">
                                    View

                                    <FaArrowRight size={16} className="-rotate-45 group-hover:rotate-315 duration-500" />

                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub size={30} className="text-primary cursor-pointer hover:brightness-75 duration-200" />
                                </a>

                            </div>

                        </div>

                    </m.div>

                </div>

                <ImageSaveWrapper customCSS="relative w-1/3 h-fit overflow-hidden hidden md:block">

                    <Image
                        src="/projects/outer-shell/Mobile.png"
                        alt="Mobile Shell"
                        width={300}
                        height={600}
                        className="w-full h-full object-contain disableSave z-10"
                    />

                    <div className="absolute inset-0 flex items-center justify-center -z-10">

                        <m.div
                            initial={{ filter: 'blur(5px)' }}
                            whileInView={{ filter: 'blur(0px)' }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="w-[75%] h-[100%] overflow-hidden rounded-[2rem]">

                            <Image
                                src={project.mobileImage}
                                alt={`${project.name} mobile view`}
                                width={400}
                                height={800}
                                className="w-full h-full object-contain disableSave"
                            />

                        </m.div>

                    </div>

                </ImageSaveWrapper>

            </div>

        </LazyMotion>
    )
}

export default memo(ProjectCard)