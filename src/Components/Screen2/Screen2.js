import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Screen2.css";
import Form from "../Form/Form";
const Screen2 = () => {
  const [data, setdata] = useState();
  const [isOpen, setisOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=all`
        );
        const data = await response.json();
        let filterdata = data.filter((e) => e.show.id == id);
        setdata(filterdata[0].show);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div
      className="Container"
      style={{ backgroundImage: `url(${data?.image?.original})` }}
    >
      <div className="bgEffect"></div>
      {isOpen && <Form  isOpen={isOpen} setisOpen={setisOpen} data={data}/>}
      {!isOpen && (
        <>
          <div className="show__InfoContainer">
            <Link to={data?.url} target="_blank">
              <div className="show__Img">
                <img
                  src={
                    data?.image?.medium
                      ? data?.image?.medium
                      : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                  }
                />
              </div>
            </Link>
            <div>
              <h1>{data?.name}</h1>
              <h3>
                {data?.premiered} {data?.language}
              </h3>
              <div className="TimeandGenre">
                {data?.runtime && (
                  <h3 className="time">{data?.runtime} mins</h3>
                )}
                {data?.genres.map((e, i) =>
                  i == data.genres.length - 1 ? <h4>{e}</h4> : <h4>{e},</h4>
                )}
              </div>
              <div className="show__Rating">{data?.rating.average}/10</div>
            </div>
          </div>
          <button
            className="show__bookingButton"
            onClick={() => setisOpen(true)}
          >
            Book now
          </button>
          <div
            className="show__Summary"
            dangerouslySetInnerHTML={{ __html: data?.summary }}
          />
        </>
      )}
    </div>
  );
};

export default Screen2;
