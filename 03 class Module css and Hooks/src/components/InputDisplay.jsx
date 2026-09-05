import React, { useState } from 'react';

const InputDisplay = () => {
  const [userName, setUserName] = useState("Share Your Goal");

  return (
    <section className="counter-section">
      <div className="input-card">
        <h2 className="display-name">{userName || "Share Your Goal"}</h2>
        
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Share Your Goal" 
            className="custom-input"
            onChange={(e) => {
    
              setUserName(e.target.value);
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default InputDisplay;