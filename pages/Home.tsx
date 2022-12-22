import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import { Skills } from '../typings'
import SkillSection from './home/SkillSection'

type Props = {
    skills: Skills[];
}

const Home = ({ skills }: Props) => {
    console.log("home", skills)
    return (
        <>
            <section id='hero'>
                <Hero />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='skills'>
                <SkillSection skills={skills} />
            </section>
        </>
    )
}

export default Home