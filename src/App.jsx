import React from 'react';
import Header from './components/Header';

import SectionSudiovisualMarket from './components/sections/SectionSudiovisualMarket';
import StartYourPodcast from './components/sections/StartYourPodcast';
import SectionAboutCompany from './components/sections/SectionAboutCompany';
import SectionIndications from './components/sections/SectionIndications';

function App() {
  return (
    <main>
      <Header />
      <SectionSudiovisualMarket />
      <StartYourPodcast />
      <SectionAboutCompany />
      <SectionIndications />
    </main>
  );
}

export default App;
