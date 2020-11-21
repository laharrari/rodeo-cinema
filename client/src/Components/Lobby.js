import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../images/rodeo_cinema.png';

function Lobby() {
    const [name, setName] = useState('');
    const [theater, setTheater] = useState('');

    return (
        <div className="flex justify-center items-center">
            <div>
                <h1 className="mt-10 text-discordTextMain text-2xl text-center font-bold">Lobby</h1>
                <div><input placeholder="Name" type="text" className="pl-1 mt-5 w-56 outline-none"
                onChange={(event) => setName(event.target.value)} /></div>

                <div><input placeholder="Room" type="text" className="pl-1 mt-5 w-56 outline-none"
                onChange={(event) => setTheater(event.target.value)} /></div>

                <div className="flex justify-center items-center">
                    <Link onClick={event => (!name || !theater) ? event.preventDefault() : null}
                        to={`/theater?name=${name}&theater=${theater}`}>
                        <button className="bg-discordMain text-discordTextMain text-xl mt-5 px-10 rounded" type="submit">Join</button>
                    </Link>
                </div>
                {/* <img className="w-3/4 h-3/4" src={pic} alt="rodeo_cinema.png" /> */}
            </div>
        </div>
    )
}

export default Lobby;