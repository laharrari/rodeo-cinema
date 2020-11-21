import React from 'react';

function Header() {
    return (
        <header className="bg-discordMain p-1 flex justify-between items-center">
            <a
                href="/"
                className="text-discordTextMain text-3xl p-3 text-center font-bold"
            >
                Rodeo Cinema
            </a>
        </header>
    )
}

export default Header;