import React, { memo } from 'react'
import { motion } from 'motion/react'

const Heading = ({ name }) => {
    return (
        <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <h1 className='text-2xl sm:text-3xl md:text-4xl text-white font-heading relative z-10'>{name}</h1>

            <div className="absolute w-[85%] h-[3px] bg-primary -bottom-2 left-8 z-0"
                style={{
                    transform: 'rotate(-2deg) translateY(6px)',
                    clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
                    borderRadius: '1px'
                }} />

            <div className="absolute w-[75%] h-[2px] bg-primary -bottom-2 left-10 z-0"
                style={{
                    transform: 'rotate(-5deg) translateY(6px)',
                    clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)',
                    borderRadius: '1px'
                }} />

        </motion.div>
    )
}

export default memo(Heading)