import React from "react";

import MenuComponent from "./layout/MenuComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./routes/routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routers.map((router, _: number) => (
            <Route
              key={router.path}
              path={router.path}
              element={router.component}
            >
              {router.routers &&
                router.routers.map((item, key) => (
                  <Route
                    key={item.path + key}
                    path={item.path}
                    element={item.component}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
