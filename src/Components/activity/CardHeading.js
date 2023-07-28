import React from "react";

const CardHeading = (props) => {
  return (
    <>
      <h3 className="font-bold text-xl">{props.head}</h3>
      <p className="ml-3 text-base">{props.body}</p>
      <br/>
    </>
  );
};

export default CardHeading;
