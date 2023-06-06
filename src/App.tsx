import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage}></Navbar>
    </div>
  );
}

export default App;
