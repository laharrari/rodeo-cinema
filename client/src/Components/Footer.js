import React from 'react';

function Footer() {
    return (
        <footer className="bg-discordMain text-discordText text-center p-3 absolute bottom-0 w-full">
            <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
                <a href="http://www.laharrari.com/" target="_blank" rel="noreferrer">Website</a>
                <a href="https://www.linkedin.com/in/laharrari/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/laharrari/" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div>
                Email: laharrari@gmail.com
            </div>
        </footer>
    )
}

export default Footer;