import { RiHomeSmile2Line, RiShoppingCartLine, RiMailAddLine, RiNotification2Line } from "react-icons/ri";
import { RxGear, RxExit } from "react-icons/rx";
import logo from "../../../public/imagenes/My project-7.png";

const Sidebar = (props) => {

    const { showMenu } = props;

    const claseLiS = " hover:bg-[#262837] px-6 py-4 md:py-6rem lg:px-6 rounded-tl-xl rounded-bl-xl group transition-colors"
    const claselinkS = "w-12 py-2 flex justify-center rounded-xl text-center text-white hover:bg-[#1F1D2B] shadow-md shadow-t shadow-[#4A8F44] rounded-xl text-[#4A8F44] border-[#4A8F44] transition-all hover:text-white hover:shadow-black hover:bg-[#4A8F44]"

    return (
        <div className={`bg-[#1F1D2B] items-center fixed lg:left-0 top-0 w-20 h-full rounded-tr-xl rounded-br-xl flex flex-col justify-between py-6 z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"}`} >
            <div>
                <ul className="">
                    <li >
                        <a href="#" className="p- flex justify-center rounded-xl text-center" >
                            <img src={logo} alt="logo" className="w-[4rem] h-[4rem]  md:w-[8rem] md:h-[6rem]" />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiHomeSmile2Line className="text-3xl" />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiShoppingCartLine className="text-3xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiMailAddLine className="text-3xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiNotification2Line className="text-3xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RxGear className="text-3xl " />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="">
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RxExit className="text-3xl " />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar