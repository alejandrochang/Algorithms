import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [medicationData, setMedicationData] = useState('');

  useEffect(() => {
    async function fetchMedicationData() {
      const URL = 'https://api.fda.gov/drug/label.json?search=openfda.pharm_class_epc:%22Thiazide%20Diuretic%22&limit=100';
      const response = await fetch(URL);
      const data = await response.json();
      setMedicationData(data);
    }

    fetchMedicationData();
  }, [])


  const res = medicationData.results;
  if (!res) return <div>Loading Data</div>
  return (
    <div className="App">
      <h1>Medication</h1>
        {
          res.map(({ id, package_label_principal_display_panel }) => {
            return (
              <div className="container">
                <ol>
                  <li>ID: {id}</li>
                  <li>Package Label: {package_label_principal_display_panel}</li>
                </ol>
              </div>
            )
          })
        }
    </div>
  );
}

export default App;
