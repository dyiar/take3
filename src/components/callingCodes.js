import React from "react";

function CallingCodes(props) {
  return props.options.map(option => {
    return (
      <div className="mini-container" key={option}>
        {option !== "" ? (<p>{option}</p>) : (<p>N/A</p>)}
      </div>
    );
  });
}

export default CallingCodes;
