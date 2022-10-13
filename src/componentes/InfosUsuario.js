import React from "react";



function InfosUsuario(props){
    return(
        <div>
            <img src={props.usuario.foto} className="imagem-magico" alt="Imagem do usuario"/>
            <h4>Nome do Autor: {props.usuario.nome}</h4>
        </div>
        
    )
}
export default InfosUsuario