import React, { useState, useEffect, useCallback } from "react";
import DataLists from "./components/lists/dataLists";
import Loading from "./components/loading/loading";

const dataAmount = 10000;

function App() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLists = async () => {
    const res = await fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=modis_c6_global_7d&q=&rows=${dataAmount}&facet=brightness&facet=bright_t31&facet=acq_date&facet=satellite&facet=confidence&facet=frp&facet=daynight&facet=acq_datetime&facet=country`
    );
    const data = await res.json();
    return data.records;
  };

  const getLists = useCallback(async () => {
    const listsFromServer = await fetchLists();
    setLists(listsFromServer);
    setLoading(false);
  }, []);

  useEffect(() => {
    getLists();
  }, [getLists]);

  return (
    <div className="tableContainer">
      {loading ? <Loading /> : ""}
      <DataLists lists={lists} dataAmount={dataAmount} />
    </div>
  );
}

export default App;
