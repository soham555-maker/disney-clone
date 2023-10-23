import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SliderBar from "./Components/SliderBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <SliderBar />
    </div>
  );
}

export default App;
