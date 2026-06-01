import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const experiences = [
    { role: 'Machine Learning Engineer', company: 'H10AI', period: 'Aug 2025 — Present', desc: 'Generative AI design platform with LangChain, Gemini, Next.js. Designs 5x faster.', tags: ['LangChain', 'Gemini', 'Next.js', 'Supabase'] },
    { role: 'Software Engineer', company: 'University of Alberta', period: 'Feb 2024 — Present', desc: 'Healthcare systems for Alzheimer\'s detection with Dr. Stroulia. Real-time Kafka pipeline at 99% efficiency. SSO architecture. 6 web projects.', tags: ['Kafka', 'FastAPI', 'Unity', 'WebSockets'] },
    { role: 'Student Developer', company: 'Amii (WILO)', period: 'Oct 2023 — Feb 2024', desc: 'AI course visualizations with D3.js. LLM workshop at HackED 2024. Cybersecurity ML validation.', tags: ['D3.js', 'LLMs', 'Deep Learning'] },
    { role: 'Research Assistant', company: 'GRAIL Lab, UAlberta', period: 'Oct 2019 — Present', desc: 'Published at AIIDE 2020 & 2024. Custom T5 LLM. Benchmarked BERT, RoBERTa, GPT. MLP/GRU/LSTM/CNN models for game AI.', tags: ['PyTorch', 'Unity', 'C#', 'T5', 'BERT'] },
    { role: 'GSoC 2023', company: 'Google / MetaBrainz', period: 'May — Sep 2023', desc: 'Integrated Apple Music with ListenBrainz. Python metadata resolver. TypeScript + React + Flask.', tags: ['TypeScript', 'React', 'Flask'] },
    { role: 'Junior Software Developer', company: 'Hole School, UAlberta', period: 'Jan — Aug 2023', desc: 'TensorFlow ML model for microtunneling. Omniverse + Unreal Engine simulation. PowerBI dashboards.', tags: ['TensorFlow', 'Omniverse', 'Unreal'] },
    { role: 'Full Stack Developer', company: 'Wayfinders Co-op', period: 'Dec 2022 — Feb 2023', desc: 'Complete React + TypeScript frontend with auth, forums, booking. Django backend APIs.', tags: ['React', 'TypeScript', 'Django'] },
    { role: 'Software Engineer Intern', company: 'Roam', period: 'Jan — May 2022', desc: 'Segment analytics integration. React Native + PostgreSQL features. Svelte admin portal. Ruby on Rails backend.', tags: ['Next.js', 'React Native', 'Svelte'] },
];

function ExperienceSection() {
    return (
        <section className='section section--dark' aria-label="Experience">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label section__label--light'>Experience</p>
                    <h2 className='section__headline section__headline--light'>
                        8 roles across research, startups, open&nbsp;source &amp; industry.
                    </h2>
                </ScrollReveal>
                <div className='exp-list'>
                    {experiences.map((exp, i) => (
                        <ScrollReveal delay={i * 50} key={i}>
                            <div className='exp-item'>
                                <div className='exp-item__left'>
                                    <span className='exp-item__period'>{exp.period}</span>
                                </div>
                                <div className='exp-item__right'>
                                    <h3 className='exp-item__role'>{exp.role}</h3>
                                    <p className='exp-item__company'>{exp.company}</p>
                                    <p className='exp-item__desc'>{exp.desc}</p>
                                    <div className='exp-item__tags'>
                                        {exp.tags.map((t, j) => <span key={j} className='exp-item__tag'>{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
