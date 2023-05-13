export default function Letras(props) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


  let letra = alfabeto.map((letra) => <button value={letra} key={letra} onClick={props.onClick} className={props.className}>{letra}</button>)

  return (
    letra
  );
}