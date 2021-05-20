// 角丸（半径大きめ）のボタン
import styled from "styled-components";
import "../../../styles/color.css";
import "../../../styles/font.css";
export const Button1 = (props) => {
  const { children, active, onClickBtn } = props;
  const button = active ? (
    <SActiveContainer onClick={onClickBtn}>
      <SButton>{children}</SButton>
    </SActiveContainer>
  ) : (
    <SInActiveContainer>
      <div>{children}</div>
    </SInActiveContainer>
  );
  return <>{button}</>;
};
const SActiveContainer = styled.div`
  width: 156px;
  height: 48px;
  border-radius: 1000px;
  background-color: var(--action-success);
  color: var(--common);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: auto;
  font-family: sans-serif;
`;
const SInActiveContainer = styled.div`
  width: 156px;
  height: 48px;
  border-radius: 1000px;
  background-color: var(--main-tertiary);
  color: var(--main-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: auto;
  font-family: sans-serif;
`;
const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  color: var(--common);
  font-size: 20px;
  font-family: sans-serif;
`;
