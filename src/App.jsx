import React from 'react';
import Header from './components/Header';
import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import Schedule from './components/sections/Schedule';
import VideoService from './components/sections/VideoService';
import SectionAboutCompany from './components/sections/SectionAboutCompany';
import Marketplace from './components/sections/Marketplace';
import SectionIndications from './components/sections/SectionIndications';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <Schedule />
      <VideoService />
      <SectionIndications />
      <Marketplace />
      <SectionAboutCompany />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
