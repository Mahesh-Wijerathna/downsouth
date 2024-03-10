// dependencies
import React, { useState } from "react";
import axios from "axios";

// local imports
import NavBar from "../components/NavBar";

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;

    try {
      const response = await axios.get(
        `http://localhost:4003/api/v1/m_center/search_by_destination?destination=${searchTerm}`
      );
      console.log(response);
      console.log(response.data);
      console.log(
        response.data.map((destination) => destination.destination)
      );
      setDestinations(
        response.data.map((destination) => destination.destination)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <NavBar />
      <br />
      <h1> navigation bar here</h1>
      <br />
      <h1>Search bar </h1>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <button>Search</button>
      <br />
      <h1>destinations here</h1>
      <div>
        {destinations.map((destination) => (
          <div key={destination}>{destination}</div>
        ))}
      </div>

      <h1>footer here</h1>
    </div>
  );
};

export default Home;