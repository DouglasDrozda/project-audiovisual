import React from 'react';
import Header from './components/Header';
import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import Schedule from './components/sections/Schedule';
import SectionAboutCompany from './components/sections/SectionAboutCompany';
import SectionIndications from './components/sections/SectionIndications';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <Schedule />
      <SectionAboutCompany />
      <SectionIndications />
    </main>
  );
}

export default App;
