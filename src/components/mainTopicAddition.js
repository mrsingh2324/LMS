import React, { useState } from 'react';

const MainTopicSelection = ({ mainTopic, onNext }) => {
  const [topics, setTopics] = useState([""]);
  const [subtopics, setSubtopics] = useState([]);
  const [currentSubtopic, setCurrentSubtopic] = useState('');
  const [showSubtopicSection, setShowSubtopicSection] = useState(false);

  const addTopic = () => {
    setTopics([...topics, ""]);
  };

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
    setShowSubtopicSection(true);
  };

  const handleTopicChange = (index, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = value;
    setTopics(updatedTopics);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen p-8 flex justify-center items-center">
      {showSubtopicSection ? (
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Add Subtopics
          </h1>
          <h2>Main Topic: {mainTopic}</h2>
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
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black focus:border-transparent transition duration-300"
            placeholder="Subtopic"
            value={currentSubtopic}
            onChange={(e) => setCurrentSubtopic(e.target.value)}
          />
          <button
            onClick={handleAddSubtopic} // Add this button to add subtopics
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-2 rounded-full transition duration-300"
          >
            Add Subtopic
          </button>
          {/* Placeholder for displaying subtopics */}
          <div>
            <h3>Subtopics:</h3>
            <ul>
              {subtopics.map((subtopic, index) => (
                <li key={index}>{subtopic}</li>
              ))}
            </ul>
          </div>
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            What Would You Like to Learn Now?
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
          </div>
          <button
            onClick={handleNext}
            className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MainTopicSelection;
