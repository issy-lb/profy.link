// 戻るボタン＋タイトル＋右上保存　があるヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderTopViewEdit = (props) => {
  const { link, title, changeFlag, onSaveBtn } = props;

  return (
    <SContainer>
      <Link style={{ textDecoration: "none" }} to={link}>
        <SBack>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ marginRight: "10px" }}
          />
          戻る
        </SBack>
      </Link>
      <SBarName>{title}</SBarName>
      <div>
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
