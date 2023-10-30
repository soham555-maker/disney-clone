import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SliderBar from "./Components/SliderBar";
<<<<<<< Updated upstream
=======
import ProdHouse from "./Components/ProdHouse";
import RenderGeneraList from "./Components/RenderGeneraList";
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <SliderBar />
<<<<<<< Updated upstream
=======
      <ProdHouse />
      <RenderGeneraList />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
