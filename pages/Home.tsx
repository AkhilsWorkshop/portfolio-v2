import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import Skills from './home/Skills'


const Home = () => {
    return (
        <>
            <section id='hero' className='snap-center'>
                <Hero />
            </section>
            <section id='about' className='snap-center'>
                <About />
            </section>
            <section id='skills' className='snap-center'>
                <Skills />
            </section>
        </>
    )
}

export default Home