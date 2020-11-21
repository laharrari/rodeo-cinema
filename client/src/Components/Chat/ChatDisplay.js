import React from 'react';

import Message from './Message';

function ChatDisplay({ messages, name }) {
    return (
        <div className="overflow-auto flex-auto">
            {messages.map((message, i) => <div key={i}>
                <Message message={message} name={name} /></div>)}
        </div>
    )
}

export default ChatDisplay;