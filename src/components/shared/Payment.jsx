import { RiCloseLine } from "react-icons/ri";
import CardOrder from "../CardOrder";

const Payment = ({showOrder, toggelMenuOrder}) => {

    const btnPayment = " border-2 border-gray-500 py-2 px-4 rounded-xl text-[#4A8F44] font-bold    hover:bg-[#4A8F44] hover:text-white "

    return (
        <div className={` bg-[#1F1D2B] text-gray-300 fixed  lg:right-0 top-0 w-full h-full rounded-tl-xl rounded-bl-xl flex flex-col justify-between 
        pt-6 px-2   z-50 transition-all md:px-6  lg:pt-2 lg:px-2  lg:w-[460px] ${showOrder ? "right-0" : "-right-full"}`}>
            {/* Order o Payment */}
            <div className="relative pt-8 h-full ">
                <button id="btnOrder" onClick={() => toggelMenuOrder("btnOrder")} className="absolute left-0 top-0 p-2 box-content bg-[#262837] rounded-full text-xl lg:hidden" >
                    <RiCloseLine />
                </button>
                
                <h1 className="text-xl mb-7 mt-3 ">Order #11111</h1>


                {/* pills */}
                <div className="flex items-center gap-4 flex-wrap mb-8  ">
                    <button className={btnPayment}> Dine in</button>
                    <button className={btnPayment}> To go</button>
                    <button className={btnPayment}> Delivery</button>
                </div>
                
                <div className="grid grid-cols-6 pb-6 p-1 mr-1">
                        <h5 className="col-span-3 ml-2" >Producto</h5>
                        <h5 className="col-span-2 text-center">Cantidad</h5>
                        <h5 className="text-center">Pricio</h5>
                </div>

                {/* car */}
                <div className=" h-[430px] transition-all overflow-y-scroll lg:pr-3 md:h-[760px] lg:h-[680px] lg:pb-36 ">
                    

                    <CardOrder
                        nombre="Jabon Natural" 
                        url="./imagenes/limpieza-jabon-natural.jpg"
                        precio={20000}
                        cantidad={2}
                    />
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />    
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />    
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />    
                    <CardOrder
                        nombre="Botella GYM"
                        url="./imagenes/plastico-termo-verde.jpg"
                        precio={30000}
                        cantidad={1}
                    />
                    <CardOrder
                        nombre="Jabon Natural"
                        url="./imagenes/limpieza-jabon-natural.jpg"
                        precio={99900}
                        cantidad={9}
                    />                 
                </div>
            </div>
            {/* Submit payment */}
                
            <div className="bg-[#111827] absolute  rounded-xl  bottom-0 left-0 w-full px-4 py-3  text-gray-300  lg:py-4 ">
                    <div className="flex items-center justify-between mb-4  md:justify-between md:mx-16 lg:justify-between lg:mx-2">
                        <span>Descuento</span>
                        <span>$0</span>
                    </div>
                    <div className="flex items-center justify-between mb-3 md:justify-between md:mx-16  lg:justify-between lg:mx-2">
                        <span>Total a Pagar</span>
                        <span>$65.000</span>
                    </div>
                    <div className=" md:text-center md:m-4"> 
                        <button className="bg-red-600 border-2 border-gray-500 rounded-lg w-full py-2 px-4 md:w-1/2 lg:py-0 ">
                            Continuar con el Pago
                        </button>
                    </div>    
                </div>
        </div>

    )

}
export default Payment


