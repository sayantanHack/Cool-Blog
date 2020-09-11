import React from 'react';
import './App.css';
import Appbar from "./components/Appbar";
import BlogBox from "./components/BlogBox";

function App() {
  return (
    <div className="App">
      <Appbar/>
      <h1>
        Welcome Cool Blog site !!
      </h1>
      <BlogBox />
    </div>
  );
}

export default App;
