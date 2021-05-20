// ボタンリンクの詳細編集用ヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderButtonLinkDetail = (props) => {
  const { title, onSave, onDelete } = props;
  return (
    <SContainer>
      <SButton>
        <SBack onClick={onSave}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px" }}
          />
          戻る
        </SBack>
      </SButton>
      <SBarName>{title}</SBarName>
      <SButton style={{ marginRight: "24px" }} onClick={onDelete}>
        <SImage src="https://profy-59433.web.app/assets/icon/garbage-red.svg" />
      </SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  background-color: var(--common);
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  position: fixed;
  z-index: 300;
`;
const SBack = styled.div`
  color: var(--action-success);
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const SBarName = styled.div`
  color: var(--main-secondry);
  font-size: 20px;
`;
const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
const SImage = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`;
