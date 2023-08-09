import { useState, useEffect } from 'react';
import '../App.css';

// Implement stoplight
// Green, Red, yello, grey (Default)
// Auto button - automatically moves buttons

const StopLight = () => {
  const [lights, setLights] = useState([{ state: false, color: 'red'}, { state: false, color: 'yellow'}, { state: false, color: 'green'}]);
  let [autoIdx, setAutoIdx] = useState(0);

  const handleLightChange = (i) => {
    const newLights = lights.map((light, idx) => {
      i === idx ? light.state = true : light.state = false;
      return light;
    });

    setLights(newLights);
  }

  const Light = ({ light, i }) => {
    const { state, color } = light;
    const style = state ? { backgroundColor: color } : {};
    return <div style={style} onClick={() => handleLightChange(i)} className='light'></div>
  };

  const handleAuto = () => {
    const timer = setInterval(() => {
      const newLights = lights.map((l, idx) => {
        autoIdx === idx ? l.state = true : l.state = false;
        return l;
      });

      if (autoIdx >= lights.length) {
        clearInterval(timer);
        setAutoIdx(0);
      } else {
        setAutoIdx(autoIdx += 1);
      }

      setLights(newLights);
    }, 1000);

    return () => clearInterval(timer);
  }

  return <div className="container-l">
    <div className="light-container">
      {lights.map((light,i) => {
        return <Light key={i} light={light} i={i} />
      })}
    </div>
    <button onClick={handleAuto}>
      Auto
    </button>
  </div>;
}


export default StopLight;