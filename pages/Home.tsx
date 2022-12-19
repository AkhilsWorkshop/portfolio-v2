import React from 'react'
import Hero from './home/Hero'
import About from './home/About'


const Home = () => {
    return (
        <>
            <section id='hero' className='snap-center'>
                <Hero />
            </section>
            <section id='about' className='snap-center'>
                <About />
            </section>
        </>
    )
}

export default Home