// CompletionDate.js
import React, { useState } from 'react';

const CompletionDate = ({ mainTopic, subtopics, onComplete }) => {
  const [completionDate, setCompletionDate] = useState('');

  const handleComplete = () => {
    if (completionDate.trim() === '') {
      alert('Please select a completion date.');
      return;
    }
    onComplete(mainTopic, subtopics, completionDate);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8">
      {/* Your UI for setting completion date */}
      <h1>Completion Date Selection</h1>
      <h2>Main Topic: {mainTopic}</h2>
      <h2>Subtopics: {subtopics.join(', ')}</h2>
      <input
        type="date"
        value={completionDate}
        onChange={(e) => setCompletionDate(e.target.value)}
      />
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
};

export default CompletionDate;
