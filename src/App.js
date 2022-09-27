import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const url = `/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?_wadl
    &type=xml&LAWD_CD=11110&DEAL_YMD=202208&serviceKey=zcjFU2s%2BmkQXYL2DPSsSYXrqXxSqZuPWT5z0c2nVVxLLYuoJCJEg6DrMTfA8dwWA6Y0QSyYlLPAaTzDvbqtkHw%3D%3D`;

  const fetchApi = async () => {
    try {
      axios(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/xml; charset=utf-8",
        },
        withCredentials: true,
        credentials: "same-origin",
      }).then((res) => {
        setList(res.data.response.body.items.item);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={fetchApi}>리스트</button>
      <ul>
        {list.map((item) => (
          <div>
            {item.년}/{item.법정동}/{item.보증금액}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
