import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import InputSearchBox from "./InputSearchBox";
import SearchResults from "./SearchResults";
import Favourites from "./Favourites";

// function InputSearchBox(props) {
//   return (
//     <>
//       <form id="searchFrm" name="searchFrm" onSubmit={props.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="inputTitle">Title</label>
//           <div className="input-group mb-3">
//             <div className="input-group-prepend">
//               <span className="input-group-text p-3" id="basic-addon1">
//                 <i className="fa fa-search" aria-hidden="true"></i>
//               </span>
//             </div>

//             <input
//               type="search"
//               className="form-control"
//               id="title"
//               name="title"
//               placeholder="Search By Title"
//               aria-label="Title"
//               aria-describedby="basic-addon1"
//               value={props.input}
//               onChange={props.handleChange}
//             />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

function SearchBox() {
  const [input, setInput] = useState(""); // This is string to be searched
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch(`http://www.omdbapi.com/?apikey=7053e632&s=${input}`)
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
    console.log("Submitted");
  };

  const handleInputChange = async (e) => {
    setInput(e.target.value);

    //console.log(data)
  };

  const addFavourites = (movie) => {
    //Check if a movie is already in favourite list -1 it does not exist

    const idx = favourites.indexOf(movie);

    if (favourites.length < 5 && idx == -1) {
      setFavourites([...favourites, movie]);
    }
  };

  const removeFavourites = (movie) => {
    let newFavourites = [...favourites];
    const idx = newFavourites.indexOf(movie);
    newFavourites.splice(idx, 1);
    setFavourites(newFavourites);
  };
  return (
    <>
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
          />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
