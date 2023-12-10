import "../styles/Cards.css";

const Cards = (props) => {
  return(
    
    <div>
        <div className="card-container">
          <h3>Robo {props.nombre}</h3>
          <img src={props.imagen} alt="Foto Robots"/>
          <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Cards;