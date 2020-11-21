import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(message.username === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
            ? (
                <div className="flex justify-end mb-2 mt-2 pl-2 pr-2 inline-block break-all">
                    <div className="bg-discordMain text-discordTextSec p-2 rounded-xl">
                        <p className="flex tracking-wider">{trimmedName}
                            <span className="text-xs pl-2 mt-1">{message.time}</span>
                        </p>
                        <div className="text-discordTextMain">
                            <p className="align-middle">{ReactEmoji.emojify(message.text)}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-start mb-2 mt-2 pl-2 pr-2 inline-block break-all">
                    <div className="bg-discordMain text-discordTextSec p-2 rounded-xl">
                        <p className="flex tracking-wider">{message.username}
                            <span className="text-xs pl-2 mt-1">{message.time}</span>
                        </p>
                        <div className="text-discordTextMain">
                            <p className="align-middle">{ReactEmoji.emojify(message.text)}</p>
                        </div>
                    </div>
                </div>
            )
    )
}

export default Message;