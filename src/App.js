import React from "react";
import "./styles.css";
import CardVideo from "./componentes/CardVideo";

export default function App() {
    const reproduzVideo = () => {
      alert("o vídeo está sendo reproduzido");
    };

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Vídeo 1",
  };

  const video2 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "Vídeo 2",
  };

  const video3 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Vídeo 3",
  };

  const video4 = {
    imagem: "https://picsum.photos/400/400?a=4",
    titulo: "Vídeo 4",
  };

  const video5 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "Vídeo 5",
  };

  const video6 = {
    imagem: "https://picsum.photos/400/400?a=6",
    titulo: "Vídeo 6",
  };

  const video7 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "Vídeo 7",
  };

  const video8 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "Vídeo 8",
  };
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-menu-vertical">Início</li>
              <li className="botoes-menu-vertical">Em alta</li>
              <li className="botoes-menu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-menu-vertical">Originais</li>
              <li className="botoes-menu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo video={video1} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video2} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video3} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video4} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video5} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video6} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video7} reproduzVideo ={reproduzVideo}/>
            <CardVideo video={video8} reproduzVideo ={reproduzVideo}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
