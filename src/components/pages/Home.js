import React from 'react'
import '../../App.css'
import ProfileSection from '../ProfileSection'
import ProjectsSection from '../ProjectsSection'
import PublicationSection from '../PublicationSection'
import AboutSection from '../AboutSection'
import SlideShow from "../SlideShow";
import Cards from '../Cards'
import Footer from '../Footer'

function Home () {
    return(
        <>
        <a name="Profile"><ProfileSection /></a>
        <a name="SlideShow"><SlideShow /></a>
        <a name="About"><AboutSection /></a>
        <a name="Publications"><PublicationSection /></a>
        <a name="Projects"><ProjectsSection /></a>

        <Footer />

        </>

    )
}


export default Home;
