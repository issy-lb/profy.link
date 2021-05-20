// ホームのヘッダー
import styled from "styled-components";
import "../../../styles/color.css";
import { Header } from "../../atoms/layout/Header";

import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <Header>
      <Link to="/notice">
        <SIcon src="https://profy-59433.web.app/assets/icon/bell.svg" />
      </Link>
      <SBarName>ホーム</SBarName>
      <Link to="/setting">
        <SIcon src="https://profy-59433.web.app/assets/icon/setting.svg" />
      </Link>
    </Header>
  );
};

const SIcon = styled.img`
  color: var(--main-secondry);
  display: block;
  align-items: center;
  font-size: 24px;
  margin-right: 25px;
`;
const SBarName = styled.div`
  color: var(--main-secondry);
  font-size: 20px;
  font-family: sans-serif;
`;
