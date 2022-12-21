import Image from 'next/image'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { skills } from '../../data/skills';
import { Skills } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    skills: Skills[]
}

const SkillSection = ({ skills }: Props) => {

    console.log("hi")
    return (
        <div className="h-auto sm:h-screen w-full bg-gradient-to-br from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-2 pt-20 sm:pt-0 sm:px-4">

                <div className='px-8 sm:px-0'>
                    {/* <TitleBar name="I've worked on" sNo="03." /> */}
                </div>

                <div className="flex flex-wrap justify-center mt-10"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-once="true">
                    {skills?.map(({ _id, name, image }) => (
                        <div key={uuidv4()} className="bg-gradient-to-br from-fifth via-bgDark to-fifth m-2 sm:m-3 p-4 w-16 h-20 sm:h-auto sm:w-24 rounded-md flex flex-col items-center justify-start gap-2 shadow-xl hover:scale-110 hover:shadow-[#000000] hover:shadow-2xl duration-300">
                            <Image src={urlFor(image).url()} alt={name} />
                            <p className="text-[0.5rem] sm:text-sm text-center">{name}</p>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default SkillSection