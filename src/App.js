import './App.css';
import Contador from './components/Contador';
import ReyesGodos from './components/ReyesGodos';
import Cards from './components/cards';
import logo from "./images/mono.png";

function App() {

  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69
    }
  ]

  return (
    <div className="App">
      <div className='logo'>
        <h1>
          <img src={logo} alt='Icon' />
          Gultrapillas Webs</h1>
      </div>
      <h2>Cards con Props</h2>
      <section className='section section1'>
        <Cards
          nombre="1"
          imagen="https://robohash.org/Robo1"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
        <Cards
          nombre="2"
          imagen="https://robohash.org/Robo2"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
        <Cards
          nombre="3"
          imagen="https://robohash.org/Robo3"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
        <Cards
          nombre="4"
          imagen="https://robohash.org/robot4"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
        <Cards
          nombre="5"
          imagen="https://robohash.org/Robo5"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
        <Cards
          nombre="6"
          imagen="https://robohash.org/Robo6"
          description="Robots generado por ia, que nos viene ha hacer cositas malas 🤣"
        />
      </section>
      <h2>Contador con useState</h2>
      <section className='section section2'>
        <Contador />
      </section>
      <section className='section section3'>
        <ReyesGodos
          nombre={reyes[0].nombre}
          color={reyes[0].color}
          precio={reyes[0].precio}
        />
        <ReyesGodos
          nombre={reyes[1].nombre}
          color={reyes[1].color}
          precio={reyes[1].precio}
        />
        <ReyesGodos
          nombre={reyes[2].nombre}
          color={reyes[2].color}
          precio={reyes[2].precio}
        />
        <ReyesGodos
          nombre={reyes[3].nombre}
          color={reyes[3].color}
          precio={reyes[3].precio}
        />
        <ReyesGodos
          nombre={reyes[4].nombre}
          color={reyes[4].color}
          precio={reyes[4].precio}
        />
        <ReyesGodos
          nombre={reyes[5].nombre}
          color={reyes[5].color}
          precio={reyes[5].precio}
        />
      </section>
    </div>
  );
}

export default App;
