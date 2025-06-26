"use client"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { encode } from "qss"
import React, { useEffect, useState } from "react"
import { AnimatePresence, useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

export const LinkPreview = ({
    urlName,
    url,
    previewURL,
    className,
    width = 320,
    height = 180,
    isStatic = false,
    imageSrc = ""
}) => {

    let src

    if (!isStatic) {
        const params = encode({
            url: previewURL || url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.deviceScaleFactor": 1,
            "viewport.width": 1920,
            "viewport.height": 1080,
        })
        src = `https://api.microlink.io/?${params}`
    } else {
        src = imageSrc
    }

    const [isOpen, setIsOpen] = useState(false)

    const [isMounted, setIsMounted] = useState(false)

    const springConfig = { stiffness: 100, damping: 15 }
    const x = useMotionValue(0)

    const translateX = useSpring(x, springConfig)

    const handleMouseMove = (event) => {
        const targetRect = event.target.getBoundingClientRect()
        const eventOffsetX = event.clientX - targetRect.left
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
        x.set(offsetFromCenter)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>

            {isMounted ? (
                <div className="hidden">
                    <img src={src} width={width} height={height} alt="hidden image" />
                </div>
            ) : null}

            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                open={isOpen}
                onOpenChange={setIsOpen}>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("text-black dark:text-white", className)}>

                    <HoverCardPrimitive.Trigger
                        onMouseMove={handleMouseMove}
                        onClick={e => {
                            e.preventDefault()
                            setIsOpen(prev => !prev)
                        }}
                        asChild>

                        <span className="text-white hover:text-primary">
                            {urlName}
                        </span>

                    </HoverCardPrimitive.Trigger>

                </a>

                <LazyMotion features={loadFeatures}>

                    <HoverCardPrimitive.Content
                        className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                        side="top"
                        align="center"
                        sideOffset={10}>

                        <AnimatePresence>

                            {isOpen && (

                                <m.div
                                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                    className="shadow-lg shadow-black/50 rounded-md backdrop-blur-sm"
                                    style={{
                                        x: translateX,
                                        willChange: "transform",
                                    }}>

                                    <div className="block bg-white/10 rounded-md p-3 border border-fourth">

                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative block group overflow-hidden rounded-md border border-primary/50">

                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md z-10">
                                                <span className="text-white/60 text-sm inline-flex gap-2 justify-center items-center">View <FaExternalLinkAlt size={15} /></span>
                                            </div>

                                            <Image
                                                loading="lazy"
                                                src={isStatic ? imageSrc : src}
                                                width={width}
                                                height={height}
                                                className="rounded-md group-hover:scale-110  group-hover:brightness-25 group-hover:grayscale-75 transition-transform duration-300"
                                                alt="preview image" />
                                        </a>

                                    </div>

                                </m.div>

                            )}

                        </AnimatePresence>

                    </HoverCardPrimitive.Content>

                </LazyMotion>

            </HoverCardPrimitive.Root>

        </>
    )
}
