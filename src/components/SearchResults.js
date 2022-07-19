import React from "react";
/* 
***********Start****************** 
This component has been created to display the search results of an input string. 
This is a kind of controlled component which renders the search results based on props. It checks whether the items are loaded or not 
and if loaded then a user can add those items/movies to the favourite list for the nominations.It also disable the item which is added to to the favourite list.  

**************Ends ***************
*/

// List item component is for displaying the items of unordered list
function ListItem(props) {
  const { item, favourites, addFavourites } = props;
  return (
    <>
      <li className="list-group-item">
        {item.Title} ({item.Year}){" "}
        <span className="pull-right">
          <button
            className={
              favourites.filter((c) => c.imdbID === item.imdbID).length === 0
                ? "btn btn-sm btn-primary"
                : "btn btn-sm btn-secondary"
            }
            onClick={() => addFavourites(item)}
            disabled={
              favourites.filter((c) => c.imdbID === item.imdbID).length === 0
                ? ""
                : "disabled"
            }
          >
            Nominate
          </button>
        </span>
      </li>
    </>
  );
}

// Component for rendering search results

function SearchResults(props) {
  let { data, isLoading, favourites, addFavourites, input } = props;

  return (
    <>
      <span className="h5">
        
        {isLoading ? (
          "Searching ..."
        ) : (
          <div className="text-truncate col-11">Results for { `"${input}"`}</div>
        )}
      </span>
      <hr />  

      {(data.length>0) ? (
        <ul className="list-group">
          {data &&
            data.map((item) => (
              <ListItem
                key={item.imdbID}
                item={item}
                favourites={favourites}
                addFavourites={addFavourites}
              />
            ))}
        </ul>
      ):<span className='text-danger'>No results found.</span>}
    </>
  );
}

export default React.memo(SearchResults);
