import { render } from "@testing-library/react";
import React from "react";

const Item = ({greeting}) => {
    return(
        <h1>{greeting}</h1>
    );
}
export default Item;