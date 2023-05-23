import React from 'react';
import './App.css';
import InputField from './components/InputField';

// As App is a functional component so declare App as type called FC of React
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
