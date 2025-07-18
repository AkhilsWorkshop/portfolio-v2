"use client"

import ImageSaveWrapper from "@/components/Reuse/ImageSaveWrapper"
import Image from "next/image"
import { memo } from "react"
import * as m from 'motion/react-m'
import { LazyMotion } from "motion/react"

const loadFeatures = () => import("@/lib/animation").then(res => res.default)

type LogoProps = {
    size?: "sm" | "md" | "lg"
    layoutId?: string
}

const Logo = ({ size = "md", layoutId = "main-logo" }: LogoProps) => {

    const sizeClasses = {
        sm: 48,
        md: 128,
        lg: 256
    }

    const imageClasses = {
        sm: "w-12 h-12",
        md: "w-32 h-32",
        lg: "w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64"
    }

    return (
        <LazyMotion features={loadFeatures}>

            <m.div className='relative shrink-0' layoutId={layoutId}>

                <ImageSaveWrapper customCSS='z-100 shrink-0'>

                    <Image
                        priority
                        src="/images/logo.webp"
                        alt="AK Logo"
                        width={sizeClasses[size] as number}
                        height={sizeClasses[size] as number}
                        className={`disableSave z-100 shrink-0 ${imageClasses[size]}`}
                    />

                </ImageSaveWrapper>

            </m.div>

        </LazyMotion>
    )
}

export default memo(Logo)