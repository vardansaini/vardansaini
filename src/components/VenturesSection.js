import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const ventures = [
    { name: 'RideZy', status: 'Live', url: 'https://www.ride-ezy.ca/', tagline: 'AI-powered car marketplace for Canada. Valuation tools, verified users, secure transactions.', tags: ['AI/ML', 'Next.js', 'Live'], year: '2024' },
    { name: 'UniOne', status: 'Co-founded', url: null, tagline: 'Gamified platform connecting university students in real-time. Solving social isolation on campus.', tags: ['EdTech', 'Gamification'], year: '2022' },
    { name: 'Computer Creations', status: 'Origin Story', url: null, tagline: 'Built an Android app for Mount Carmel School in India at age 15 with Kartik Ohri.', tags: ['Android', 'Java'], year: '2016' },
];

function VenturesSection() {
    return (
        <section className='section section--light' aria-label="Ventures">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label'>Ventures</p>
                    <h2 className='section__headline'>Zero to one.</h2>
                </ScrollReveal>
                <div className='ventures-list'>
                    {ventures.map((v, i) => (
                        <ScrollReveal delay={i * 100} key={i}>
                            {v.url ? (
                                <a href={v.url} target="_blank" rel="noopener noreferrer" className='venture-row-link'>
                                    <VentureRow v={v} />
                                </a>
                            ) : (
                                <VentureRow v={v} />
                            )}
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

function VentureRow({ v }) {
    return (
        <div className='venture-row'>
            <div className='venture-row__left'>
                <h3 className='venture-row__name'>
                    {v.name}
                    {v.url && <span className='venture-row__arrow'>&rarr;</span>}
                </h3>
                <span className={`venture-row__status ${v.status === 'Live' ? 'venture-row__status--live' : ''}`}>
                    {v.status === 'Live' && <span className='dot-live' />}
                    {v.status} &middot; {v.year}
                </span>
            </div>
            <div className='venture-row__right'>
                <p className='venture-row__desc'>{v.tagline}</p>
                <div className='venture-row__tags'>
                    {v.tags.map((t, j) => <span key={j} className='venture-row__tag'>{t}</span>)}
                </div>
            </div>
        </div>
    )
}

export default VenturesSection
