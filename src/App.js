import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.min.css';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const FullpageWrapper = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'} // You can leave this for development
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Experience />
          </div>
          {/* 
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Footer />
          </div>
          */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <div className="App">
      <FullpageWrapper />
    </div>
  );
}

export default App;
