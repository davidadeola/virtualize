import React, { useState, useEffect, useCallback, useRef } from "react";
import DataLists from "./components/lists/dataLists";
import Loading from "./components/loading/loading";

import "../src/styles/global.css";
import ScrollButton from "./components/button/button";
import Header from "./components/header/header";

const dataAmount = 3000;

function App() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollVisible, setScrollVisible] = useState(false);
  const table = useRef(null);

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

  const toggleScrollButton = (event) => {
    if (event.target.scrollTop > 200) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  };

  useEffect(() => {
    table.current.addEventListener("scroll", toggleScrollButton);

    return table.current.addEventListener("scroll", toggleScrollButton);
  }, []);

  const scrollToTop = () => {
    table.current.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="tableContainer" ref={table}>
        {loading ? <Loading /> : ""}
        <DataLists lists={lists} dataAmount={dataAmount} />
        <ScrollButton scrollToTop={scrollToTop} scrollVisible={scrollVisible} />
      </div>
    </>
  );
}

export default App;
