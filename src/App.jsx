import React from 'react';
import Header from './components/Header';
import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import Schedule from './components/sections/Schedule';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <Schedule />
    </main>
  );
}

export default App;
