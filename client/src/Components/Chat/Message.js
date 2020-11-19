import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (message.user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ?   (
                <div className="">
                    <div className="">
                        <p className="">{trimmedName}</p>
                        <p className="">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="">
                    <div className="">
                        <p className="">{message.user}</p>
                        <p className="">{ReactEmoji.emojify(message.text)}</p>
                    </div>
                </div>
            )
    )
}

export default Message;