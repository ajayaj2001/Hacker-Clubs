import React from 'react';
import Header from './header/Header';
import './App.css';
import Section1Home from './home/Section1Home';
import SectionExplore from './explore/Explore';
import Create from './create/Create';
import Share from './share/Share';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Section1Home />
      <SectionExplore />
      <Create />
      <Share />
      <Footer />
    </div>
  );
}

export default App;
