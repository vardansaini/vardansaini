import React from 'react'
import './HeroSection.css'
import ScrollReveal from './ScrollReveal'

const companies = [
    { name: 'University of Alberta', logo: 'https://logo.clearbit.com/ualberta.ca', url: 'https://www.ualberta.ca/' },
    { name: 'Google Summer of Code', logo: 'https://logo.clearbit.com/google.com', url: 'https://summerofcode.withgoogle.com/' },
    { name: 'Amii', logo: 'https://logo.clearbit.com/amii.ca', url: 'https://www.amii.ca/' },
    { name: 'MetaBrainz', logo: 'https://logo.clearbit.com/metabrainz.org', url: 'https://metabrainz.org/' },
    { name: 'H10AI', logo: null, url: null },
    { name: 'Roam', logo: 'https://logo.clearbit.com/ro.am', url: null },
    { name: 'RideZy', logo: null, url: 'https://www.ride-ezy.ca/' },
    { name: 'Wayfinders', logo: null, url: null },
];

const professors = [
    { name: 'Dr. Eleni Stroulia', role: 'Professor, University of Alberta', focus: 'Healthcare Systems & Alzheimer\'s', url: 'https://apps.ualberta.ca/directory/person/stroulia' },
    { name: 'Dr. Matthew Guzdial', role: 'Professor, University of Alberta', focus: 'Game AI & Co-Creation', url: 'https://guzdial.com/' },
    { name: 'Dr. Ildar Akhmetov', role: 'Professor, University of Alberta', focus: 'Software Engineering', url: 'https://guzdial.com/' },
    { name: 'Dr. Russ Grainer', role: 'Professor, University of Alberta', focus: 'Brain AI', url: 'https://guzdial.com/' }
];

function AssociationsSection() {
    return (
        <section className='section section--dark' aria-label="Collaborations">
            <div className='section__inner'>
                <ScrollReveal>
                    <p className='section__label section__label--light'>Collaborated With</p>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <div className='logo-wall'>
                        {companies.map((company, i) => {
                            const content = (
                                <div className='logo-wall__item' key={i}>
                                    {company.logo ? (
                                        <img src={company.logo} alt={company.name} className='logo-wall__img'
                                             onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                                    ) : null}
                                    <span className='logo-wall__text' style={company.logo ? {display:'none'} : {display:'flex'}}>
                                        {company.name}
                                    </span>
                                </div>
                            );
                            return company.url ? (
                                <a href={company.url} key={i} target="_blank" rel="noopener noreferrer" className='logo-wall__link'>{content}</a>
                            ) : content;
                        })}
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <div className='advisors'>
                        <p className='advisors__label'>Research Advisors</p>
                        <div className='advisors__grid'>
                            {professors.map((prof, i) => (
                                <a href={prof.url} key={i} target="_blank" rel="noopener noreferrer" className='advisor-card'>
                                    <div className='advisor-card__avatar'>{prof.name.split(' ').pop()[0]}</div>
                                    <div>
                                        <p className='advisor-card__name'>{prof.name}</p>
                                        <p className='advisor-card__role'>{prof.role}</p>
                                        <p className='advisor-card__focus'>{prof.focus}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default AssociationsSection
