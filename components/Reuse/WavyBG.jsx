"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import ImageSaveWrapper from "./Image/ImageSaveWrapper";

export const WavyBG = ({
    children,
    className,
    containerClassName,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "slow",
    waveOpacity = 0.5,
    ...props
}) => {
    const noise = createNoise3D()
    let w, h, nt, i, x, ctx, canvas
    const canvasRef = useRef(null)

    const init = () => {
        canvas = canvasRef.current
        ctx = canvas.getContext("2d")
        w = ctx.canvas.width = window.innerWidth
        h = ctx.canvas.height = window.innerHeight
        ctx.filter = `blur(${blur}px)`
        nt = 0
        window.onresize = () => {
            w = ctx.canvas.width = window.innerWidth
            h = ctx.canvas.height = window.innerHeight
            ctx.filter = `blur(${blur}px)`
        }
        render()
    }

    const waveColors = ["#abdf12", "#86A238", "#545C3D"]

    const drawWave = () => {
        nt += 0.001

        ctx.beginPath()
        ctx.fillStyle = waveColors[0]

        ctx.moveTo(0, h)

        for (x = 0; x <= w; x += 5) {
            var y = noise(x / 800, 0, nt) * (h * 0.05)
            ctx.lineTo(x, h * 0.85 + y)
        }

        ctx.lineTo(w, h)
        ctx.lineTo(0, h)
        ctx.closePath()

        ctx.fill()
    }

    let animationId
    const render = () => {
        ctx.clearRect(0, 0, w, h)
        ctx.globalAlpha = waveOpacity || 0.5
        drawWave()
        animationId = requestAnimationFrame(render)
    }

    useEffect(() => {
        init()
        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [])

    const [isSafari, setIsSafari] = useState(false)
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome"),
        )
    }, [])

    return (
        <div className={cn("h-[100dvh] flex flex-col items-center justify-center", containerClassName)}>
            <ImageSaveWrapper customCSS="absolute inset-0 z-0 overflow-hidden">
                <canvas
                    className="absolute inset-0 z-0"
                    ref={canvasRef}
                    id="canvas"
                    style={{
                        ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                    }}
                ></canvas>
            </ImageSaveWrapper>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    )
}
