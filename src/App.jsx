import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SliderBar from "./Components/SliderBar";
import ProdHouse from "./Components/ProdHouse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <SliderBar />
      <ProdHouse />
    </div>
  );
}

export default App;
