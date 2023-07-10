import { RiShoppingCartLine, RiHeartFill } from "react-icons/ri";

const Card = ({ nombre, url, descrpcion, precio, favorito, id, setLike, createProdCart, categoria}) => {

    const opciones = { maximumFractionDigits: 0 };
    const precioFormateado = precio.toLocaleString('es-ES', opciones);

    return (
        <div className= "text-center bg-gradient-to-b from-white from-slate-0% via-[#1F1D2B] via-80% to-[#1F1D2B] to-100%  pt-2 px-1 rounded-xl  border-gray-500 border-b-[1px] border-r-[1px] shadow-xl shadow-slate-950">
            <img className="p-1  mb-1 w-full h-52 object-center rounded-xl " src={url} alt={nombre} />
            <h3 > <strong>{nombre}</strong></h3>
            <p className="mb-1 text-xs">{descrpcion}</p>
            <span className="font-bold">$ {precioFormateado}</span>
            <div className=" flex justify-around text-2xl my-2">
                <button><RiShoppingCartLine onClick={() => createProdCart(id)} className="m-2 text-white hover:text-[#4A8F44]" /></button>
                <button><RiHeartFill onClick={() => setLike(id, categoria)} className={`m-2  ${favorito ? "text-[#F33C3E]" : ""}`} /></button>
            </div>
        </div>
    );
}
export default Card