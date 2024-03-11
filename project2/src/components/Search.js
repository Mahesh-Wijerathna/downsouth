import React, { useEffect, useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from 'react-router-dom';


const Search = () => {
  const [typedText, setTypedText] = useState('');
  const [destinations, setDestinations] = useState([]);
    

  useEffect(() => {
    const originalText = "Find Medical Center Near By You";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= originalText.length) {
        setTypedText(originalText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);


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
    <div className="search-container">
      <div className="srch-text">
        <p>{typedText}</p>
      </div>

           <div className='srchbar'> 
      <input type="text" placeholder="Enter Location"  className="search-input" onChange={handleSearch} />
      {destinations && destinations.length > 0 && <div className="results-list">
        {destinations.map((result, id) => {
        return <div
              className="search-result"
              onClick={(e) => alert(`You selected ${result}!`)}
              >
                  {result}
              </div>  
         
      })}
    </div>}  
        
       
      </div>

      
      
      
        <Link className="search-button " to="/information" >
       
        <div className="search-icon-container">
          <FontAwesomeIcon icon={faSearch}  color="black" />
        </div>
          </Link>
         
        

    </div>
  );
};

export default Search;