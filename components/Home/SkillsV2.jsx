import React from 'react'
import CardShine from '../Effects/CardShine'
import { skills } from '@/data/SkillsData'

const SkillsV2 = () => {
    return (
        <div className='h-full md:h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-black'>

            <div className='flex flex-wrap justify-center items-center gap-4 max-w-6xl m-auto'>

                {skills.map((item, index) => (
                    <CardShine
                        key={index}
                        techName={item.title}
                        techSrc={item.URL}
                        techClassName={item.property}
                    />
                ))}

            </div>

        </div>
    )
}

export default SkillsV2