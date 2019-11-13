import React from "react";

function Currency(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container" key={option.name}>
        {option.code !== undefined ? (<p>Code: {option.code}</p>) : (<p>N/A</p>)}
        {option.name !== undefined ? (<p>Name: {option.name}</p>) : (<p>N/A</p>)}
        {option.symbol !== undefined ? (<p>Symbol: {option.symbol}</p>) : (<p>N/A</p>)}
      </div>
    );
  });
}

export default Currency;
