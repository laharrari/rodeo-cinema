import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

function ChatDisplay({ messages, name }) {
    return (
        <ScrollToBottom  className="overflow-auto flex-auto h-64">
            {messages.map((message, i) => <div key={i}>
                <Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}

export default ChatDisplay;