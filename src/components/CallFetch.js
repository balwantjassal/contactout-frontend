import React, {  useState, useEffect } from "react";


//This is custom Hook used for fetching data

const CallFetch =  (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
     fetch(url)
    .then((res) => res.json())
    .then((rec) => {
      if (rec.Response === "True") {
        setData(rec.Search);
      } else {
        // Response is false reset data
        setData([]);
      }
      //console.log(rec.Search)
    })
    .catch((err) => console.log(err));

  })
  
  return data;
};

export default React.memo(CallFetch);
