// ホームのヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import { Header } from "../../atoms/layout/Header";
import back from "./assets/icon-caret.svg";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const EditHomeHeader = (props) => {
  const { changeFlag, clickOpen } = props;
  return (
    <Header>
      <Link style={{ textDecoration: "none" }} to="/home">
        <SBack>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px" }}
          />
          戻る
        </SBack>
      </Link>
      <SBarName>編集</SBarName>
      {changeFlag ? (
        <SActiveOpen>公開</SActiveOpen>
      ) : (
        <SInActiveOpen>公開</SInActiveOpen>
      )}
    </Header>
  );
};

const SBack = styled.div`
  color: var(--action-success);
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: sans-serif;
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
