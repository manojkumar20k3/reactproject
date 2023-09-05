import React from 'react';
import "./App.css"
import Barchart from "./components/bar";
import WordTree from './components/word';
const App = () => {
  return (
    <div>
      <Barchart/>
      <WordTree/>
    </div>
  )
}

export default App;