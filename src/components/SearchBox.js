import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

function SearchBox() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [favourites,setFavourites] = useState([])

  const handleChange = async (e) => {
    setInput(e.target.value);
    console.log(process.env.REACT_MOVIES_URL)
    await fetch(`http://www.omdbapi.com/?apikey=7053e632&s=${e.target.value}`)
      .then((res) => res.json())
      .then((rec) => {
        if (rec.Response === "True") {
          setData(rec.Search);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.log(err));

    //console.log(data)
  };

  const addFavourites = (movie) => {
    if(favourites.length < 5){
        setFavourites([...favourites, movie])
    }
    
  }

  const removeFavourites = (movie) => {
    let newFavourites = [...favourites]
    const idx = newFavourites.indexOf(movie)
    newFavourites.splice(idx,1)
    setFavourites(newFavourites)

  }
  return (
    <>
      <div className="input-group mb-3">
     
        <div className="input-group-prepend">
          <span className="input-group-text p-3" id="basic-addon1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Search By Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
       <span className="h5">Results for {data.length>0 && `"${input}"`}</span>
          <hr />
          <ul className="list-group">
            {data &&
              data.map((item) => (
                <li className="list-group-item" key={item.imdbID}>
                  {item.Title} ({item.Year}) <button className="btn btn-sm btn-primary" onClick={() => addFavourites(item)}>Nominate</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
        <span className="h5">Nominations</span>
          <hr />
          <ul className="list-group">
            {favourites &&
              favourites.map((item) => (
                <li className="list-group-item" key={item.imdbID}>
                  {item.Title} ({item.Year}) <button className="btn btn-sm btn-danger" onClick={() => removeFavourites(item)}>Remove</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default SearchBox;
