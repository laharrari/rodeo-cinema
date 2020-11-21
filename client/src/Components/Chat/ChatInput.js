import React from 'react';

function ChatInput({ setMessage, sendMessage, message }) {
  return (
      <form className="form flex justify-between">
        <input
          className="bg-discordMain border-none rounded-none p-5% w-4/5 text-sm outline-none p-1 text-discordTextMain"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="bg-discordMain text-discordTextMain uppercase
        no-underline w-1/6 border-none p-1 inline-block outline-none" onClick={e => sendMessage(e)}>Send</button>
    </form>
  )
}

export default ChatInput;