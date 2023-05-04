import React from "react";
import "./Moviecard.css";
import { Link } from "react-router-dom";
const Moviecards = ({ show }) => {
  return (
    <div className="Card" key={show.id}>
      <div className="show__Image">
      <img src={show?.image?.original?show?.image?.original:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}  />
      </div>
      <div className="show__Info">
        <h3 className="show__name">{show.name}</h3>
        <div className="show__Genres">
          <h4>Genres: </h4> 
          {show.genres?.map((e, i) =>
            i == show.genres.length - 1 ? <span>{e}</span> : <span>{e},</span>
          )}
        </div>
        <h4>
          Premiered: <span>{show.premiered}</span>
        </h4>
        <h4>
          Rating: <span>{show.rating.average}</span>
        </h4>
        <h4>
          Language: <span>{show.language}</span>
        </h4>
        <Link to={`/${show.id}`}>
        <button className="moreInfo__Button">More Info.</button>
        </Link>
      </div>
    </div>
  );
};

export default Moviecards;
