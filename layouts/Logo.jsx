"use client"

import ImageSaveWrapper from "@/components/Reuse/ImageSaveWrapper"
import { motion } from "motion/react"
import Image from "next/image"
import { memo } from "react"

const Logo = ({ size = "md", layoutId = "main-logo" }) => {

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
        <motion.div className='relative shrink-0' layoutId={layoutId}>

            <ImageSaveWrapper customCSS='z-100 shrink-0'>

                <Image
                    src="/images/logo.svg"
                    alt="AK Logo"
                    width={sizeClasses[size]}
                    height={sizeClasses[size]}
                    className={`disableSave z-100 shrink-0 ${imageClasses[size]}`}
                />

            </ImageSaveWrapper>

        </motion.div>
    )
}

export default memo(Logo)