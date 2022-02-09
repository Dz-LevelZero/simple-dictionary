import { createContext, useState } from "react";
import Header from "./components/Header";

// Create Context
export const InputContext = createContext();

const App = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider  value={value}>
      <div className="App">
        <Header />
      </div>
    </InputContext.Provider>
  );
}

export default App;
