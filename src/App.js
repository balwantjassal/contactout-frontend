import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchPanel from "./components/SearchPanel";
/* 
***********Documentaion Start****************** 
This is the main application component which renders the Search panel to the end user.
Here Search panel has been designed to have n nominations. 
In this case total nominations has been set to 5.   
**************Documentation Ends ***************
*/
function App() {
  return (
    <>
      <div className="container-fluid p-4 bg-light">
        <div className="container bg-white p-4">
          {/*This is the search panel for five nominations. If you want to have more nominations then simply change the totalNominations props of search panel*/}
          <SearchPanel totalNominations="5" />
        </div>
      </div>
    </>
  );
}

export default App;
