// パーツを追加するためのカード
import styled from "styled-components";
import "../../../styles/color.css";
import { Button1 } from "../Button/Button1";
export const AddPartsCard = (props) => {
  const { title, children } = props;
  return (
    <SContainer>
      <STitle>{title}</STitle>
      {children}
      <Button1>追加</Button1>
    </SContainer>
  );
};

const SContainer = styled.div`
  background: var(--common);
  width: 332px;
  margin: auto;
`;
const STitle = styled.h2`
  font-size: 20px;
  color: var(--main-secondry);
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap");
  font-family: "Noto Sans JP", sans-serif;
`;
