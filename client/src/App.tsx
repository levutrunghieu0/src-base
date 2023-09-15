import React from "react";

import MenuComponent from "./layout/MenuComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
