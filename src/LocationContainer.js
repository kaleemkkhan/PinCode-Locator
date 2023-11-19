import React, { useState } from 'react';
import axios from 'axios';
import PostalCodeForm from './components/PostalCodeForm';
import LocationInfo from './components/LocationInfo';
import './LocationContainer.css';

const LocationContainer = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (postalCode) => {
    setIsLoading(true);
    setError(null);

    // Data input validation
    const regexSpecialChars = /[^a-zA-Z0-9]/;
    const regexAlphabets = /[a-zA-Z]/;

    if (postalCode.match(regexSpecialChars)) {
      setError('No special characters are allowed.');
      setIsLoading(false);
      return;
    }

    

    if (postalCode.match(regexAlphabets)) {
      setError('No alphabet characters are allowed.');
      setIsLoading(false);
      return;
    }

    if (postalCode.length !== 6) {
      setError('Postal code must be exactly 6 digits.');
      setIsLoading(false);
      return;
    }

    axios
      .get(`https://api.zippopotam.us/in/${postalCode}`)
      .then((response) => {
        setLocation(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`API error: ${err.message}`);
        setIsLoading(false);
      });
  };

  const clearLocationInfo = () => {
    setLocation(null);
  };

  return (
    <div className="container">
      <PostalCodeForm onFormSubmit={handleFormSubmit} />
      <LocationInfo
        location={location}
        error={error}
        isLoading={isLoading}
        clearLocationInfo={clearLocationInfo}
      />
    </div>
  );
};

export default LocationContainer;
