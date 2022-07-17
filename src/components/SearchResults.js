import React from 'react'

function SearchResults(props) {
    
  let {data, isLoading, favourites, addFavourites, input} = props
  
  return (
  
    <>
    <span className="h5">
            {(isLoading)? 'Searching ...':<span>Results for {data.length > 0 && `"${input}"`}</span>}
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
