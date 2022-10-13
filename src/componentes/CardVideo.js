import React from "react";
import InfosUsuario from "./InfosUsuario";


function CardVideo(props) {
  const usuario = {
    nome: "Dog na floresta",
    foto: "https://picsum.photos/id/1025/150/100",
  };   

  return (
    <div className="box-pagina-principal" onClick={props.reproduzVideo}>
      <img src={props.video.imagem} alt="" />
      <h4>Titulo:{props.video.titulo}</h4>
      <InfosUsuario usuario={usuario} />
    </div>
  );
}
export default CardVideo;
