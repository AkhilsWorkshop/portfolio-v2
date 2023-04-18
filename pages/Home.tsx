import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import SkillSection from './home/SkillSection'
import ProjectSection from './home/ProjectSection'


const Home = () => {

    return (
        <>
            <section id='hero'>
                <Hero />
            </section>
            <section id='about'>
                <About />
            </section>
            {/* <section id='projects'>
                <ProjectSection projects={projects} />
            </section>
            <section id='skills'>
                <SkillSection skills={skills} />
            </section> */}
        </>
    )
}

export default Home