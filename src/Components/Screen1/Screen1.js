import React, { useEffect, useState } from "react";
import Moviecard from "../MovieCard/Moviecard";
import "./Screen1.css"
const Screen1 = () => {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setdatas(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Screen1__Container">
      {datas?.map((e) => (
        <Moviecard show={e.show} key={e.show.id}/>
      ))}
    </div>
  );
};

export default Screen1;
