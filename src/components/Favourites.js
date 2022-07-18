import React from "react";
/* 
***********Start****************** 
This component has been created to display the list of favourite movies or nomination list created by user. 
Component renders the nomination list and even a user can remove the item from the list. 
There is a banner variable to display the customized messages.
**************Ends ***************
*/
function Favourites(props) {

  const { favourites, removeFavourites, bannerComp } = props;

  return (
    <>
      <span className="h5 p-2">
        Nominations {" "}
        <span className="badge bg-primary">{favourites.length} </span>{" "}
        {bannerComp && 
          
            <span>{bannerComp}</span>
        
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
