import React from "react";

function Favourites(props) {
  const { favourites, removeFavourites, msgComp } = props;

  return (
    <>
      <span className="h5 p-2">
        Nominations {" "}
        <span className="badge bg-primary">{favourites.length} </span>{" "}
        {msgComp && 
          
            <span>{msgComp}</span>
        
        }
      </span>
      <hr />

      <ul className="list-group">
        {favourites &&
          favourites.map((item, idx) => (
            <li className="list-group-item" key={item.imdbID}>
              {idx + 1}. {item.Title} ({item.Year}){" "}
              <span className="pull-right">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFavourites(item)}
                >
                  Remove
                </button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default React.memo(Favourites);
