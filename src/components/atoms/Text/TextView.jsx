// バナーリンク
import styled from "styled-components";
import "../../../styles/font.css";
export const TextView = (props) => {
  const { propTitle, propDisc } = props;
  return (
    <SContainer>
      <STitle>{propTitle === "" ? "見出し" : propTitle}</STitle>
      <SDisc>{propDisc === "" ? "本文を入れよう！" : propDisc}</SDisc>
    </SContainer>
  );
};
const SContainer = styled.div`
  width: 324px;
  padding: 10px;
  margin: 0 auto;
  font-family: sans-serif;
  background: var(--common);
`;
const STitle = styled.h2`
  font-size: 24px;
  color: var(--main-dark);
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
`;
const SDisc = styled.p`
  padding: 0;
  color: var(--main-dark);
  font-size: 16px;
  white-space: pre-wrap;
`;
