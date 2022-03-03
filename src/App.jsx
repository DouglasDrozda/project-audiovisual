import React from 'react';
import Header from './components/Header';
import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import Schedule from './components/sections/Schedule';
import VideoService from './components/sections/VideoService';
import SectionAboutCompany from './components/sections/SectionAboutCompany';
import SectionIndications from './components/sections/SectionIndications';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <Schedule />
      <VideoService />
      <SectionIndications />
      <SectionAboutCompany />
    </main>
  );
}

export default App;
