// 角丸（半径小さめ）のボタン
import styled from "styled-components";
import "../../../styles/color.css";
export const Button2 = (props) => {
  const { children, active, onClickBtn } = props;
  const button = active ? (
    <SActiveContainer onClick={onClickBtn}>
      <div>{children}</div>
    </SActiveContainer>
  ) : (
    <SInActiveContainer onClick={onClickBtn}>
      <div>{children}</div>
    </SInActiveContainer>
  );
  return <>{button}</>;
};
const SActiveContainer = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--action-success);
  color: var(--common);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 14px;
  font-family: sans-serif;
  border: none;
`;
const SInActiveContainer = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid var(--action-success);
  background-color: var(--main-tertiary);
  color: var(--action-success);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 14px;
  font-family: sans-serif;
  /* border: none; */
  border: var(--action-success) solid 1px;
`;
