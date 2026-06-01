import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/GM.png'
              text='Mechanic Maker — AI-powered no-code platform for 2D game development using deep learning, symbolic learning, and program synthesis. Published at AAAI/AIIDE 2020 & 2024. Built with Unity, C#, Python, and PyTorch.'
              label='AI Research — Published'
              path='/vardansaini/projects'
            />
            <CardItem
              src='images/Inclusify.png'
              text='Inclusify — NLP-powered web app that analyzes social media content for inclusivity using sentiment analysis and text classification. Winner at Hack The North.'
              label='Hack The North Winner'
              path="https://github.com/Techno-cratz/Inclusify"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/BP.png'
              text='BestPrice — Intelligent price comparison engine with web scraping and data aggregation pipelines. Top 5 finish at hip,hack[array] hackathon.'
              label='Top 5 Hackathon'
              path="https://github.com/Techno-cratz/BestPrice"
            />
            <CardItem
              src='images/H-Log.jpg'
              text='HabitTracker — Full-stack Android app with real-time Firestore sync, social following features, and data visualization for habit tracking and analytics.'
              label='Android / Java'
              path="https://github.com/CMPUT301F21T20/HabitTracker.git"
            />
            <CardItem
              src='images/flutter.png'
              text='Med Assist — Cross-platform healthcare application built with Flutter and Firebase, providing medical assistance and appointment management for patients.'
              label='Flutter / Dart'
              path="https://github.com/vardansaini/med_assist"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/GH.png'
              text='More on GitHub — fMRI image reconstruction with diffusion models, GPT-powered chatbots with NL2SQL, emotion detection via CV, text summarization with BART/T5, and 50+ more repos.'
              label='GitHub'
              path='https://github.com/vardansaini'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
