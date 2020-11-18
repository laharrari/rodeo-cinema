import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Link
                to="/"
                className="text-discordText text-center text-3xl p-3 text-center font-bold"
            >
                Rodeo Cinema
            </Link>
        </header>
    )
}

export default Header;