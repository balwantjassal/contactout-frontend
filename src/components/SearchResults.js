import React from 'react'
/* 
***********Start****************** 
This component has been created to display the search results of an input string. 
This is a kind of controlled component which renders the search results based on props. It checks whether the items are loaded or not 
and if loaded then a user can add those items/movies to the favourite list for the nominations.It also disable the item which is added to to the favourite list.  

**************Ends ***************
*/
function SearchResults(props) {
    
  let {data, isLoading, favourites, addFavourites, input, error} = props
  
  return (
  
    <>
    <span className="h5">
           {(error)?{error}:<span>{(isLoading)? 'Searching ...':<span>Results for {data.length > 0 && `"${input}"`}</span>}</span>}
          </span>
          <hr />
         
          <ul className="list-group">
            {data &&
              data.map((item) => (
                <li className="list-group-item" key={item.imdbID}>
                  {item.Title} ({item.Year}){" "}
                  <span className="pull-right">
                  
                    <button
                      className={(favourites.filter(c => c.imdbID === item.imdbID).length === 0 )?"btn btn-sm btn-primary":"btn btn-sm btn-secondary"}
                      onClick={() => addFavourites(item)}
                      disabled={
                        (favourites.filter(c => c.imdbID === item.imdbID).length === 0 ) ? "" : "disabled"
                      }
                    >
                      Nominate
                    </button>
                  </span>
                </li>
              ))}
          </ul>
    </>
    )
}


export default React.memo(SearchResults)
