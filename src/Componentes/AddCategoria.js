import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategoria = ({ setData }) => {
  const [input, setInput] = useState("");

  const eventoTeclado = (e) => {
    setInput(e.target.value);
  };

  const eventoEnter = (e) => {
    e.preventDefault();

    if (input.trim().length > 2) {
      setData((data) => [input, ...data]);
      setInput("");
    }
  };

  return (
    <form onSubmit={eventoEnter}>
      <input
        type="text"
        value={input}
        onChange={eventoTeclado}
        placeholder="Ingrese su personaje favorito"
      />
    </form>
  );
};

AddCategoria.propTypes = {
  setData: PropTypes.func.isRequired,
};
