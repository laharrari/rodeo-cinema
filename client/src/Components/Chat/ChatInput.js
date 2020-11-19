import React from 'react';

const ChatInput = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="border-none rounded-none p-5% w-4/5 text-sm outline-none"
      type="text"
      placeholder=" Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="bg-discordMain text-discordText uppercase
    no-underline w-1/5 border-none p-20px inline-block outline-none" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default ChatInput;