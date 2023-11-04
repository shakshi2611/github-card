import { useState } from "react";
import './App.css';
import Cardlist from './components/Cardlist';
import Form from "./components/Form";

function App() {
  const [Profiles,setProfiles]=useState([]);
  function addprofile(profiledata) {
    setProfiles([...Profiles, profiledata]);
  }
  return (
    <div className="App">
      <h1> Git Hub App</h1>
      <Form onSubmit={addprofile}/>
      <Cardlist profiles={Profiles}/>
    </div>
  );
}

export default App;



