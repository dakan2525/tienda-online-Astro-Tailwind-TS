import { RiShoppingCartLine, RiHeartFill } from "react-icons/ri";

const Card = ({ nombre, url, descrpcion, precio, favorito, id, setLike, createProdCart }) => {

    const opciones = { maximumFractionDigits: 0 };
    const precioFormateado = precio.toLocaleString('es-ES', opciones);

    return (
        <div className="  text-center bg-[#1F1D2B]  pt-2 px-1 rounded-xl">
            <img className="p-1  mb-1 w-full h-52 object-cover rounded-xl " src={url} alt={nombre} />
            <h3 > <strong>{nombre}</strong></h3>
            <p className="mb-1 text-xs">{descrpcion}</p>
            <span className="font-bold">$ {precioFormateado}</span>
            <div className=" flex justify-around text-2xl my-2">
                <button><RiShoppingCartLine onClick={() => createProdCart(id)} className="m-2" /></button>
                <button><RiHeartFill onClick={() => setLike(id)} className={`m-2  ${favorito ? "text-red-600" : ""}`} /></button>
            </div>
        </div>
    );
}
export default Card