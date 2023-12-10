import "../styles/ReyesGodos.css";

const ReyesGodos = ({nombre, color, precio}) => {

  const ruta = "http://www.html6.es/img/rey_"
  const imagen = `${ruta}${nombre}.png`

  return (
    <div className="card" style={{backgroundColor:color}}>
      <h3>{nombre}</h3>
      <img src={imagen}/>
      <p>{precio}</p>
    </div>
  )
}

export default ReyesGodos;