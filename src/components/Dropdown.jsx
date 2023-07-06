import React, { useState } from 'react';
import { RiArrowDownSLine, RiInstagramFill } from "react-icons/ri";
import { SiFacebook, SiLinkedin } from "react-icons/si";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                className="flex items-center gap-2 bg-[#1F1D2B] py-2 px-3 rounded-lg"
                onClick={toggleDropdown}
            > <RiArrowDownSLine /> Contacto
            </button>
            {isOpen && (
                <div className="transition-all text-white absolute mt-2 w-50 rounded-md shadow-lg bg-[#262837] ring-1 ring-black ring-opacity-5">
                    <a
                        href="https://www.facebook.com/andresfelipe.pradovelasco/"
                        className="flex text-start justify-evenly py-2 px-4 text-sm  hover:text-[#1877F2]"
                    ><SiFacebook className='text-base mr-2 mt-1' />
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/andresprado_2525/"
                        className="flex text-start justify-evenly py-2 px-4 text-sm  hover:text-[#E84357]"
                    ><RiInstagramFill className='text-xl mr-2 mt-1' />
                        Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andres-felipe-prado-velasco/"
                        className="flex text-start justify-evenly py-2 px-3 text-sm hover:text-[#0A66C2]"
                    ><SiLinkedin className='text-base mr-2 mt-1' />
                        Linkedin
                    </a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
