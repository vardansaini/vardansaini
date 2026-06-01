import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

function AboutSection() {
    return (
        <section className='section section--light' aria-label="About">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label'>About</p>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <h2 className='section__headline'>
                        Software engineer with a passion for building scalable systems and AI-driven applications across research, gaming, and real-time environments.
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <p className='section__body'>
                        Currently engineering healthcare systems at the University of Alberta with Dr. Eleni Stroulia, and building Generative AI design platforms at H10AI with LangChain and Google Gemini. My research at the GRAIL Lab with Dr. Matthew Guzdial has produced 3 peer-reviewed publications at AAAI/AIIDE and ACM ICER.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <div className='stats-row'>
                        <div className='stat'>
                            <span className='stat__number'>3</span>
                            <span className='stat__label'>Publications</span>
                        </div>
                        <div className='stat'>
                            <span className='stat__number'>6+</span>
                            <span className='stat__label'>Roles</span>
                        </div>
                        <div className='stat'>
                            <span className='stat__number'>3.8</span>
                            <span className='stat__label'>GPA</span>
                        </div>
                        <div className='stat'>
                            <span className='stat__number'>2+</span>
                            <span className='stat__label'>Hackathon Wins</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default AboutSection
