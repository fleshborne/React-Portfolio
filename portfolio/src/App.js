import React from 'react';
import './App.css';
import BackgroundParts from './components/particles';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import AboutMe from './components/aboutMe';

export default function App() {
  return (
    <div>
      <BackgroundParts />
      <NavBar />
      <Layout>
        <AboutMe />
      </Layout>
    </div>
  );
}
