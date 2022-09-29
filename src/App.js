import React from "react";
import DataLists from "./components/lists/dataLists";
import Loading from "./components/loading/loading";

function App() {
  return (
    <div className="tableContainer">
      <Loading />
      <DataLists />
    </div>
  );
}

export default App;
