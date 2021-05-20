// 戻るボタン＋タイトル　があるヘッダー
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderBack = (props) => {
  const { link, title } = props;
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
      <div>　　　</div>
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
