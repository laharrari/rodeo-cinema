import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message }) {
    return (
        <div className="flex justify-start mb-2 mt-2 pl-2 pr-2">
            <div className="bg-discordMain text-discordTextSec p-2 rounded-xl">
                <p className="flex center tracking-wider">{message.username}
                    <span className="text-xs pl-2 mt-1">{message.time}</span>
                </p>
                <div className="break-all text-discordTextMain">
                    <p className="align-middle">{ReactEmoji.emojify(message.text)}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;