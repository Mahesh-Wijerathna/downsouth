// dependencies
import React from 'react';
import axios from "axios";


// local imports
import NavBar from "../components/NavBar";


const Home = () => {
  
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <NavBar />
      <br />
      <h1> navigation bar here</h1>
      <br />
      <h1>Search bar </h1>
      <br />

      <h1>footer here</h1>
      <button
      onClick = { async () => {
        console.log("Button clicked");
        const res = await axios.get("http://192.168.56.1:4000/");
        console.log(res);
      }}
      >
        

        
        Click me</button>


    </div>
  );
};

export default Home;