// ホームのヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import { Header } from "../../atoms/layout/Header";
import back from "./assets/icon-caret.svg";
// import "./style.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const NoticeHeader = () => {
  return (
    <Header>
      <p> </p>

      <SBarName>お知らせ</SBarName>
      <Link style={{ textDecoration: "none" }} to="/home">
        <SBack>
          戻る
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ marginLeft: "10px" }}
          />
        </SBack>
      </Link>
    </Header>
  );
};

const SBack = styled.div`
  color: var(--action-success);
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  margin-right: 20px;
`;
const SBarName = styled.div`
  color: var(--main-secondry);
  font-size: 20px;
  font-family: sans-serif;
`;
const SInActiveOpen = styled.div`
  color: gray;
  font-size: 16px;
  font-family: sans-serif;
`;
const SActiveOpen = styled.button`
  color: var(--action-error);
  font-size: 16px;
  font-family: sans-serif;
`;
