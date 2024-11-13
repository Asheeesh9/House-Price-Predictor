// src/components/PredictorPage.jsx
import React from 'react';
import Predictor from '../components/Predictor.jsx';
import Header from '../components/Header.jsx';

const PredictorPage = () => {
  return (
    <><Header/>
    <div style={styles.page}>
      
      <h2 style={styles.title}>House Price Prediction</h2>
      <Predictor />
    </div>
    </>
  );
};

// Simple styles for the PredictorPage
const styles = {
  page: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default PredictorPage;
