const Card = ({ datos }) => {

    const {nombre, url,descrpcion, precio} = datos

    return (
        <div className=" text-center bg-[#1F1D2B]  pt-2 px-1 rounded-xl md:pt-4 ">
            <img  className="object-cover rounded-xl ml-[14px] md:mx-3 lg:mx-5 mb-1 w-5/6 h-4/6" src={url} alt="producto"  />
            <h3 > <strong>{nombre}</strong></h3>
            <p className="mb-2 text-xs">{descrpcion}</p>
            <span className="font-bold">$ {precio}</span>
        </div>
        
        
    );
}
export default Card