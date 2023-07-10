import { RiSearchLine } from "react-icons/ri";
import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de búsqueda con el término ingresado
        console.log('Realizando búsqueda con el término:', searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full relative rounded-2xl shadow-xl shadow-slate-950">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                />
                
            </div>

        </form>
                        










    );
};

export default SearchBar;
