import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const papers = [
    { venue: 'AIIDE 2024', title: 'Mechanic Maker: Accessible Game Development Via Symbolic Learning Program Synthesis', authors: 'M. Sumner, V. Saini, M. Guzdial', url: 'https://arxiv.org/abs/2410.01096' },
    { venue: 'AIIDE 2020', title: 'A Demonstration of Mechanic Maker: An AI for Mechanics Co-Creation', authors: 'V. Saini, M. Guzdial', url: 'https://ojs.aaai.org/index.php/AIIDE/article/view/7450/7349' },
    { venue: 'ICER 2023', title: 'Capstone Course Dashboard: Analyzing Team Dynamics in Software Engineering Education', authors: 'I. Akhmetov, ... V. Saini, C. Wang', url: 'https://dblp.org/db/conf/icer/icer2023-2.html' },
];

function PublicationSection() {
    return (
        <section className='section section--dark' aria-label="Publications">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label section__label--light'>Publications</p>
                    <h2 className='section__headline section__headline--light'>
                        Peer-reviewed at AAAI &amp; ACM.{' '}
                        <a href="https://scholar.google.ca/citations?hl=en&user=NLZ4_BgAAAAJ" target="_blank" rel="noopener noreferrer" className='headline-link'>
                            Scholar &rarr;
                        </a>
                    </h2>
                </ScrollReveal>
                <div className='pub-list'>
                    {papers.map((p, i) => (
                        <ScrollReveal delay={i * 80} key={i}>
                            <a href={p.url} target="_blank" rel="noopener noreferrer" className='pub-row'>
                                <span className='pub-row__venue'>{p.venue}</span>
                                <div className='pub-row__content'>
                                    <h3 className='pub-row__title'>{p.title}</h3>
                                    <p className='pub-row__authors'>{p.authors}</p>
                                </div>
                                <span className='pub-row__arrow'>&rarr;</span>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PublicationSection
