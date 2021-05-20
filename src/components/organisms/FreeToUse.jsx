// Module     : 会員登録導線パーツ
// Author     : okabe
// LastUpdate : 2021/05/16
// Since      : 2021/05/16
import styled from "styled-components";
import "../../styles/color.css";
export const FreeToUse = () => {
  return (
    <SContainer>
      <SButton>今すぐ使ってみる</SButton>
      <SText>
        既にアカウントを持っていますか？
        <a href="/login">
          <SLink>ログイン</SLink>
        </a>
      </SText>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  padding: 8px;
`;

const SButton = styled.button`
  width: 320px;
  height: 56px;
  margin: 0;
  padding: 16px;
  font-size: 16px;
  color: var(--action-success);
  background: var(--main-tertiary);
  border: black;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
`;

const SText = styled.p`
  font-size: 16px;
  color: var(--main-secondry);
`;

const SLink = styled.p`
  text-decoration: underline;
  color: var(--action-success);
  display: inline-block;
`;
