import React, { useState, useEffect } from "react";
import socket from '../../socketConfig';
import ChatInfo from './ChatInfo';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

function Chat({ name, theater }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [ ...messages, message ]);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            // Clear chat input
            setMessage('');
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-between w-1/3">
                <ChatInfo theater={theater} />
                <ChatDisplay messages={messages} name={name} />
                <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat;