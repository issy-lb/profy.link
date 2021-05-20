// Module     : TopViewに表示するテキスト部分
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/font.css";
export const TextTopView = (props) => {
  const { propTitle, propSubTitle, propDescription } = props;
  return (
    <SContainer>
      <STitle>{propTitle}</STitle>
      <SSubTitle>{propSubTitle}</SSubTitle>
      <SDescription>{propDescription}</SDescription>
    </SContainer>
  );
};
const SContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  display: block;
`;
const STitle = styled.h2`
  font-size: 24px;
  color: var(--main-dark);
  margin: 0;
  padding: 0;
  height: auto;
`;
const SSubTitle = styled.p`
  padding: 0;
  margin-top: 0;
  color: var(--main-secondry);
  font-size: 16px;
  height: auto;
`;
const SDescription = styled.p`
  padding: 0;
  margin: 0;
  color: var(--main-dark);
  font-size: 16px;
  white-space: pre-wrap;
`;
