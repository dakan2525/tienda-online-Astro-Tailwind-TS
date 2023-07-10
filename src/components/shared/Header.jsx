import SearchBar from "./SearchBar";

const Header = ({crearProdFiltrados}) => {

    const classLinkH = "p-2 flex justify-center rounded-xl font-bold text-center text-white hover:bg-[#262837] hover:shadow-md hover:shadow-t hover:shadow-[#4A8F44] hover:rounded-xl hover:border-[#4A8F44] transition-all"

    return (
        <div className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
            <div className="lg:col-span-6">
                {/* Header */}
                <header className="p-4 md:mx-7">
                    {/* Title and Search */}
                    <div className=" flex flex-col gap-4 mb-2 md:flex-row md:justify-between md:items-center ">
                        <div className="md:mt-3 lg:mt-0">
                            <h1 className="text-2xl text-gray-300 mb-1 lg:mb-0 ">A&M Productos de limpieza</h1>
                            <p className="text-gray-500 ">25 junio 2023</p>
                        </div>

                        <SearchBar />
                    </div>
                    {/* Tabs Fitros */}
                    <nav className="text-gray-300 flex justify-around items-center border-b-2  mx-1 border-gray-500 md:mx-16 md:mt-8 lg:m-0 lg:pr-64 lg:my-0 " >
                        
                        <button className={classLinkH} onClick={() => crearProdFiltrados("Aseo Personal") }>Aseo personal</button>
                        <button className={classLinkH} onClick={() => crearProdFiltrados("Mascotas") }>Mascotas</button>
                        <button className={classLinkH} onClick={() => crearProdFiltrados("Plásticos") }>Plasticos</button>
                        <button className={classLinkH} onClick={() => crearProdFiltrados("Favoritos") }>Favoritos</button>
                    </nav>
                </header>
                
            </div>
        </div>
    )

}
export default Header