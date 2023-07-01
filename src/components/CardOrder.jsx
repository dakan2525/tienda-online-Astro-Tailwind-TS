import { RiDeleteBin6Line } from "react-icons/ri";

const CardOrder = ({ nombre, url, precio, cantidad }) => {


    return (
        <>
            {/* Product */}
            <div className="bg-gray-900 py-4 rounded-2xl p-2 mb-2 md:px-14 md:my-3 md:p-1  lg:mt-0 lg:px-2 lg:py-0  lg:mx-2 lg:mb-3">
                {/* card producto */}
                <div className="items-center text-center text-sm  grid grid-cols-6  pb-2 lg:m-0 lg:p-0 ">
                    <img className="col-span-1 object-cover rounded-full w-14 h-14 md:w-28 md:h-28  md:relative md:mt-9    lg:mt-4 lg:h-24 lg:w-24 lg:col-span-2" src={url} alt="Jabon Natural" />
                    <div className="col-span-3  lg:col-span-2">
                        <h5>{nombre}</h5>
                        <p>$ {precio} COP</p>
                    </div>
                    <div className=" bg-[#262837] rounded-xl text-center w-8 h-7 pt-1 ml-2 lg:ml-0">{cantidad}</div>
                    <p className="md:ml-12 lg:ml-0" >$ {precio * cantidad}</p>
                </div>
                <form className="grid grid-cols-6 md:pb-3 ">
                    <input type="text" className="bg-[#262837] col-span-5 mr-5   py-2 pl-3 pr-4 rounded-lg text-gray-300- outline-none placeholder-gray-500 md:ml-32 lg:ml-24"
                        placeholder="Notas prara el Pedido..."
                    ></input>
                    <RiDeleteBin6Line className="text-sm text-[#4A8F44] ml-2 p-2 w-10 h-10 border-2 rounded-lg border-gray-500  hover:bg-[#4A8F44] hover:text-white  md:ml-16 lg:ml-5 lg:p-0 lg:h-8 lg:border-none" />
                </form>
            </div>
        </>
    )
}

export default CardOrder