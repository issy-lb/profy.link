// 「戻る」のみのヘッダー
// 「戻る」を押したときにアクションがある
import styled from "styled-components";
import "../../../styles/color.css";

// アイコン
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBell} from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderBackOnly = (props) => {
  const { title, onSave } = props;
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
      <div>　　</div>
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
