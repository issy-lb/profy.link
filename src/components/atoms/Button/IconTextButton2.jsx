// アイコンとテキストを横に並べにするボタン
import styled from "styled-components";
import "../../../styles/color.css";
export const IconTextButton2 = (props) => {
  const { children, active, icon } = props;
  const button = active ? (
    <SActiveContainer>
      <SImage src={icon} />
      <div>{children}</div>
    </SActiveContainer>
  ) : (
    <SInActiveContainer>
      <SImage src={icon} />
      <div>{children}</div>
    </SInActiveContainer>
  );
  return <>{button}</>;
};
const SActiveContainer = styled.div`
  width: 160px;
  height: 48px;
  border-radius: 10px;
  margin: auto;
  background-color: var(--action-success);
  color: var(--common);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: sans-serif;
`;
const SInActiveContainer = styled.div`
  width: 160px;
  height: 48px;
  border-radius: 10px;
  margin: auto;
  border: 1px solid var(--action-success);
  background-color: var(--main-tertiary);
  color: var(--action-success);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: sans-serif;
`;
const SImage = styled.img`
  width: 27px;
  display: block;
  margin-right: 10px;
`;
