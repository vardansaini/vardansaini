import React from 'react'
import '../../App.css'
import ProfileSection from '../ProfileSection'
import AssociationsSection from '../AssociationsSection'
import ProjectsSection from '../ProjectsSection'
import PublicationSection from '../PublicationSection'
import AboutSection from '../AboutSection'
import SkillsSection from '../SkillsSection'
import ExperienceSection from '../ExperienceSection'
import VenturesSection from '../VenturesSection'
import Footer from '../Footer'

function Home () {
    return(
        <main>
        <div id="Profile"><ProfileSection /></div>
        <div id="Associations"><AssociationsSection /></div>
        <div id="About"><AboutSection /></div>
        <div id="Skills"><SkillsSection /></div>
        <div id="Experience"><ExperienceSection /></div>
        <div id="Ventures"><VenturesSection /></div>
        <div id="Publications"><PublicationSection /></div>
        <div id="Projects"><ProjectsSection /></div>

        <article className="sr-only" aria-label="Vardan Saini — Full Profile for Search Engines">
            <h2>Vardan Saini — Software Engineer & Machine Learning Engineer</h2>
            <p>Vardan Saini is a Software Engineer and Machine Learning Engineer based in Edmonton and Toronto, Canada. He currently works as a Software Engineer at the University of Alberta and as a Machine Learning Engineer at H10AI. He is a Google Summer of Code 2023 alumni, affiliated with the Alberta Machine Intelligence Institute (Amii), and a published AI researcher with papers at AAAI/AIIDE and ACM ICER conferences.</p>
            <h3>Current Positions</h3>
            <ul>
                <li>Software Engineer at University of Alberta (February 2024 – Present) — Collaborating with Dr. Eleni Stroulia on seniors healthcare and early detection of Alzheimer's and Dementia.</li>
                <li>Machine Learning Engineer at H10AI (August 2025 – Present) — Designing Generative AI design platforms using LangChain, Google Gemini, Next.js, and Supabase.</li>
                <li>Research Assistant at GRAIL Lab, University of Alberta (October 2019 – Present) — Published papers with Dr. Matthew Guzdial.</li>
            </ul>
            <h3>Skills</h3>
            <p>Python, C++, C#, JavaScript, TypeScript, Java, SQL, Ruby, Julia, PyTorch, TensorFlow, LangChain, React, Next.js, Flask, FastAPI, Django, Unity, AWS, GCP, Docker, Kubernetes, Kafka, PostgreSQL, MongoDB, Firebase, Deep Learning, Reinforcement Learning, NLP, Computer Vision, LLMs.</p>
            <h3>Education</h3>
            <p>University of Alberta — B.Sc. Computer Science with Specialization & Certificate in Innovation and Entrepreneurship (2019-2024). Dean's Honor Roll, GPA 3.8.</p>
            <p>Contact: vardan1@ualberta.ca | LinkedIn: linkedin.com/in/vardansaini | GitHub: github.com/vardansaini | Location: Edmonton & Toronto, Canada. Open to software engineering, ML engineering, and AI research opportunities.</p>
        </article>

        <Footer />
        </main>
    )
}

export default Home;
