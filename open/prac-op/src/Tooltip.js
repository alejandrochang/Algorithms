import './App.css';
import React, { useState } from "react";

function App(props) {
  const { content, direction ="bottom", children } = props;
  const [active, setActive] = useState(false);

  const handleMouseEnter= () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(true);
  };

  return (
    <div
      className="ToolTipWrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {active && <div className={`content-box ${direction}`}>{content}</div>}
    </div>
  );
}

export default App;
