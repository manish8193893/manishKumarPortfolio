import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Project from '../Components/Project'
import Skills from '../Components/Skills'
import ScrollToTop from '../Components/ScrollToTop'

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Project/>
            <ScrollToTop />
        </>
    )
}
