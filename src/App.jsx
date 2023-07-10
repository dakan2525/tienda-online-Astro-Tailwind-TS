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
      nombre: "Jabon Natural Rosas",
      url: "./imagenes/personal-jabon-floral.webp",
      descrpcion: "Frutos de Rojos",
      precio: 20000,
      favorito: true,
      cantidadPedida: 1,
      categoria: "Aseo Personal"
    },
    {
      id: uuid(),
      nombre: "Jabon Artesanal",
      url: "./imagenes/personal-jabon-natural.webp",
      descrpcion: "Avena, Miel y Menta",
      precio: 30000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Aseo Personal"
    },
    {
      id: uuid(),
      nombre: "Perfume Raw",
      url: "./imagenes/personal-perfume-raw.webp",
      descrpcion: "Olor Amaderado",
      precio: 55000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Aseo Personal"

    },
    {
      id: uuid(),
      nombre: "Splash Victoria's Secret",
      url: "./imagenes/personal-splash.webp",
      descrpcion: "Olores florales",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Aseo Personal" 
    },
    {
      id: uuid(),
      nombre: "Crema para ojos",
      url: "./imagenes/personal-crema-ojos.webp",
      descrpcion: "Antienvejecimiento",
      precio: 45000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Aseo Personal" 
    },
    {
      id: uuid(),
      nombre: "Juguete de Percha",
      url: "./imagenes/mascotas-juguete.webp",
      descrpcion: "Color uico",
      precio: 15000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Mascotas" 

    },
    {
      id: uuid(),
      nombre: "Collar de Mascota",
      url: "./imagenes/mascotas-collar.webp",
      descrpcion: "Oro y Plata",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1,
      categoria:"Mascotas" 
    },
    {
      id: uuid(),
      nombre: "Rodillo Removedor de Pelo",
      url: "./imagenes/mascotas-recolector-pelo.webp",
      descrpcion: "Azul y Rojo",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1,
      categoria:"Mascotas" 
    },
    {
      id: uuid(),
      nombre: "JCepillo Exfoliante",
      url: "./imagenes/plastico-cepillo-exfoliante.webp",
      descrpcion: "Color uico",
      precio: 15000,
      favorito: false,
      cantidadPedida: 1,
      categoria: "Plásticos" 

    },
    {
      id: uuid(),
      nombre: "Jarra Con Tapa",
      url: "./imagenes/plastico-jarra-tapa.webp",
      descrpcion: "Diseño Innovador",
      precio: 25000,
      favorito: false,
      cantidadPedida: 1,
      categoria:"Plásticos" 
    }
  ])

  const [productosFiltrados, setProductosFiltrados] = useState([...datosBase])

  const [prodCarrito, setProdCarrito] = useState([])

  const [validarTitulo, setValidarTitulo] = useState("Todos Los Prodcutos")

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

  const crearProdFiltrados = (categoria) => {
    let filtrados = datosBase.filter((producto) => producto.categoria === categoria)
    let favoritos = datosBase.filter((producto) => producto.favorito === true)
    setValidarTitulo(categoria)
    categoria === "Favoritos"? setProductosFiltrados(favoritos) : setProductosFiltrados(filtrados)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen ">
      <Sidebar showMenu={showMenu} />
      <Menu showMenu={showMenu} showOrder={showOrder} toggelMenuOrder={toggelMenuOrder} />
      <Header  crearProdFiltrados={crearProdFiltrados}/>
      <Payment showOrder={showOrder} toggelMenuOrder={toggelMenuOrder} prodCarrito={prodCarrito} deleteProdCart={deleteProdCart} datosBase={datosBase} setProdCarrito={setProdCarrito} setCantidadPedida={setCantidadPedida} totalPagar={totalPagar} />
      <Body validarTitulo={validarTitulo} datosBase={datosBase} productosFiltrados={productosFiltrados} setLike={setLike} createProdCart={createProdCart} />
    </div>
  )
}

export default App