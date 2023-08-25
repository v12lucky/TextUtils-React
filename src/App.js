// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App(props) {

  const toggleMode1 = () => {
    if (mode === 'secondary') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setBtnColor('primary');
      document.title = 'TextTutils - BlueDark'
    }
    else {
      setMode('secondary')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBtnColor('primary');
      document.title = 'TextTutils - Home'
    }
  }
  const toggleMode2 = () => {
    if (mode === 'secondary') {
      setMode('dark')
      document.body.style.backgroundColor = '#093320';
      showAlert("Dark mode has been enabled", "success");
      setBtnColor('success');
      document.title = 'TextTutils - GreenDark'
    }
    else {
      setMode('secondary')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBtnColor('primary');
      document.title = 'TextTutils - Home'
    }
  }
  const toggleMode3 = () => {
    if (mode === 'secondary') {
      setMode('dark')
      document.body.style.backgroundColor = '#470d13';
      showAlert("Dark mode has been enabled", "success");
      setBtnColor('danger');
      document.title = 'TextTutils - RedDark'
    }
    else {
      setMode('secondary')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBtnColor('primary');
      document.title = 'TextTutils - Home'
    }
  }
  const toggleMode4 = () => {
    if (mode === 'secondary') {
      setMode('dark')
      document.body.style.backgroundColor = '#574511';
      showAlert("Dark mode has been enabled", "success");
      setBtnColor('warning');
      document.title = 'TextTutils - YellowDark'
    }
    else {
      setMode('secondary')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setBtnColor('primary');
      document.title = 'TextTutils - Home'
    }
  }

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('secondary')
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState('primary')

  return (
    <>
      {/* <Main> */}
      {/* <Navbar title="TextUtils" about="About" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm showAlert={showAlert} btnColor={btnColor} heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
        {/* <Routes> */}
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert} btnColor={btnColor} heading="Enter the text to analyze below" mode={mode} />}/> */}
          {/* <Route exact path='/about' element={<About/>}/> */}
        {/* </Routes> */}
      </div>
      {/* </Main> */}
    </>
  );
}

export default App;
