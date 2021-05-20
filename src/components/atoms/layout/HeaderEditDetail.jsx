// 戻るボタン＋タイトル＋右上保存＋ゴミ箱　があるヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderEditDetail = (props) => {
  const { title, changeFlag, onSave, onDelete, onBack } = props;
  const onSaveBtn = () => {
    onSave();
  };
  return (
    <SContainer>
      {/* <Link style={{ textDecoration: "none" }} to={link}> */}
      <SButton onClick={onBack}>
        <SBack>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px" }}
          />
          戻る
        </SBack>
        {/* </Link> */}
      </SButton>
      <SBarName>{title}</SBarName>
      <div>
        {onDelete ? (
          <SButton style={{ marginRight: "24px" }} onClick={onDelete}>
            <SImage src="https://profy-59433.web.app/assets/icon/garbage-red.svg" />
          </SButton>
        ) : null}
        {changeFlag ? (
          <SButton onClick={onSaveBtn}>
            <SImage
              src="https://profy-59433.web.app/assets/icon/check-active.svg"
              style={{ marginRight: "24px" }}
            />
          </SButton>
        ) : (
          <SButton>
            <SImage
              src="https://profy-59433.web.app/assets/icon/check-inactive.svg"
              style={{ marginRight: "24px" }}
            />
          </SButton>
        )}
      </div>
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
