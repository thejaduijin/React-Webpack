import React from 'react';
import "./styles.css";
import BOMB from "../public/ultra_bomb.png";
import { Counter } from "./Counter"

function App() {
  return (
    <>
      <h1>Hi I'm React Webpack - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={BOMB} alt="logo" width="300" height="200" />
      <Counter/>
    </>
  )
}

export default App;
