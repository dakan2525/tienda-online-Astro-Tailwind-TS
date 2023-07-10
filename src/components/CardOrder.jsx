import { RiDeleteBin6Line } from "react-icons/ri";

const CardOrder = ({ nombre, url, precio, id, deleteProdCart, cantidadPedida, setCantidadPedida }) => {

    const opciones = { maximumFractionDigits: 0 };
    const valorPagar = precio * cantidadPedida
    const precioFormateado = precio.toLocaleString('es-ES', opciones);
    const totalFormateado = valorPagar.toLocaleString('es-ES', opciones);

    return (
        <>
            {/* Product */}
            <div className="text-white font-bold bg-[#1F1D2B] to-55% py-4 rounded-2xl p-2 mb-2  border-gray-500 border-b-[1px] border-r-[1px] shadow-xl shadow-slate-950 md:px-14 md:my-3 md:p-1  lg:mt-0 lg:px-2 lg:py-0  lg:mx-2 lg:mb-4">
                {/* card producto */}
                <div className="items-center text-center text-sm  grid grid-cols-6  pb-2 lg:pb-0 lg:m-0 lg:p-0 ">
                    <img className="col-span-1 object-center rounded-full w-14 h-14 md:w-28 md:h-28  md:relative md:mt-9    lg:mt-4 lg:h-24 lg:w-24 lg:col-span-2" src={url} alt="Jabon Natural" />
                    <div className="col-span-3  lg:col-span-2">
                        <h5>{nombre}</h5>
                        <p>$ {precioFormateado} COP</p>
                    </div>
                    <div>
                        <input className="text-white bg-[#262837] text-lg rounded-lg text-center  w-12 h-12 pt-1 ml-2 lg:ml-0 outline-none" onChange={(e) => setCantidadPedida(id, e.target.value)}
                            type="number" value={cantidadPedida} >
                        </input>
                    </div>
                    <p className="md:ml-12 lg:ml-0" >$ {totalFormateado}</p>
                </div>
                <form className="grid grid-cols-6 md:pb-3 ">
                    <input type="text" className="bg-[#262837] col-span-5 mr-5   py-2 pl-3 pr-4 rounded-lg text-gray-300- outline-none placeholder-gray-500 md:ml-32 lg:ml-24"
                        placeholder="Notas prara el Pedido..."
                    ></input>
                    <div>
                        <RiDeleteBin6Line onClick={() => deleteProdCart(id)} className="text-sm text-red-600 ml-2 p-2 w-10 h-10 border-2 rounded-lg border-red-600  hover:bg-red-600 hover:text-white  md:ml-16 lg:ml-5 lg:p-2 lg:h-10 " />
                    </div>
                </form>
            </div>
        </>
    )
}
export default CardOrder