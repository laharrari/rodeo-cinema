import React, { useState, useEffect } from "react";
import socket from '../socketConfig';

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
    }, []);

    console.log(message, messages);

    return (
        <div>

        </div>
    )
}

export default Chat;