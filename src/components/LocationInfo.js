import React from 'react';
import LoadingAnimation from './LoadingAnimation';
import ErrorAnimation from './ErrorAnimation';
import './LocationInfo.css'

const LocationInfo = ({ location, error, isLoading, clearLocationInfo }) => {
  if (isLoading) {
    return (
      <div id="loading">
      <p>Loading! please wait ...</p>
        <LoadingAnimation />
      </div>
    );
  }

  if (error) {
    return (
      <div id="error">
      {error}
        <div>
          <ErrorAnimation />
        </div>
      </div>
    );
  }

  if (!location) {
    return null;
  }

  return (
    <div id="location-info">
      <h2>Postal Location Information</h2>
      <p className='country'>Country: {location.country}</p>
      <p className='country'>Country Abbreviation: {location['country abbreviation']}</p>
      <div className="place-cards">
        {location.places.map((place, index) => (
          <div key={index} className="place-card">
            <p>Place Name: {place['place name']}</p>
            <p>State: {place.state}</p>
            <p>State Abbreviation: {place['state abbreviation']}</p>
            <p>Longitude: {place.longitude}</p>
            <p>Latitude: {place.latitude}</p>
          </div>
        ))}
      </div>
      <button className="clear-button" onClick={clearLocationInfo}>
        Clear 
      </button>
    </div>
  );
};

export default LocationInfo;

