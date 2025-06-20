"use client"

import { memo, useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { animate } from "motion/react"

const CardGlow = () => {

    const containerRef = useRef(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef(0)

    const handleMove = useCallback((e) => {

        if (!containerRef.current) return

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {

            const element = containerRef.current

            if (!element) return

            const { left, top, width, height } = element.getBoundingClientRect()
            const mouseX = e?.x ?? lastPosition.current.x
            const mouseY = e?.y ?? lastPosition.current.y

            if (e) {
                lastPosition.current = { x: mouseX, y: mouseY }
            }

            const center = [left + width * 0.5, top + height * 0.5]
            const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
            const inactiveRadius = 0.5 * Math.min(width, height) * 0

            if (distanceFromCenter < inactiveRadius) {
                element.style.setProperty("--active", "0")
                return
            }

            const isActive =
                mouseX > left - 20 &&
                mouseX < left + width + 20 &&
                mouseY > top - 20 &&
                mouseY < top + height + 20

            element.style.setProperty("--active", isActive ? "1" : "0")

            if (!isActive) return

            const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0
            let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90

            const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
            const newAngle = currentAngle + angleDiff

            animate(currentAngle, newAngle, {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (value) => {
                    element.style.setProperty("--start", String(value))
                },
            })
        })
    }, [])

    useEffect(() => {

        const handleScroll = () => handleMove()
        const handlePointerMove = (e) => handleMove(e)

        window.addEventListener("scroll", handleScroll, { passive: true })
        document.body.addEventListener("pointermove", handlePointerMove, {
            passive: true,
        })

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
            window.removeEventListener("scroll", handleScroll)
            document.body.removeEventListener("pointermove", handlePointerMove)
        }
    }, [handleMove])

    return (
        <>
            <div
                className="pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity" />
            <div
                ref={containerRef}
                style={{
                    "--spread": 50,
                    "--start": "0",
                    "--active": "0",
                    "--glowingeffect-border-width": `2px`,
                    "--repeating-conic-gradient-times": "5",
                    "--gradient": `radial-gradient(circle, #ABDF12 40%, #5ce3cc 100%),
              radial-gradient(circle at 40% 40%, #ABDF12 30%, #5ce3cc 70%),
              radial-gradient(circle at 60% 60%, #ABDF12 40%, #5ce3cc 100%), 
              radial-gradient(circle at 40% 60%, #ABDF12 40%, #5ce3cc 100%),
              repeating-conic-gradient(
                from 236.84deg at 50% 50%,
                #ABDF12 0%,
                #5ce3cc 50%,
                #ABDF12 100%
              )`
                }}
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity">
                <div
                    className={cn(
                        "glow",
                        "rounded-[inherit]",
                        'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
                        "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
                        "after:[background:var(--gradient)] after:[background-attachment:fixed]",
                        "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
                        "after:[mask-clip:padding-box,border-box]",
                        "after:[mask-composite:intersect]",
                        "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
                    )} />
            </div>
        </>
    )
}

export default memo(CardGlow)
