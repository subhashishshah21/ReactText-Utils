import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import  Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';



function App() {
  const [mode,setMode]= useState('light');
  const [alert,setalert]=useState(null);
  const toggleDark= () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success")
    }
  }
  const toggleGreen= () => {
    if(mode==='light' || mode==='dark'){
      setMode('success');
      document.body.style.backgroundColor="#42ba96";
      showAlert("Green Mode has been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success")
    }
  }
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <div>
      <Navbar mode={mode} toggleDark={toggleDark} toggleGreen={toggleGreen} />
      <Alert alert={alert} />
      <Textform mode={mode} />
    </div>
  );
}

export default App;
