import React from 'react';
import ReactEmoji from 'react-emoji';

function Message({ message, name }) {
    let isSentByCurrentUser = false;
    
    const trimmedName = name.trim().toLowerCase();

    if (message.username === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        // isSentByCurrentUser
        // ?   (
        //         <div className="flex justify-end">
        //             <p className="flex center tracking-wider pr-10">{trimmedName} - {message.time}</p>
        //                 <div className="">
        //                     <p className="">{ReactEmoji.emojify(message.text)}</p>
        //                 </div>
        //         </div>
        //     )
        //     : (
        //         <div className="flex justify-start">
        //             <p className="flex center tracking-wider pl-10">{message.username} - {message.time}</p>
        //                 <div className="">
        //                     <p className="">{ReactEmoji.emojify(message.text)}</p>
        //                 </div>
        //         </div>
        //     )

        <div className="flex justify-start mb-2 mt-2 pl-2 pr-2">
            <div className="bg-discordMain text-discordText p-2 rounded-xl">
                <p className="flex center tracking-wider">{message.username}    {message.time}</p>
                <div className="break-all">
                    <p className="align-middle">{ReactEmoji.emojify(message.text)}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;