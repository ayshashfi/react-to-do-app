import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button
    onClick={() => {
        // Check if inputText is empty before adding the item
        if (inputText.trim() === "") {
            // If input is empty, return early without adding an item
            return;
        }
        
        // If input is not empty, call the onAdd function
        props.onAdd(inputText);
        
        // Clear the input field
        setInputText("");
    }}
>
    <span>Add</span>
</button>

        </div>
    );
}

export default InputArea;
