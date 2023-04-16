import React from 'react';
import foto from '../assets/404.jpg';

export default function ErrorPage(){
    return(
        <>
            <img 
            src={foto} style={{height: "auto", objectFit: "cover", margin: "auto", display: "block"}} 
            alt="Error de pagina"/>
        </>
    );
}