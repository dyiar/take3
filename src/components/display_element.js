import React from "react";
import { Link } from "react-router-dom";

function Display(props) {
  return (
    <Link to={`/country/${props.country_name}`} className="display-box">
      {props.country_name !== "" ? (<p>Country Name: {props.country_name}</p>) : (<p>Country Name: N/A</p>)}
      {props.capital !== "" ? (<p>Capital: {props.capital}</p>) : (<p>Capital: N/A</p>)}
      {props.region !== "" ? (<p>Region: {props.region}</p>) : (<p>Region: N/A</p>)}
      {props.subregion !== "" ? (<p>Subregion: {props.subregion}</p>) : (<p>Subregion: N/A</p>)}
    </Link>
  );
}

export default Display;
