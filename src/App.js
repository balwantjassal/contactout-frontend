import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <div className="container-fluid p-4 bg-light">
        <div className="container bg-white p-4">
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export default App;
