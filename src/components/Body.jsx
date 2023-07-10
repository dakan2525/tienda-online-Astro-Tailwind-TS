import Card from "./Card";
import Dropdown from "./Dropdown";

const Body = (props) => {

    const { datosBase, setLike, createProdCart, productosFiltrados, validarTitulo } = props

    return (
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-8 lg:pl-28 transition-all lg:mt-6 lg:pb-0 mb:pb-28" >
            <div className=" flex flex-col lg:col-span-6 items-center">
                {/* Title content  */}
                <div className="w-screen  text-gray-300 flex  gap-4 flex-row justify-around items-center md:mx-12 lg:mx-14 ">
                    <h2 className=" text-xl ">{validarTitulo}</h2>
                    <Dropdown />
                </div>
                {/* Productos */}
                <div className="text-white mx-2 py-3  grid grid-cols-2 gap-6 md:gap-16 transition-all md:px-20   md:w-full md:grid-cols-3 lg:grid-cols-4 lg:gap-x-24 lg:gap-y-5 ">

                    {/* Card productos */}

                    {
                        
                        productosFiltrados.map((producto, i) => (
                            <Card
                                key={i}
                                nombre={producto.nombre}
                                url={producto.url}
                                descrpcion={producto.descrpcion}
                                precio={producto.precio}
                                favorito={producto.favorito}
                                id={producto.id}
                                categoria = {producto.categoria}
                                setLike={setLike}
                                createProdCart={createProdCart}
                            />))
                    }

                </div>
            </div>
        </section>
    )
}
export default Body