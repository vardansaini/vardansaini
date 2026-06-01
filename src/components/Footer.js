import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer' role="contentinfo">
            <div className='footer__inner'>
                <p className='footer__copy'>&copy; 2025 Vardan Saini</p>
                <nav className='footer__links' aria-label="Footer links">
                    <a href="https://www.linkedin.com/in/vardansaini/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/vardansaini" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://scholar.google.ca/citations?hl=en&user=NLZ4_BgAAAAJ" target="_blank" rel="noopener noreferrer">Scholar</a>
                    <a href="https://twitter.com/vardan_saini" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="mailto:vardan1@ualberta.ca">Email</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
