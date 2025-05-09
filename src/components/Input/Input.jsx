import React from "react";

const Input = ({ tipo, valor, aoMudar, placeholder }) => {
  return (
    <input
      type={tipo}
      value={valor}
      onChange={aoMudar}
      placeholder={placeholder}
    />
  );
};

export default Input;
