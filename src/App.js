import React, { useState } from "react";
import { model } from "./mainModule";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await model.generateContent(input);
      const text = await result.response.text();
      setResponse(text);
    } catch (error) {
      setResponse("Error fetching response.");
    }
  };

  return (
    <div>
      <textarea
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>{response}</div>
    </div>
  );
};

export default App;
