import React from "react";
import Main from "./component/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
