import React from "react";

const Countries = ({ countries, handleShow }) => {
  return countries.map((country) => (
    <div key={country.name.common}>
      {country.name.common}{" "}
      <button onClick={() => handleShow(country.name.common)}>show</button>
    </div>
  ));
};

export default Countries;
