import React, { useState } from 'react'
import Navbar1 from './Navbar.js'
import Form from './Form'
import Alert from './Alert.js';

function App() {

  const [alert,setAlert]=useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000);

  }
  
  const [mode,setMode]=useState('light');
  const [oppmode,oppsetMode]=useState('black');
  const [mode1,setMode1]=useState('light');

  function togglemode(){
    if(mode === 'light'){
      setMode('dark');
      setMode1('#060727');
      document.body.style.backgroundColor="#060727";
      showalert("Dark Mode has been enabled!","success");
    }
    else{
      
      setMode('light');
      setMode1('light');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has been enabled!","success");
    }
      if(mode ==='light'){
        oppsetMode('white');
      }
      else{
        oppsetMode('black');
      
    }
  
  }

  return (
    <>
    
    <Navbar1 title="Saksham" mode={mode} togglemode={togglemode} oppmode={oppmode} alert={alert} showalert={showalert}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Form heading="Enter the text to analayze" oppmode={oppmode} mode={mode} mode1={mode1} alert={alert} showalert={showalert}/>
    </div>
    </>
  );
}


export default App;