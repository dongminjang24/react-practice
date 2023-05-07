import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './components/StyledComponent';
import TailwindComponent from './components/TailwindComponent';
import { useState } from 'react';


function App() {
  return (
    <div>
        <Button1/>
        <Button2/>
        <StyledComponent/>
        <TailwindComponent/>
    </div>
  );
}

export default App;
