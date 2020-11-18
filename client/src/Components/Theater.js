import React from 'react';
import Chat from './Chat';

function Theater(props) {
    return (
        <div>
            <Chat location={ props.location } />
        </div>
    )
}

export default Theater;