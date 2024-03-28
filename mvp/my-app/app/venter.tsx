import React, { useState } from 'react';

const Venter: React.FC = () => {
  // State to store the message input and chat messages
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  // Function to handle sending a message
  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>You are currently venting</h1>
    <div>  

    <button>end session</button> 
    <button>change partner</button>



        {/* Displaying chat messages */}
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      {/* Message input box */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* Button to send message */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Venter;