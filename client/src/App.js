import React, { useEffect } from "react";
import Main from "./component/Main";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

function App() {
  // const callApi = async () => {
  //   axios.get("/test").then((res) => console.log(res.data.test));
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
