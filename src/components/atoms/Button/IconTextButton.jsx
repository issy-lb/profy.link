// アイコンとテキストを縦並べにするボタン
import styled from "styled-components";
import "../../../styles/color.css";

export const IconTextButton = (props) => {
  const { icon, text } = props;
  return (
    <SContainer>
      <div>
        <SImage src={icon} />
        <SText>{text}</SText>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 68px;
  width: 104px;
  border-radius: 10px;
  border: 1px solid var(--action-success);
  background-color: var(--main-tertiary);
  color: var(--action-success);
  font-family: sans-serif;
`;
const SImage = styled.img`
  width: 27px;
`;
const SText = styled.div`
  margin: 0;
  text-align: center;
  font-size: 12px;
`;
