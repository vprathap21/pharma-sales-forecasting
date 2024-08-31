import { useState, useEffect } from 'react';

export default function Predictions() {
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Flask backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();
        console.log('Data:', data);
        setPredictions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Predictions</h1>
      {predictions ? (
        <ul>
          {Object.keys(predictions).map((drug) => (
            <li key={drug}>
              <strong>{drug}:</strong> {predictions[drug]}
            </li>
          ))}
        </ul>
      ) : (
        <div>No predictions available</div>
      )}
    </div>
  );
}
