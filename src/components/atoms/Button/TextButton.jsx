// テキストボタン
import styled from "styled-components";
import "../../../styles/color.css";
export const TextButton = (props) => {
  const { children, onClickBtn } = props;
  return (
    <SButton onClick={onClickBtn}>
      <SText>{children}</SText>
    </SButton>
  );
};
const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
const SText = styled.p`
  font-size: 16px;
  text-decoration: underline;
  color: var(--action-success);
`;
