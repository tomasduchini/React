import React from "react";
import ReactDOM from 'react-dom';

function ItemFull(props){
    if(props.items == props.item.index){
        ReactDOM.render(
            <div className="cards__content" id={props.item.index}>
                <h3>{props.item.nombre}</h3>
                <div id={props.item.index + 1} style={{ display: 'none' }}>
                    <img src={props.item.imagen} width="80%" height="80%"></img>
                    <p>{props.item.descripcion}</p>
                    <p>Precio: {props.item.precio}</p>
                </div>
                <button >Mostrar descripcion</button>
                <button >Mostrar Producto</button>
                <p>Stock: {props.item.stock}</p>
            </div>,
            document.getElementById('root')
        );
    }
}

export default ItemFull;