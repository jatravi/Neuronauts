import React, { useState } from 'react';
import './style.css';
const Symptoms = () => {
  const [symptomResult, setSymptomResult] = useState('');

  const submitSymptom = async () => {
    const symptom = document.getElementById('symptomInput').value;
    const res = await fetch('/api/symptom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symptom })
    });
    const data = await res.json();
    setSymptomResult(data.result);
  };

  return (
    <div className="card">
      <h2>Symptom Checker</h2>
      <input type="text" id="symptomInput" placeholder="Enter symptoms" />
      <button onClick={submitSymptom}>Predict</button>
      <p>{symptomResult}</p>
    </div>
  );
};

export default Symptoms;
