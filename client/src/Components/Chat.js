import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar';

let socket;

function Chat(props) {
    const [name, setName] = useState('');
    const [theater, setTheater] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, theater } = queryString.parse(props.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setTheater(theater);

        socket.emit('joinTheater', { name, theater }, () => {
            
        });
    }, [ENDPOINT, props.location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-between h-3/5 w-1/3">
                <InfoBar theater={theater} />
            </div>
        </div>
    )
}

export default Chat;