import React from "react";

const Button = ({ className, buttonlabel }) => {
  return <button className={className}> {buttonlabel} </button>;
};

export default Button;
