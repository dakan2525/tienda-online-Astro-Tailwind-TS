import { RiHomeSmile2Line, RiShoppingCartLine, RiMailAddLine, RiNotification2Line } from "react-icons/ri";
import { RxGear, RxExit } from "react-icons/rx";
import logo from "../../../public/imagenes/My project-7.png";






const Sidebar = (props) => {

    const { showMenu } = props;

    const claseLiS = " hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
    const claselinkS = " p-2 flex justify-center rounded-xl text-center text-[#4A8F44] group-hover:text-white group-hover:bg-[#4A8F44] transition-colors"

    return (
        <div className={` bg-[#1F1D2B]  fixed lg:left-0 top-0 w-28 h-full rounded-tr-xl rounded-br-xl flex flex-col justify-between py-6 z-50 transition-all
        ${showMenu ? "left-0" : "-left-full"}`} >


            <div>
                <ul className="pl-4 ">

                    <li >
                        <a href="#" className="p-2 flex justify-center rounded-xl text-center" >
                            <img src={logo} alt="logo" className="w-[4rem] h-[4rem] " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiHomeSmile2Line className="text-2xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiShoppingCartLine className="text-2xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiMailAddLine className="text-2xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RiNotification2Line className="text-2xl " />
                        </a>
                    </li>
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RxGear className="text-2xl " />
                        </a>
                    </li>

                </ul>
            </div>

            <div>
                <ul className="pl-4 ">
                    <li className= {claseLiS} >
                        <a href="#" className={claselinkS}>
                            <RxExit className="text-2xl " />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar