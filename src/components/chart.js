import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Chart = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const fakeTopics = ['Topic 1', 'Topic 2', 'Topic 3'];


  const handleDateChange = (newDate) => {
    // Handle date change logic
    setDate(newDate);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8">
      {/* Your UI for displaying the calendar */}
      <Calendar onChange={handleDateChange} value={date} />
      {/* Rest of your UI */}
      <ul>
  {fakeTopics.map((topic, index) => (
    <li key={index}>
      <input type="checkbox" /> {topic}
      <div className="dropdown">
        {/* Dropdown content for the menu button */}
        <button className="menu-button">...</button>
        <div className="dropdown-content">
          <p>Need revision</p>
          <p>Done totally</p>
          <p>Didn't understand</p>
        </div>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Chart;
