import Sidebar from "./components/shared/Sidebar"
import Menu from "./components/Menu";
import Header from "./components/shared/Header";
import Body from "./components/Body";
import Payment from "./components/shared/Payment";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"


function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  //simulamos la respuesta de una api mientras encontramos una o aprendemos a hacer una y desplegar 
  const [datosBase, setDatosBase] = useState([
    {
      id: uuid(),
      nombre: "Jabon Natural",
      url: "./imagenes/limpieza-jabon-natural.jpg",
      descrpcion: "Avena, Miel y Menta",
      precio: 20000,
      favorito: true,
      cantidadPedida: 1
    },
    {
      id: uuid(),
      nombre: "Botella GYM",
      url: "./imagenes/plastico-termo-verde.jpg",
      descrpcion: "verde claro y blanco",
      precio: 30000,
      favorito: false,
      cantidadPedida: 1
    },
    {
      id: uuid(),
      nombre: "Alcohol GEL",
      url: "./imagenes/limpieza-gel-alcohol.jpg",
      descrpcion: "Menta y sin olor",
      precio: 15000,
      favorito: false,
      cantidadPedida: 1

    },
    {
      id: uuid(),
      nombre: "Recogedor Cepillo",
      url: "./imagenes/platico-recogedor-cepillo.jpg",
      descrpcion: "Rojo y Negro",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1
    },
    {
      id: uuid(),
      nombre: "Alcohol GEL",
      url: "./imagenes/limpieza-gel-alcohol.jpg",
      descrpcion: "Menta y sin olor",
      precio: 15000,
      favorito: false,
      cantidadPedida: 1

    },
    {
      id: uuid(),
      nombre: "Recogedor Cepillo",
      url: "./imagenes/platico-recogedor-cepillo.jpg",
      descrpcion: "Rojo y Negro",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1
    },
  ])

  const [prodCarrito, setProdCarrito] = useState([])

  const [totalPagar, setTotalPagar] = useState(0)

  const setLike = (id) => {
    const productoActualizado = datosBase.map((producto) => {
      if (producto.id === id) { producto.favorito = !producto.favorito }
      return producto
    })
    setDatosBase(productoActualizado)
  }

  const setCantidadPedida = (id, valor) => {
    const productoActualizado = prodCarrito.map((producto) => {
      if (producto.id === id && valor >= 0) { producto.cantidadPedida = valor }
      return producto
    })
    setProdCarrito(productoActualizado)
  }

  const createProdCart = (id) => {
    const productoNewCart = datosBase.filter((producto) => producto.id === id)
    prodCarrito.some(objeto => objeto.id === id) ? "" : setProdCarrito([...prodCarrito, productoNewCart[0]])
  }

  const deleteProdCart = (id) => {
    const ordenActualizada = prodCarrito.filter((producto) => producto.id !== id)
    setProdCarrito(ordenActualizada)
  }

  useEffect(() => {
    const total = prodCarrito.reduce((accumulator, obj) => accumulator + (obj.precio * obj.cantidadPedida), 0);
    setTotalPagar(total);
  }, [prodCarrito]);

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
      <Header />
      <Payment showOrder={showOrder} toggelMenuOrder={toggelMenuOrder} prodCarrito={prodCarrito} deleteProdCart={deleteProdCart} datosBase={datosBase} setProdCarrito={setProdCarrito} setCantidadPedida={setCantidadPedida} totalPagar={totalPagar} />
      <Body datosBase={datosBase} setLike={setLike} createProdCart={createProdCart} />
    </div>
  )
}

export default App