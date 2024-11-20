import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

const Resume = ({ total, productCount }) => {
  return (
    <C.Container>
      <ResumeItem title="Valor em Estoque" value={total} />
      
      <ResumeItem title="Total de Produtos" value={productCount} />
    </C.Container>
  );
};

export default Resume;
