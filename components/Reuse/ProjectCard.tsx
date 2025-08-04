import { memo, useState, useEffect, useCallback, useRef } from "react"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"
import Image from "next/image"
import ImageSaveWrapper from "./ImageSaveWrapper"
import { FaArrowRight, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import CardGlow from "../Effects/CardGlow"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type Project = {
    id: number,
    name: string,
    desktopImage: string,
    mobileImage: string,
    desc: string,
    tags: string[],
    url: string,
    github: string,
}

type ProjectCardProps = {
    projects: Project[]
}

const ProjectCard = ({ projects }: ProjectCardProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isInViewport, setIsInViewport] = useState(false)
    const componentRef = useRef<HTMLDivElement>(null)

    const currentProject = projects[currentIndex]

    useEffect(() => {

        const currentRef = componentRef.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting)
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -10% 0px'
            }
        )

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }

    }, [])

    const handleTransition = useCallback(async (newIndex: number) => {

        if (isTransitioning) return

        setIsTransitioning(true)

        await new Promise(resolve => setTimeout(resolve, 200))

        setCurrentIndex(newIndex)

        await new Promise(resolve => setTimeout(resolve, 100))

        setIsTransitioning(false)

    }, [isTransitioning])

    useEffect(() => {

        if (!isInViewport || isPaused || projects.length <= 1) return

        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % projects.length
            handleTransition(newIndex)
        }, 5000)

        return () => clearInterval(interval)

    }, [currentIndex, isPaused, projects.length, handleTransition, isInViewport])

    const nextProject = () => {
        const newIndex = (currentIndex + 1) % projects.length
        handleTransition(newIndex)
    }

    const prevProject = () => {
        const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
        handleTransition(newIndex)
    }

    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    return (
        <LazyMotion features={loadFeatures}>

            <div
                ref={componentRef}
                className="relative flex flex-col md:flex-row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                {projects.length > 1 && (
                    <>
                        <button
                            onClick={prevProject}
                            className="absolute -left-12 xl:-left-24 top-48 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-secondary p-2 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer hover:text-primary hover:scale-150 hidden lg:block"
                            disabled={isTransitioning}>
                            <FaChevronLeft size={25} />
                        </button>

                        <button
                            onClick={nextProject}
                            className="absolute -right-12 xl:-right-24 top-48 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-secondary p-2 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer hover:text-primary hover:scale-150 hidden lg:block"
                            disabled={isTransitioning}>
                            <FaChevronRight size={25} />
                        </button>
                    </>
                )}

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
                                key={`desktop-image-${currentIndex}`}
                                initial={{ opacity: 0, filter: 'blur(5px)' }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(5px)' : 'blur(0px)' }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="w-[70%] h-[100%] overflow-hidden">

                                <Image
                                    src={currentProject.desktopImage}
                                    alt={`${currentProject.name} desktop view`}
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

                            <div className="flex justify-between items-center gap-2">

                                <m.h3
                                    key={`title-${currentIndex}`}
                                    initial={{ opacity: 0, filter: 'blur(2px)' }}
                                    animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(2px)' : 'blur(0px)' }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-bold text-secondary">
                                    {currentProject.name}
                                </m.h3>

                                {projects.length > 1 && (
                                    <div className="flex gap-2 lg:hidden items-center">
                                        <button
                                            onClick={prevProject}
                                            className="z-30 text-secondary"
                                            disabled={isTransitioning}>
                                            <FaChevronLeft size={20} />
                                        </button>

                                        <button
                                            onClick={nextProject}
                                            className="z-30 text-secondary"
                                            disabled={isTransitioning}>
                                            <FaChevronRight size={20} />
                                        </button>
                                    </div>
                                )}

                            </div>

                            <m.p
                                key={`desc-${currentIndex}`}
                                initial={{ opacity: 0, filter: 'blur(2px)' }}
                                animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(2px)' : 'blur(0px)' }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-third/90 text-sm leading-relaxed">
                                {currentProject.desc}
                            </m.p>

                        </div>

                        <div className="flex items-center justify-between gap-2">

                            <div
                                key={`tags-${currentIndex}`}
                                className="flex flex-wrap gap-2">
                                {currentProject.tags.map((tag: string, tagIndex: number) => (
                                    <m.span
                                        key={tagIndex}
                                        initial={{ opacity: 0, filter: 'blur(2px)' }}
                                        animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(2px)' : 'blur(0px)' }}
                                        transition={{ duration: 0.3, delay: 0.2 + (tagIndex * 0.1) }}
                                        className="rounded-md px-2 py-1 text-xs bg-[#0a300a86] text-primary  transition-colors duration-200 inline-flex items-center gap-1">
                                        {tag}
                                    </m.span>
                                ))}
                            </div>

                            <m.div
                                key={`actions-${currentIndex}`}
                                initial={{ opacity: 0, filter: 'blur(2px)' }}
                                animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(2px)' : 'blur(0px)' }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="flex items-center gap-4">
                                <a
                                    href={currentProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group text-sm inline-flex items-center gap-1 border border-secondary px-2 py-1 rounded-md text-secondary cursor-pointer hover:brightness-75 duration-200">
                                    View

                                    <FaArrowRight size={16} className="-rotate-45 group-hover:rotate-315 duration-500" />

                                </a>

                                <a
                                    href={currentProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub size={30} className="text-secondary cursor-pointer hover:brightness-75 duration-200" />
                                </a>

                            </m.div>

                        </div>

                    </m.div>

                </div>

                <ImageSaveWrapper customCSS="relative w-full md:w-1/3 h-fit overflow-hidden">

                    <Image
                        src="/projects/outer-shell/Mobile.png"
                        alt="Mobile Shell"
                        width={300}
                        height={600}
                        className="w-full h-full object-contain disableSave z-10"
                    />

                    <div className="absolute inset-0 flex items-center justify-center -z-10">

                        <m.div
                            key={`mobile-image-${currentIndex}`}
                            initial={{ opacity: 0, filter: 'blur(5px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            animate={{ opacity: isTransitioning ? 0 : 1, filter: isTransitioning ? 'blur(5px)' : 'blur(0px)' }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="w-[75%] h-[100%] overflow-hidden rounded-[2rem]">

                            <Image
                                src={currentProject.mobileImage}
                                alt={`${currentProject.name} mobile view`}
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