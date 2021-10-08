import React, { Component, useState } from "react";
import { Route, Link } from "react-router-dom";
import ItemProduct from './ItemProduct';

function showDescrip(e) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            e.preventDefault();
            let idProducto = e.target.parentNode.id;
            let descId = e.target.previousElementSibling.id;
            document.getElementById(descId).style = "";
            if (idProducto == descId - 1) {
                if (document.getElementById(descId).className == '') {
                    document.getElementById(descId).className = 'description';
                } else {
                    document.getElementById(descId).className = "";
                    document.getElementById(descId).style.display = "none";
                }
            }
        }, 2000);
    });
}

function showProduct(e){
    e.preventDefault();
    let idProducto = e.target.parentNode.id;
    return<>
        <Route path="/itemFull">
            <ItemProduct items={idProducto}/>
        </Route>
    </>;
}

function item(props) {
    return <>
        <div className="cards__content" id={props.item.index}>
            <h3>{props.item.nombre}</h3>
            <div id={props.item.index + 1} style={{ display: 'none' }}>
                <img src={props.item.imagen} width="80%" height="80%"></img>
                <p>{props.item.descripcion}</p>
                <p>Precio: {props.item.precio}</p>
            </div>
            <button onClick={showDescrip}>Mostrar descripcion</button>
            <button onClick={showProduct}><Link to={'/ItemFull'}>Mostrar Producto</Link></button>
            <p>Stock: {props.item.stock}</p>
        </div>
    </>;
};

export default item;
