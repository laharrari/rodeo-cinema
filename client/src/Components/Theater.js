import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import socket from '../socketConfig';
import { ENDPOINT } from '../Constants';

import Chat from './Chat';
import Video from './Video';

function Theater(props) {
    const [name, setName] = useState('');
    const [theater, setTheater] = useState('');

    useEffect(() => {
        const { name, theater } = queryString.parse(props.location.search);

        setName(name);
        setTheater(theater);

        socket.emit('joinTheater', { name, theater }, () => {
            
        });
    }, [ENDPOINT, props.location.search]);

    return (
        <div>
            <Video />
            <Chat />
        </div>
    )
}

export default Theater;