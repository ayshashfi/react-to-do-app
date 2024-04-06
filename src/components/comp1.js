
import React, { useState } from "react";

function Comp1() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // State to control whether to show the message or not

  // Function to handle button click
  const handleClick = () => {
    setMessage('You are logged in!'); // Set the message
    setShowMessage(true); // Show the message
  }

  return (
    <div>
      {showMessage ? ( // Conditionally render message based on the state
        <p>{message}</p>
      ) : (
        <p>Please login</p>
      )}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Comp1;

