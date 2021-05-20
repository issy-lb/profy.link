// 戻るボタン＋タイトル＋右上保存＋ゴミ箱　があるヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderEditHome = (props) => {
  const { link, title, changeFlag, onSave, onPreview } = props;
  const onSaveBtn = () => {
    onSave();
  };
  return (
    <SContainer>
      <Link style={{ textDecoration: "none" }} to={link} styleName="link">
        <SBack>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px" }}
          />
          戻る
        </SBack>
      </Link>
      <SBarName>{title}</SBarName>
      <SRight>
        <SButton style={{ marginRight: "24px" }} onClick={onPreview}>
          <SImage src="https://profy-59433.web.app/assets/icon/preview.svg" />
        </SButton>
        {changeFlag ? (
          <SButton onClick={onSaveBtn}>
            <SOpen>公開</SOpen>
          </SButton>
        ) : (
          <SNotOpen>公開</SNotOpen>
        )}
      </SRight>
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
  justify-content: space-between;
  font-family: sans-serif;
  position: fixed;
  left: 0;
  top: 0;
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
const SOpen = styled.div`
  color: var(--action-error);
  font-size: 16px;
  font-family: sans-serif;
`;
const SNotOpen = styled.div`
  color: gray;
  font-size: 16px;
  font-family: sans-serif;
`;

const SRight = styled.div`
  height: 50px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
