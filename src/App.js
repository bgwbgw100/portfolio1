import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.min.css';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

const FullpageWrapper = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'} // You can leave this for development
    responsiveWidth={768}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Experience />
          </div>
          <div className="section">
            <Skills />
          </div>
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
