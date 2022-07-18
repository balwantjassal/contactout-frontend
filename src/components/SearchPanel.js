import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import InputSearchBox from "./InputSearchBox";
import SearchResults from "./SearchResults";
import Favourites from "./Favourites";
import Message from "./Message";

/* *************Project Description Starts***************/
/*This SearchPanel component is the parent component containing other usefull search panel components listed below..
  1. InputSearchBox (To handle all types of input with actions)
  2. SearchResults (To holds all the search results of the given search string)
  3. Favorites (To hold the list of favourites movies nominated by the user )
  4. Message (This component is created to display banner messages for 5 seconds)
  */
/* *************Project Description Ends ***************/

function SearchPanel({ totalNominations }) {
  const [input, setInput] = useState("") // To hold the value of string to be searched
  const [data, setData] = useState([]) // Results of search query
  const [favourites, setFavourites] = useState([]) // List of favourites movies shortlisted by user
  const [isLoading, setIsLoading] = useState(null) // To see whether data is loaded or not
  const[showMsg, setShowMsg] = useState(null) // to display message to end user 

  // This function handles form submission.
  // It requires OMDB API access key to function properly and this key is mentioned in .env file
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch(`${process.env.REACT_APP_MOVIES_URL}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`)
      .then((res) => res.json())
      .then((rec) => {
        if (rec.Response === "True") {
          setIsLoading(false);
          setData(rec.Search);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.log(err));
   
  };

  // To set the value of input field
  const handleInputChange = async (e) => {
    setInput(e.target.value);

   
  };

  // Function to add favorite movie into the nomination list
  const addFavourites = (movie) => {

    //Check if a movie is already in favourite list -1 it does not exist
    const idx = favourites.indexOf(movie);
    
    // Check favourite list should not exceed total nominations and it should be unique 
    if (favourites.length < totalNominations && idx == -1) {

      setFavourites([...favourites, movie]);
    }
    
    //If nominations list is full then display messages
    if(favourites.length == totalNominations){
      setShowMsg(`Only ${totalNominations} nominations are allowed.`)
      setTimeout(() => {
        setShowMsg(null)
      }, 5000)
    }
    
  };

  // To remove items from favourite list on click of remove button
  const removeFavourites = (movie) => {
    let newFavourites = [...favourites];
    const idx = newFavourites.indexOf(movie);
    newFavourites.splice(idx, 1);
    setFavourites(newFavourites);
  };

  return (
    <>
    <header className="h2 p-3 text-center bg-light">Search and nominate your favourite movie's</header>
    <main>

      <InputSearchBox
        input={input}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <div className="row">
        <div className="col-md-6">
          <SearchResults
            data={data}
            isLoading={isLoading}
            favourites={favourites}
            addFavourites={addFavourites}
            input={input}
          />
        </div>
        <div className="col-md-6">
          <Favourites
            favourites={favourites}
            removeFavourites={removeFavourites}
            bannerComp={(showMsg)?<Message detail={showMsg} />:null}
          />
        </div>
      </div>
      </main>
    </>
  );
}

export default SearchPanel;
