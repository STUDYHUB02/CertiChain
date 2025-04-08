// src/pages/Home.jsx

import React from 'react';

const Home = () => {
  return (
    <div className="home container">
      <h1>Welcome to CertiChain</h1>
      <p>
        CertiChain is a blockchain-based certificate verification system that allows organizations to issue and validate certificates securely. Certificates are stored in a structured format within smart contracts and can only be added by authorized certifiers. End users can retrieve all their certificates or share a certificate hash with employers for verification via the frontend.
      </p>
      {/* Other homepage components/elements can go here */}
    </div>
  );
};

export default Home;
