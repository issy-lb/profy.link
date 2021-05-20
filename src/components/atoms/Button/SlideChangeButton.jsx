// スライドを変えるボタン

import styled from "styled-components";
import "../../../styles/color.css";
export const SlideChangeButton = (props) => {
  const { children, active } = props;
  const button = active ? (
    <SActiveContainer>
      <div>{children}</div>
    </SActiveContainer>
  ) : (
    <SInActiveContainer>
      <div>{children}</div>
    </SInActiveContainer>
  );
  return <>{button}</>;
};
const SActiveContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--action-success);
  color: var(--common);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: sans-serif;
  border: 1px solid var(--action-success);
`;
const SInActiveContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--action-success);
  background-color: var(--main-tertiary);
  color: var(--action-success);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: sans-serif;
`;
