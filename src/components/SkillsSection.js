import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const skillCategories = [
    { title: 'Languages', skills: ['Python', 'C/C++', 'C#', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL', 'Ruby', 'Julia', 'Lisp', 'Prolog', 'RISC-V'] },
    { title: 'ML & AI', skills: ['PyTorch', 'TensorFlow', 'LangChain', 'Gemini', 'T5/BERT/GPT', 'Deep Learning', 'Reinforcement Learning', 'NLP', 'Computer Vision', 'Hugging Face'] },
    { title: 'Frameworks', skills: ['React', 'Next.js', 'Flask', 'FastAPI', 'Django', 'Svelte', 'React Native', 'Flutter', 'Node.js', '.NET', 'Rails'] },
    { title: 'Infrastructure', skills: ['AWS', 'GCP', 'Docker', 'Kafka', 'PostgreSQL', 'Supabase', 'Firebase', 'MongoDB', 'Unity', 'Omniverse', 'Unreal Engine'] }
];

function SkillsSection() {
    return (
        <section className='section section--light' aria-label="Skills">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label'>Skills</p>
                </ScrollReveal>
                <div className='skills'>
                    {skillCategories.map((cat, i) => (
                        <ScrollReveal delay={i * 80} key={i}>
                            <div className='skills__group'>
                                <h3 className='skills__title'>{cat.title}</h3>
                                <div className='skills__tags'>
                                    {cat.skills.map((s, j) => (
                                        <span className='skills__tag' key={j}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
