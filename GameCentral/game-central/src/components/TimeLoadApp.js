import { useEffect, useState } from "react";

// Create a timer to load for the page
// 00:00


const TimeLoadApp = () => {
  const calculateTimeLeft = () => {
    let start = new Date();
    let diff = +new Date(start) + +start;
  
    let timeLeft = {};
    if (diff > 0) {
      timeLeft = {
        minutes: Math.floor((diff/1000/60) % 60),
        seconds: Math.floor((diff/1000) % 60),
      }
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000)

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return <div>{`${timeLeft.minutes}:${timeLeft.seconds}`}</div>
}

export default TimeLoadApp;