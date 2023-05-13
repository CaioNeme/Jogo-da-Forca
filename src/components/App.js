import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

import lvl0 from '../assets/forca0.png'
import lvl1 from '../assets/forca1.png'
import lvl2 from '../assets/forca2.png'
import lvl3 from '../assets/forca3.png'
import lvl4 from '../assets/forca4.png'
import lvl5 from '../assets/forca5.png'
import lvl6 from '../assets/forca6.png'
let contador = 0;

export default function App() {

  let [className, setClassName] = React.useState("letra desabilitado");
  let [forca, setForca] = React.useState(lvl0);
  let [underline, setUnderline] = React.useState([]);
  let [palavrasEscolhidaArr, setPalavrasEscolhidaArr] = React.useState([]);
  let [corPalavra, setCorPalavra] = React.useState('palavra');


  function jogo(event) {

    let newArr = [];
    let valor = event.target.value;

    console.log('Letra clicada: ', valor)

    if (palavrasEscolhidaArr.includes(valor)) {
      for (let i = 0; i < palavrasEscolhidaArr.length; i++) {
        if (palavrasEscolhidaArr[i] === valor) {
          newArr.push(valor);
          console.log("1º caso: ", newArr);
        }
        else if (underline[i] !== ' _') {
          newArr.push(underline[i]);
          console.log("2º caso: ", newArr);
        }
        else {
          newArr.push(' _');
          console.log("3º caso: ", newArr);
        }
      }

      setUnderline(newArr);
      let x = 0;
      for (let c = 0; c < palavrasEscolhidaArr.length; c++) {
        if (palavrasEscolhidaArr[c] === underline[c]) {
          x++;
        }
        if (x === palavrasEscolhidaArr.length - 1) {
          setCorPalavra("palavra verde");
          setTimeout(() => alert("Você Ganhou!!!"), 100);
        }
        console.log("acertos: ", x);
      }
    }
    else {
      contador++;

      if (contador === 1) {
        setForca(lvl1);
      }
      else if (contador === 2) {
        setForca(lvl2);
      }
      else if (contador === 3) {
        setForca(lvl3);
      }
      else if (contador === 4) {
        setForca(lvl4);
      }
      else if (contador === 5) {
        setForca(lvl5);
      }
      else if (contador === 6) {
        setForca(lvl6);
        setUnderline(palavrasEscolhidaArr);
        setCorPalavra('palavra vermelho');
        setTimeout(() => alert("Você Perdeu D:"), 100);
      }
    }

    console.log(newArr);
    console.log("erros: ", contador);

  }

  function comecarJogo() {
    setClassName("letra");
    setForca(lvl0);
    contador = 0;

    function randomizar(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let aleatotio = Math.floor(Math.random() * (max - min + 1)) + min;
      return aleatotio;
    }

    let palavraEscolhida = palavras[randomizar(0, palavras.length)];
    let arr_ = [];
    let _arr = [];
    for (let c = 0; c < palavraEscolhida.length; c++) {
      arr_.push(' _');
      _arr.push(palavraEscolhida[c]);
    }
    setPalavrasEscolhidaArr(_arr);
    setUnderline(arr_);
    console.log(_arr);
  }
  return (
    <div className="app">
      <button onClick={comecarJogo} data-test="choose-word" className="botao">Escolher Palavra</button>
      <Jogo
        img={forca}
      />
      <div className="letras">
        <Letras
          disabled={''}
          className={className}
          onClick={jogo}
        />
      </div>
      <div data-test="word" className={corPalavra}>{underline}</div>
    </div>
  )

}