import { WavyBG } from "../Effects/WavyBG"
import Image from "next/image"
import { HeaderButton } from "../Effects/HeaderButton"
import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ImageSaveWrapper from "../Reuse/Image/ImageSaveWrapper";

const Hero = () => {

    const [showOverlay, setShowOverlay] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (window.scrollY <= 50) {
            setShowOverlay(true);
            const timer = setTimeout(() => setShowOverlay(false), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <>

            <WavyBG
                id="home"
                containerClassName="bg-gradient-to-tr to-bgDark via-black from-black"
            >

                <div className="relative max-w-screen-sm mx-auto flex items-center justify-center h-full px-10 sm:py-0 sm:px-4 z-[1000]">

                    <div className="flex flex-col justify-center items-center gap-4 h-full">

                        <motion.div
                            className="fixed inset-0 z-40 flex items-center justify-center"
                            initial={{
                                opacity: 1,
                                backgroundColor: "#000",
                                backdropFilter: "blur(4px)"
                            }}
                            animate={{
                                opacity: showOverlay ? 1 : 0,
                                backdropFilter: showOverlay ? "blur(4px)" : "blur(0px)",
                                backgroundColor: showOverlay ? "rgba(0, 0, 0, 0.8)" : "transparent"
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ pointerEvents: showOverlay ? "auto" : "none" }}
                        />

                        <motion.div
                            className="fixed z-100"
                            initial={false}
                            animate={{
                                width: scrolled ? 64 : (showOverlay ? 256 : 128),
                                height: scrolled ? 64 : (showOverlay ? 256 : 128),
                                top: scrolled ? "20px" : (showOverlay ? "50%" : "20%"),
                                left: scrolled ? "20px" : "50%",
                                x: scrolled ? 0 : "-50%",
                                y: scrolled ? 0 : (showOverlay ? "-50%" : 0)
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <ImageSaveWrapper customCSS='z-100'>
                                <Image
                                    src="/assets/images/layouts/logo.svg"
                                    alt="AK Logo"
                                    width={256}
                                    height={256}
                                    className="disableSave z-100"
                                />
                            </ImageSaveWrapper>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            {!showOverlay && (
                                <>
                                    <motion.h2
                                        className="text-4xl sm:text-7xl font-bold text-[#F3F0EB]"
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Akhil Harikumar
                                    </motion.h2>
                                    <motion.h2
                                        className="text-[#F3F0EB]/80 text-base sm:text-lg uppercase"
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        Full Stack Software Developer
                                    </motion.h2>
                                    <motion.h2
                                        className="text-[#F3F0EB]/80 text-base sm:text-lg uppercase"
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        <HeaderButton />
                                    </motion.h2>
                                </>
                            )}
                        </AnimatePresence>

                    </div>

                </div>

            </WavyBG>

        </>
    )
}

export default memo(Hero)
