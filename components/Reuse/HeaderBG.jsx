"use client";
import React, { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const HeaderBG = () => {

    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);

    return (
        <div
            style={{
                transform: `translate(-50%,-50%) skewX(48deg) skewY(-14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className="absolute -top-1/2 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4"
        >
            {rows.map((_, i) => (
                <motion.div key={`row` + i} className="relative h-8 w-16 border-l border-slate-900">
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: "#ABDF12",
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="relative h-8 w-16 border-t border-r border-slate-900">
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default memo(HeaderBG)
