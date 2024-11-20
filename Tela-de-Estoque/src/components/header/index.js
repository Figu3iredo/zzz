import React from "react";
import * as C from "./styles";
import { FaBox } from "react-icons/fa";

const Header = () =>{
    return (
       <C.Container>
            <C.Header>
                <C.Title> <FaBox />  Estoque
                    </C.Title> 
            </C.Header>
            <C.Button>+ PRODUTO</C.Button>
       </C.Container> 
        
    );
};

export default Header;