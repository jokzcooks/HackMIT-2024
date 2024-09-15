import React, { useEffect, useState } from 'react';
import "./chat.css"

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(()=>{
    setMessages([...messages, `Hey Cole Nangle, Kanika,        

I feel you're a great match because:

**[Reason 1 - based on personality traits]**
Cole, being detail-oriented and a pro in software/web development, aligns well with Kanika’s outgoing nature. Kanika’s enthusiasm and inclination towards entrepreneurship will complement Cole’s methodical approach by bringing energy to brainstorming and ideation sessions. Together, they can create a balanced environment where Cole’s focus on security and precision meets Kanika’s dynamic and innovative thinking.

**[Reason 2 - based on strengths and skills]**
Both have strong backgrounds in programming languages, including Python and Java. Cole’s extensive experience with various frameworks and databases can synergize well with Kanika’s backend focus. This allows them to collaboratively work on a full-stack solution, with Cole handling frontend security measures and design elements, while Kanika can optimize backend processes, especially in a SaaS platform context.

**[Reason 3 - based on shared vision and goals]**
Both individuals display an ambitious vision for development, with Kanika focused on building a SaaS-based platform and Cole having a successful background in application development and security. Their common interest in creating robust applications can drive them to create something innovative together, with shared goals of practical entrepreneurship and utilizing technical skills to solve real-world problems.

You have a match percentage of **85%**.

Get hacking!!`])
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  const handleBotResponse = () => {
    // Simulate a bot response with a delay
    setTimeout(() => {
      setMessages([...messages, { sender: 'bot', text: 'Hello there!' }]);
    }, 1000);
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        <div
            key={"1131"}
            className={`message 'bot'}`}
          >
            <p>{`Hey Cole Nangle, Kanika,        

I feel you're a great match because:

**[Reason 1 - based on personality traits]**
Cole, being detail-oriented and a pro in software/web development, aligns well with Kanika’s outgoing nature. Kanika’s enthusiasm and inclination towards entrepreneurship will complement Cole’s methodical approach by bringing energy to brainstorming and ideation sessions. Together, they can create a balanced environment where Cole’s focus on security and precision meets Kanika’s dynamic and innovative thinking.

**[Reason 2 - based on strengths and skills]**
Both have strong backgrounds in programming languages, including Python and Java. Cole’s extensive experience with various frameworks and databases can synergize well with Kanika’s backend focus. This allows them to collaboratively work on a full-stack solution, with Cole handling frontend security measures and design elements, while Kanika can optimize backend processes, especially in a SaaS platform context.

**[Reason 3 - based on shared vision and goals]**
Both individuals display an ambitious vision for development, with Kanika focused on building a SaaS-based platform and Cole having a successful background in application development and security. Their common interest in creating robust applications can drive them to create something innovative together, with shared goals of practical entrepreneurship and utilizing technical skills to solve real-world problems.

You have a match percentage of **85%**.

Get hacking!!`}</p>
          </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;