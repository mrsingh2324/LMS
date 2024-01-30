import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import LearningPrefereces from './components/learningPreferences';
import MainTopicSelection from './components/mainTopicAddition';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <div className="App bg-gray-800 text-white no-scrollbar">
      <Header className="App-header"></Header>
      <div className="App-body w-[95%] mt-5 border mx-auto">
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/learn" element={<MainTopicSelection />}></Route>
        </Routes>
      </div>
      <Footer className="App-footer"></Footer>
    </div>
  );
}

export default App;
