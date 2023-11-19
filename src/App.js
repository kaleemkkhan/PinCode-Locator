import React from 'react';
import './App.css';
import LocationContainer from './LocationContainer';
import WorldMap from './components/WorldMap';
import StarsEffect from './components/StarsEffect';


const App = () => {
  return (
    <div className="App">
    <div className='app-top'>
      <StarsEffect/>
    </div>
    <div className="app-container">
    <h1>Postal Location Finder</h1>
        <WorldMap />
        <LocationContainer />
      </div>
    </div>
  );
};

export default App;

