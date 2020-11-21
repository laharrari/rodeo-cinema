import React from 'react';

function ChatInfo({ theater }) {
    return (
        <div>
            <div className="text-discordTextMain text-2xl p-3 text-center">
                <div className="bg-discordMain">
                    {theater}
                </div>
            </div>
        </div>
    )
}

export default ChatInfo;