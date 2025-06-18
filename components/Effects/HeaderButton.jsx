"use client";
import React from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";
import { useRef } from "react";
import { BsDownload } from "react-icons/bs";

export function HeaderButton() {
    return (
        <button
            className="relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl group"
            style={{
                borderRadius: '6px',
            }}>
            <div
                className="absolute inset-0 group-hover:opacity-0 duration-300"
                style={{ borderRadius: `calc(6px * 0.96)` }}>
                <MovingBorder rx="30%" ry="30%">
                    <div
                        className="h-40 w-40 bg-[radial-gradient(#abdf12_10%,transparent_90%)]" />
                </MovingBorder>
            </div>
            <a
                href="/Resume-AkhilKumar.pdf"
                target="_blank"
                rel="noreferrer"
                className="relative flex h-full w-full items-center justify-center gap-2 border border-primary/50 bg-black group-hover:bg-primary/10 text-base text-primary antialiased backdrop-blur-xl duration-300"
                style={{
                    borderRadius: `calc(6px * 0.96)`,
                }}
            >
                Resume <BsDownload size={15} />
            </a>
        </button>
    );
}

export const MovingBorder = ({
    children,
    duration = 3000,
    rx,
    ry,
    ...otherProps
}) => {
    const pathRef = useRef();
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}>
                <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}>
                {children}
            </motion.div>
        </>
    );
};
