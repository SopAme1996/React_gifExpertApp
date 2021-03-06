import React, { useState } from "react";
import { AddCategoria } from "./Componentes/AddCategoria";
import { RestApi } from "./Componentes/RestApi";

export const GiffApp = ({ defaultCategoria = [] }) => {
  const [data, setData] = useState(defaultCategoria);

  return (
    <>
      <header>
        <h1>GifApp</h1>
      </header>
      <hr />

      <section>
        <AddCategoria setData={setData} />
      </section>

      <section>
        {data.map((nombre) => {
          return <RestApi key={nombre} categoria={nombre} />;
        })}
      </section>
    </>
  );
};
