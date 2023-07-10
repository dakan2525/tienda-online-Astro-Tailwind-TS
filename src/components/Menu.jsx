import {RiUserLine, RiAddCircleLine, RiShoppingCartLine, RiCloseLine  } from "react-icons/ri";
import {RxHamburgerMenu, } from "react-icons/rx";

const Menu = (props) => {

    const {showMenu, toggelMenuOrder} = props

    return (
        <>{/* Menu movil*/}
            <nav className="bg-[#1F1D2B]   fixed w-full bottom-0 left-0 text-3xl text-gray-400
        flex items-center justify-between py-2 px-8  rounded-tl-xl rounded-tr-xl   lg:hidden">
                <button id="btnUser" className="p-2">
                    <RiUserLine />
                </button>
                <button id="btnAdd" className="p-2">
                    <RiAddCircleLine />
                </button>
                <button id="btnOrder" onClick={() => toggelMenuOrder("btnOrder")} className="p-2">
                    <RiShoppingCartLine />
                </button>
                <button id="btnMenu" onClick={() => toggelMenuOrder("btnMenu")} className="text-white p-2 ">
                    {showMenu ? <RiCloseLine /> : <RxHamburgerMenu />}
                </button>
            </nav>
        </>
    )
}

export default Menu