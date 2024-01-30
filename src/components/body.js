import React, { useState } from 'react';
import LearningPreferences from './learningPreferences';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [showPreferences, setShowPreferences] = useState(false);
    const navigate = useNavigate(); // Use useNavigate for navigation

    const openPreferences = () => {
        setShowPreferences(true);
    };

    const closePreferences = () => {
        setShowPreferences(false);
    };

    const navigateToLearningPreferences = () => {
        navigate('/learn'); // Use navigate to navigate to the Learning Preferences page
    };

    return (
        <div className="bg-gray-100">
            {/* Main Content Container */}
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Top Section */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-5">
                        <h1 className="text-white text-3xl font-semibold">
                            Learn and Practice Coding
                        </h1>
                        <p className="text-white mt-2">
                            Master programming skills with interactive coding challenges.
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex justify-center p-4">
                        {/* Button to View Added Projects */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full mr-4">
                            View Added Projects
                        </button>
                        {/* Button to Open Learning Preferences */}
                        <button
                            onClick={navigateToLearningPreferences}
                            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full"
                        >
                            Open Learning Preferences
                        </button>
                    </div>

                    {/* Conditionally render Learning Preferences */}
                    {showPreferences ? (
                        <div className="p-4 sm:p-5">
                            <LearningPreferences closePreferences={closePreferences} />
                        </div>
                    ) : (
                        /* Featured Content */
                        <div className="p-4 sm:p-5">
                            <h2 className="text-xl font-semibold">Featured Challenges</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                {/* Featured Challenge Cards */}
                                <div className="bg-white border border-gray-200 rounded-md p-4 sm:p-5 shadow-sm">
                                    {/* Challenge Title */}
                                    <h3 className="text-lg font-medium">Problem Title 1</h3>
                                    {/* Challenge Description */}
                                    <p className="text-gray-500 mt-2">
                                        Description of the challenge goes here. Keep it concise.
                                    </p>
                                    {/* Start Button */}
                                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full">
                                        Start
                                    </button>
                                </div>
                                {/* Additional Challenge Cards */}
                                {/* Repeat this block for additional challenges */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;
