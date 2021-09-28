import React, { Component, useState} from "react";
function showDescrip(e){
    const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        e.preventDefault();
        let idProducto = e.target.parentNode.id;
        let descId = e.target.previousElementSibling.id;
        document.getElementById(descId).style = "";
        if(idProducto == descId-1){
            if(document.getElementById(descId).className == ''){
            document.getElementById(descId).className = 'description';
            }else{
                document.getElementById(descId).className = "";
                document.getElementById(descId).style.display = "none";
            }         
        }
        },2000);   
    });
}

function item (props){
    
    return<>
        <div class="cards__content" id={props.item.index}>
            <h3>{props.item.nombre}</h3>
            <p id={props.item.index+1} style={{display: 'none'}}>{props.item.descripcion}</p>
            <button onClick={showDescrip}>Mostrar descripcion</button>
            <p>{props.item.stock}</p>
        </div>
    </>;
};

export default item;
