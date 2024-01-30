// SubtopicAddition.js
import React, { useState } from 'react';

const SubtopicAddition = ({ mainTopic, onNext }) => {
  const [subtopics, setSubtopics] = useState([]);
  const [currentSubtopic, setCurrentSubtopic] = useState('');

  const handleAddSubtopic = () => {
    if (currentSubtopic.trim() === '') {
      alert('Please enter a subtopic.');
      return;
    }
    setSubtopics([...subtopics, currentSubtopic]);
    setCurrentSubtopic('');
  };

  const handleNext = () => {
    if (subtopics.length === 0) {
      alert('Please add at least one subtopic.');
      return;
    }
    onNext(mainTopic, subtopics);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8">
      {/* Your UI for adding subtopics */}
      <h1>Subtopic Addition</h1>
      <h2>Main Topic: {mainTopic}</h2>
      <input
        type="text"
        placeholder="Enter subtopic"
        value={currentSubtopic}
        onChange={(e) => setCurrentSubtopic(e.target.value)}
      />
      <button onClick={handleAddSubtopic}>Add Subtopic</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SubtopicAddition;
