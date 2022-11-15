import React from 'react';
import "./styles.css";
import BOMB from "../public/ultra_bomb.png";

function App() {
  return (
    <>
      <h1>React Webpack - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={BOMB} alt="logo" width="300" height="200" />
    </>
  )
}

export default App;
