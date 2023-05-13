import React from "react";

export default function Jogo(props) {
  return (
    <div key={Jogo}>
      <img src={props.img} alt="img da forca" />
    </div>
  )
}