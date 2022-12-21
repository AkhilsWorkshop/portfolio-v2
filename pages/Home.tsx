import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import { Skills } from '../typings'
import SkillSection from './home/SkillSection'

type Props = {
    skills: Skills[];
}

const Home = ({ skills }: Props) => {
    return (
        <>
            <section id='hero' className='snap-center'>
                <Hero />
            </section>
            <section id='about' className='snap-center'>
                <About />
            </section>
            <section id='skills' className='snap-center'>
                <SkillSection skills={skills} />
            </section>
        </>
    )
}

export default Home