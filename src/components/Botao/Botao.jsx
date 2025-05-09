import React from "react";

const Botao = ({ texto, onClick }) => {
  return <button onClick={onClick}>{texto}</button>;
};

export default Botao;
