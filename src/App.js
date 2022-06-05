import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [tops, settops] = useState([]);

  const addTopics = () => {
    // const mytopics = prompt('ENter Name', 'ENter Tpics');
    const mytopics = 'Radhe';
    settops([...tops, mytopics]);
  };
  return (
    <div>
      <button onClick={addTopics}>clic me</button>
      <h1>Topics {tops?.length}</h1>
      {tops?.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
