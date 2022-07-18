import React, { useState, useEffect } from "react";

/* 
***********Documentaion Start****************** 
A memorised message component has been created to display falsh messages in the project.  
**************Documentation Ends ***************
*/

function Message(props) {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    setMsg(props.detail);
  }, [props]);

  return (
    <>
      {msg && " " && (
        <span className="bg-danger opacity-75 rounded text-white p-1">{msg}</span>
      )}
    </>
  );
}

export default React.memo(Message);
