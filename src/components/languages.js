import React from "react";

function Languages(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container" key={option.name}>
        {option.name !== undefined ? (<p>Name: {option.name}</p>) : (<p>N/A</p>)}
        {option.iso639_1 !== undefined ? (<p>Shortened Version 1: {option.iso639_1}</p>) : (<p>N/A</p>)}
        {option.iso639_2 !== undefined ? (<p>Shortened Version 2: {option.iso639_2}</p>) : (<p>N/A</p>)}
        {option.nativeName !== undefined ? (<p>Native Name: {option.nativeName}</p>) : (<p>N/A</p>)}
      </div>
    );
  });
}

export default Languages;
