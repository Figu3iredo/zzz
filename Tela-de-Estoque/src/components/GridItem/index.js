import React from "react";
import * as C from "./styles";
import {FaTrash, FaEdit} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td alignCenter>
      <C.Td>{item.desc}</C.Td>
      </C.Td>
      <C.Td alignCenter>
      <C.Td>{item.desc}</C.Td>
      </C.Td>
      <C.Td alignCenter>
      <C.Td >1{item.productCount}</C.Td>
      </C.Td>
      <C.Td alignCenter>
        <C.Td>R$ {item.amount},00</C.Td>
      </C.Td>
      <C.Td alignCenter>
      <FaEdit onClick={( )=>onDelete} />
        </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;