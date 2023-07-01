import Sidebar from "./components/shared/Sidebar"
import Menu from "./components/Menu";
import Header from "./components/shared/Header";
import Body from "./components/Body"; 
import Payment from "./components/shared/Payment";
import { useState } from "react";




function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  //simulamos la respuesta de una api mientras encontramos una o aprendemos a hacer una y desplegar 
  const datosBase = {
    jabonNatural: {
        nombre: "Jabon Natural",
        url: "./imagenes/limpieza-jabon-natural.jpg",
        descrpcion: "Avena, Miel y Menta",
        precio: "20.000",
    },
    botellaGYM: {
        nombre: "Botella GYM",
        url: "./imagenes/plastico-termo-verde.jpg",
        descrpcion: "verde claro y blanco",
        precio: "30.000",
    },
    alcoholGel: {
        nombre: "Alcohol GEL",
        url: "./imagenes/limpieza-gel-alcohol.jpg",
        descrpcion: "Menta y sin olor",
        precio: "15.000",
    },
    recogedorCepillo: {
        nombre: "Recogedor Cepillo",
        url: "./imagenes/platico-recogedor-cepillo.jpg",
        descrpcion: "Rojo y Negro",
        precio: "25.000",
    }
}

  const toggelMenuOrder = (actualizar) => {

    if (actualizar === "btnMenu") {
      setShowMenu(!showMenu)
      setShowOrder(false)
      console.log(`se actualizo menu = ${showMenu}`)
    }

    if (actualizar === "btnOrder") {
      setShowOrder(!showOrder);
      setShowMenu(false)
      console.log(`se actualizo order = ${showOrder}`)
    }
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen ">
      <Sidebar showMenu={showMenu} />
      <Menu showMenu={showMenu} showOrder={showOrder} toggelMenuOrder={toggelMenuOrder} />
      <Header/>
      <Payment showOrder={showOrder} toggelMenuOrder={toggelMenuOrder}/>
      <Body datosBase={datosBase}/>
      

      
      
    </div>
  )
} 

export default App
