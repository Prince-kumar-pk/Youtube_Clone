import React from 'react';
import './App.css';


import {AppContext} from "./context/ContextApi"

function App() {
  return (

    <AppContext>
      <div className="text-3xl"> App</div>
    </AppContext>

  );
}

export default App;
