import { RiArrowDownSLine } from "react-icons/ri";
import Card from "./Card";


const Body = (props) => {

    const {datosBase} = props 

        return (
            <section className="mb-16 grid grid-cols-1 lg:grid-cols-8 lg:pl-28 transition-all lg:mt-6 lg:pb-0 mb:pb-28" >
                <div className="px-2 flex flex-col lg:col-span-6 items-center">
                    {/* Title content  */}
                    <div className="w-screen  text-gray-300 flex  gap-4 flex-row justify-around items-center md:mx-12 lg:mx-14 ">
                        <h2 className=" text-xl ">Productos</h2>
                        <button className="flex items-center gap-2 bg-[#1F1D2B] py-2 px-3 rounded-lg">
                            <RiArrowDownSLine />Pida aqui</button>
                    </div>

                    {/* Productos */}
                    <div className="  py-6 text-gray-300  grid grid-cols-2 gap-4 md:gap-16 transition-all md:px-20   md:w-full md:grid-cols-3 lg:grid-cols-4 ">

                        {/* Card productos */}
                        
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural} />
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural} />
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.botellaGYM} />
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural} />
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.jabonNatural}/>
                        <Card datos={datosBase.botellaGYM} />
                    </div>
                </div>
            </section>
        )
    }
    export default Body