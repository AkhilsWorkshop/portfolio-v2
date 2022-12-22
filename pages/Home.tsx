import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import { Projects, Skills } from '../typings'
import SkillSection from './home/SkillSection'
import ProjectSection from './home/ProjectSection'

type Props = {
    skills: Skills[];
    projects: Projects[];
}

const Home = ({ skills, projects }: Props) => {
    console.log("home", skills)
    return (
        <>
            <section id='hero'>
                <Hero />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='projects'>
                <ProjectSection projects={projects} />
            </section>
            <section id='skills'>
                <SkillSection skills={skills} />
            </section>
        </>
    )
}

export default Home