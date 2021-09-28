import { render } from "@testing-library/react";
import React,{component, useState} from "react";
import Item from "./Item";
function getItems() {
    const items = [{index: 0, nombre:"Producto1", stock: 4, descripcion: "Este es el producto 1"},
                   {index: 1, nombre:"Producto2", stock: 8, descripcion: "Este es el producto 2"},
                   {index: 2, nombre:"Producto3", stock: 1, descripcion: "Este es el producto 3"},
                   {index: 3, nombre:"Producto4", stock: 2, descripcion: "Este es el producto 4"}];
    return items;
  }
function ItemList (){
    let items = getItems();
    return<>
        <div class="cards" id={items.index}>
            {items.map((item) => (<Item item={item} />))}
        </div>
    </>
};

export default ItemList;