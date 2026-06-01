import React, { useState, useEffect } from 'react'
import './HeroSection.css'
import VS from './images/VS_new.jpg'
import ScrollReveal from './ScrollReveal'

const titles = ['Software Engineer', 'ML Engineer', 'AI Researcher', 'Published Author'];

function ProfileSection() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setTitleIndex((prev) => (prev + 1) % titles.length);
                setFade(true);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className='hero' role="banner" itemScope itemType="https://schema.org/Person">
            <div className='hero__inner'>
                <ScrollReveal>
                    <div className='hero__image-wrap'>
                        <img className='hero__image' src={VS} alt='Vardan Saini' itemProp="image" />
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <h1 className='hero__name' itemProp="name">Vardan Saini</h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <p className={`hero__title ${fade ? 'fade-in' : 'fade-out'}`} itemProp="jobTitle">
                        {titles[titleIndex]}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <p className='hero__tagline' itemProp="description">
                        Building scalable systems &amp; AI-driven products.<br/>
                        SWE @ UAlberta &middot; ML @ H10AI &middot; GSoC &apos;23 &middot; Dean&apos;s List 3.8
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <nav className='hero__links' aria-label="Social and contact links">
                        <a href="https://www.linkedin.com/in/vardansaini/" target="_blank" rel="noopener noreferrer" itemProp="sameAs">LinkedIn</a>
                        <a href="https://github.com/vardansaini" target="_blank" rel="noopener noreferrer" itemProp="sameAs">GitHub</a>
                        <a href="https://scholar.google.ca/citations?hl=en&user=NLZ4_BgAAAAJ" target="_blank" rel="noopener noreferrer" itemProp="sameAs">Scholar</a>
                        <a href="mailto:vardan1@ualberta.ca" itemProp="email">Email</a>
                    </nav>
                </ScrollReveal>
                <meta itemProp="url" content="https://vardansaini.github.io/vardansaini/" />
            </div>
            <div className='hero__scroll-hint'>
                <span>Scroll</span>
                <div className='hero__scroll-line' />
            </div>
        </header>
    )
}

export default ProfileSection
