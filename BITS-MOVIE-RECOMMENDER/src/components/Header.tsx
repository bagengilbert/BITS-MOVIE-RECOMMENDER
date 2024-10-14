import React from 'react';
import SearchBar from './SearchBar';

interface HeaderProps {
    onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    return(
        <header className="flex items-center just justify-between p-4k bg-black text-white">
            <h1 className="text-2xl font-bold">
                HOT<span className='text-green-500'>STREAM™</span>
            </h1>
            <SearchBar onSearch={onSearch} />
        </header>
    );
};

export default Header;