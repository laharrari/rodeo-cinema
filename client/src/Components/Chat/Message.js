import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message, name }) {
    let isSentByCurrentUser = false;
    console.log(message);
    const trimmedName = name.trim().toLowerCase();

    if (message.username === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ?   (
                <div className="">
                    <div className="">
                        <p className="">{trimmedName} - {message.time}</p>
                        <p className="">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="">
                    <div className="">
                        <p className="">{message.username} - {message.time}</p>
                        <p className="">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
    )
}

export default Message;