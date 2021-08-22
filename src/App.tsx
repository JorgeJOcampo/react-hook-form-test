import React, { useState } from 'react';
import Form from 'components/MyForm';
import './App.css';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
};

export default App;
