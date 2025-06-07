import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import IndustryLandscape from './components/IndustryLandscape';
import ProgramStructure from './components/ProgramStructure';
import CoreElements from './components/CoreElements';
import Community from './components/Community';
import TrackRecord from './components/TrackRecord';
import HauteVine from './components/HauteVine';
import Application from './components/Application';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Hero />
      <Mission />
      <IndustryLandscape />
      <ProgramStructure />
      <CoreElements />
      <Community />
      <TrackRecord />
      <HauteVine />
      <Application />
      <Footer />
    </div>
  );
}

export default App;