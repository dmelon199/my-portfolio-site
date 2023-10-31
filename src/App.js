import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import LoadingScreen from './components/LoadingScreen/LoadingScreen';

/* PAGES */
import Projects from './pages/Projects';
import Home from './pages/Home';

/* Design Pages */
import Atlanta from './pages/Atlanta';
import Avondale from './pages/Avondale';
import Carter from './pages/Carter';
import Fredbeans from './pages/Fredbeans';
import Genesis from './pages/Genesis';
import Lamborghini from './pages/Lamborghini';
import Lithia from './pages/Lithia';
import Luther from './pages/Luther';
import SaltLake from './pages/SaltLake';
import Splash from './pages/Splash';
import Sunwise from './pages/Sunwise';
import Ogara from './pages/Ogara';

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2200)
  // }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route exact path="/atlanta" element={<Atlanta />} />
        <Route exact path="/avondale-select" element={<Avondale />} />
        <Route exact path="/carter" element={<Carter />} />
        <Route exact path="/fredbeans" element={<Fredbeans />} />
        <Route exact path="/genesis" element={<Genesis />} />
        <Route exact path="/lamborghini" element={<Lamborghini />} />
        <Route exact path="/lithia" element={<Lithia />} />
        <Route exact path="/luther" element={<Luther />} />
        <Route exact path="/salt-lake-city" element={<SaltLake />} />
        <Route exact path="/splash" element={<Splash />} />
        <Route exact path="/sunwise" element={<Sunwise />} />
        <Route exact path="/ogara-coach" element={<Ogara />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
