import Image from 'next/image'
import React from 'react'
import Title from '../../components/Title';
import { Skills } from '../../utils/interface';

type SkillSectionProps = {
    skills: Skills[];
};



const SkillSection = ({ skills }: SkillSectionProps) => {

    console.log(skills[13]?.CSSProperty)
    return (
        <div className="h-auto sm:h-screen w-full bg-gradient-to-br from-bgDark via-black to-bgDark text-secondary">

            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-2 pt-20 sm:pt-0 sm:px-4">

                <div className='px-8 sm:px-0'>
                    <Title name="I've worked on" sNo="03." />
                </div>

                <div className="flex flex-wrap justify-center mt-10"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-once="true">
                    {skills?.map((eachSkill) => (
                        eachSkill['Status'] === "Show" &&
                        <div key={eachSkill['Name']} className="bg-gradient-to-br from-fifth via-bgDark to-fifth m-2 sm:m-3 p-4 w-16 h-20 sm:h-auto sm:w-20 rounded-md flex flex-col items-center justify-start gap-2 shadow-xl hover:scale-125 hover:shadow-[#000000] hover:shadow-2xl duration-300">

                            <Image src={eachSkill.Images[0].url} alt={eachSkill['Name']} className={`h-full ${eachSkill['CSSProperty']}`} width={100} height={100} />

                            <p className="text-[0.5rem] sm:text-xs text-center">{eachSkill['Name']}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SkillSection