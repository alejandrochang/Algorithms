import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip content="Hello World this is contnet" direction="" />
      <Tooltip content="anothe one">
        <span className="example-emoji" role="img" aria-label="cowboy emoji">
          🤠
        </span>
      </Tooltip>
    </div>
  );
}

export default App;



/*
  Tooltip:
   - reusable
   - extend to all directions with content
   - properties: children - content, direction
   - pass children down as the onMouseEnter, onMouseLeave
*/