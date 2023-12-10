import "../styles/Contador.css";
import React, {useState} from "react";

const Contador = () => {

  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    setContador(contador - 1);
  }
  const resetear = () => {
    setContador(0);
  }

  return(
    <div className="contador">
      <h3>Contador</h3>
      <div className="numero">{contador}</div>
      <button className="btn btn-sumar" onClick={sumar}>Sumar</button>
      <button className="btn btn-restar" onClick={restar}>Restar</button>
      <button className="btn btn-resetear" onClick={resetear}>Resetear</button>
    </div>
  )
}

export default Contador;