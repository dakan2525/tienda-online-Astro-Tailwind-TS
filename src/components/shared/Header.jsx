import { RiSearchLine } from "react-icons/ri";

const Header = () => {

    const classLinkH = " font-bold hover:border-b-2 py-2 ml-1 hover:text-[#4A8F44] hover:border-[#4A8F44] lg:h-10  lg:transition-all"

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
                        <form>
                            <div className="w-full relative">
                                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                                <input
                                    type="text"
                                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                                    placeholder="Buscar producto..."></input>
                            </div>
                        </form>
                    </div>
                    {/* Tabs Fitros */}
                    <nav className="text-gray-300 flex justify-around items-center border-b-2  mx-1 border-gray-500 md:mx-16 md:mt-8 lg:m-0 lg:pr-64 lg:my-0 " >
                        <a className={classLinkH} href="#">Aseo personal</a>
                        <a className={classLinkH} href="#">Mascotas</a>
                        <a className={classLinkH} href="#">Plasticos</a>
                        <a className={classLinkH} href="#">Ofertas</a>
                    </nav>
                </header>
                
            </div>
        </div>
    )

}
export default Header