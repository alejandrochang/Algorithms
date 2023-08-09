// Design a calendar
import { useState } from 'react';
import '../App.css';



const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const calendar = [days];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oct', 'November', 'December'];

let temp = [];
for (let i = 0; i < 31; i++) {
  if (temp.length === 7) {
    calendar.push(temp);
    temp = [];
  }

  temp.push(i);
}

const Calendar = () => {
  const [currMonths, setMonths] = useState(months);
  let [currIdx, setCurrIdx] = useState(7);
  const handleLeftMonthChange = () => {
    let idx = currIdx -= 1;
    if (idx < 0) idx = months.length - 1;
    setCurrIdx(idx);
  };

  const handleRightMonthChange = () => {
    let idx = currIdx += 1;
    if (idx >= months.length) idx = 0;
    setCurrIdx(idx);
  };

  const handleDayClick = () => {};
  const month = currMonths[currIdx];
  const Week = ({ week }) => <div className='week'>{week.map((day) => <div key={day} onClick={handleDayClick} className='day'>{day}</div>)}</div>;

  return (
    <div className='outer-container'>
      <div className='calendar'>
        <div className='month'>
          <div onClick={handleLeftMonthChange}>{"<"}</div>
          <h4>{month} 2023</h4>
          <div onClick={handleRightMonthChange}>{">"}</div>
        </div>
        {calendar.map((week) => {
          return <Week key={week} week={week}/>
        })}
      </div>
    </div>
  )
}

export default Calendar;