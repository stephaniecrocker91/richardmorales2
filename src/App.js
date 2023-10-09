import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Servicios from './components/Servicios';


function App() {
  return (
    <>
    <NavBar /> 
    <div className={styles.Content}>
      <Routes>
        <Route exact="true" path="/" element= {
        <div>
          <Landing />
        </div>   
      } />
        <Route exact="true" path="/servicios" element= {<Servicios />} />
        <Route exact="true" path="/richardmorales" element= {<Bio />} />
        <Route exact="true" path="/blog" element= {<Blog />} />
        <Route exact="true" path="/contacto" element= {<Contact />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
