import React from 'react';
import './App.css';
import BackgroundParts from './components/particles';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import AboutMe from './components/aboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <BackgroundParts />
      <NavBar />
      <Layout>
        <AboutMe />
      </Layout>
      <Layout>
        <Technologies />
      </Layout>
      <Layout>
        <Projects />
      </Layout>
      <br />
      <Layout>
        <Contact />
      </Layout>
    </div>
  );
}
