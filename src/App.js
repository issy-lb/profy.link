import React, { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import ScrollToTop from "./router/ScrollToTop";
import { useSetRecoilState } from "recoil";
import { linkContents } from "./store/linkContents";

import axios from "axios";
export default function App() {
  const setContents = useSetRecoilState(linkContents);
  const user = "testuser";
  const url = "https://profy-api-test.azurewebsites.net/api/users/" + user;
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setCoditntents(res.data[0]);
  //     })
  //     .catch((err) => {});
  //   console.log("API");
  // }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/component">マスターコンポーネント</Link>
        <br />
        <Link to="/home">ホーム</Link>
        <br />
        <Link to="/edit">エディター</Link>
        <br />
        <Link to="/setting">設定</Link>
        <br /> */}
      </div>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}
