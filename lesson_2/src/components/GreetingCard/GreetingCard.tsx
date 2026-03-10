import React, { useState } from 'react';
import './GreetingCard.css';

export interface GreetingCardProps {
  name: string;
  gender: 'זכר' | 'נקבה';
  image?: string;
  message?: string;
}

function GreetingCard(props: GreetingCardProps) {
  const { name, gender, image, message } = props;
  const [customMessage, setCustomMessage] = useState('');

  function sendGreeting() {
    alert('מזל טוב! הברכה נשלחה בהצלחה');
  }

  const cardClass = gender === 'זכר' ? 'card-boy' : 'card-girl';

  return (
    <div className={`greeting-card ${cardClass}`}>
      <h2>מזל טוב ל{name}! 👶</h2>
      
      {image && <img src={image} alt="תמונה" className="card-image" />}
      
      <p className="default-message">{message || 'ברכות והצלחה!'}</p>
      
      <div className="custom-message-section">
        <input
          type="text"
          placeholder="כתבי ברכה אישית..."
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          className="message-input"
        />
        {customMessage && <p className="custom-message">"{customMessage}"</p>}
      </div>
      
      <button onClick={sendGreeting} className="send-button">
        שלח ברכה 
      </button>
    </div>
  );
}

export default GreetingCard;
