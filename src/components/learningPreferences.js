// src/components/LearningPreferences.js
import React, { useState } from 'react';

const LearningPreferences = () => {    
  const [topics, setTopics] = useState([""]);

  const addTopic = () => {
    setTopics([...topics, ""]);
  };

  const handleTopicChange = (index, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = value;
    setTopics(updatedTopics);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          What Would You Like to Learn Next?
        </h1>
        <div>
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`mb-4 ${index > 0 ? "mt-2" : ""} relative`}
            >
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black focus:border-transparent transition duration-300"
                placeholder={`Topic ${index + 1}`}
                value={topic}
                onChange={(e) => handleTopicChange(index, e.target.value)}
              />
            </div>
          ))}
          <button
            onClick={addTopic}
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-2 rounded-full transition duration-300"
          >
            Add Another Topic
          </button>
        </div>
        <button
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LearningPreferences;
