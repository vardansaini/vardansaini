import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const projects = [
    { title: 'Mechanic Maker', desc: 'AI no-code 2D game dev platform. Deep learning + program synthesis. Published at AAAI/AIIDE.', img: 'images/GM.png', tags: ['PyTorch', 'Unity', 'C#'], url: '/vardansaini/projects' },
    { title: 'Inclusify', desc: 'NLP inclusivity analyzer. Sentiment analysis + text classification. Hack The North Winner.', img: 'images/Inclusify.png', tags: ['NLP', 'React', 'Winner'], url: 'https://github.com/Techno-cratz/Inclusify' },
    { title: 'BestPrice', desc: 'Price comparison engine with web scraping. Top 5 at hip,hack[array].', img: 'images/BP.png', tags: ['Web Scraping', 'Top 5'], url: 'https://github.com/Techno-cratz/BestPrice' },
    { title: 'HabitTracker', desc: 'Full-stack Android app. Real-time Firestore sync, social features, data viz.', img: 'images/H-Log.jpg', tags: ['Android', 'Java'], url: 'https://github.com/CMPUT301F21T20/HabitTracker.git' },
    { title: 'Med Assist', desc: 'Cross-platform healthcare app. Flutter + Firebase.', img: 'images/flutter.png', tags: ['Flutter', 'Dart'], url: 'https://github.com/vardansaini/med_assist' },
    { title: 'Study Manager', desc: 'Cross-platform healthcare app. Flutter + Firebase.', img: 'images/flutter.png', tags: ['Flutter', 'Dart'], url: 'https://studies.seniorsplace.ca' },
];

function ProjectsSection() {
    return (
        <section className='section section--light' aria-label="Projects">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label'>Projects</p>
                    <h2 className='section__headline'>Selected work.</h2>
                </ScrollReveal>
                <div className='project-grid'>
                    {projects.map((p, i) => (
                        <ScrollReveal delay={i * 80} key={i}>
                            <a href={p.url} target={p.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className='project-card'>
                                <div className='project-card__img-wrap'>
                                    <img src={p.img} alt={p.title} className='project-card__img' />
                                </div>
                                <div className='project-card__body'>
                                    <h3 className='project-card__title'>{p.title}</h3>
                                    <p className='project-card__desc'>{p.desc}</p>
                                    <div className='project-card__tags'>
                                        {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
                <ScrollReveal>
                    <a href="https://github.com/vardansaini" target="_blank" rel="noopener noreferrer" className='github-cta'>
                        View all 54+ repos on GitHub &rarr;
                    </a>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default ProjectsSection
