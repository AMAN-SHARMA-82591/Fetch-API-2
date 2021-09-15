import React, { useState }  from 'react'
import './App.css';
import Container from './Container';
import Form from './Form';
import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  let [value,setValue] = useState(0);

    function getUserData(data){
      setValue(data);
    }
  return (
    <div className="App">
      {/* Main container */}
      <Switch>
        <Route exact path="/"><Container userData={getUserData} /></Route>
        <Route exact path="/Form"><Form click={value} /></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div> 
    

  );
}

export default App;