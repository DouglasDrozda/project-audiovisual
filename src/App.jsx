import React from 'react';
import Header from './components/Header';

import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import SectionAboutCompany from './components/sections/SectionAboutCompany';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <SectionAboutCompany />
    </main>
  );
}

export default App;
