import React, { useEffect, useState } from 'react';
import '../style.css'
const Emotion = () => {
  const [emotion, setEmotion] = useState("Detecting...");

  useEffect(() => {
    const fetchEmotion = async () => {
      const features = [0.5, 0.2, 0.1]; // Dummy features for now
      const res = await fetch("/api/predict_emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features })
      });
      const data = await res.json();
      setEmotion(data.emotion || "Error in detecting emotion");
    };

    fetchEmotion();
  }, []);

  return (
    <div className="card">
      <h2>Emotion Prediction</h2>
      <p>{emotion}</p>
    </div>
  );
};

export default Emotion;
