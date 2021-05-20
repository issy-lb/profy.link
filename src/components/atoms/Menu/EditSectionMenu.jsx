import styled from "styled-components";
import "../../../styles/color.css";

export const EditSectionMenu = (props) => {
  const { onSwap, sectionOrder, lastFlag, deleteSection } = props;
  const onUP = () => {
    onSwap(sectionOrder, sectionOrder - 1);
  };
  const onDown = () => {
    onSwap(sectionOrder, sectionOrder + 1);
  };

  return (
    <SContainer>
      {sectionOrder === 1 ? null : (
        <SButton onClick={onUP}>
          <SIcon src="https://profy-59433.web.app/assets/icon/arrow-up-circle.svg" />
        </SButton>
      )}
      {lastFlag ? null : (
        <SButton onClick={onDown}>
          <SIcon src="https://profy-59433.web.app/assets/icon/arrow-down-circle.svg" />
        </SButton>
      )}
      <SButton
        onClick={() => {
          deleteSection(sectionOrder);
        }}
      >
        <SIcon src="https://profy-59433.web.app/assets/icon/garbage.svg" />
      </SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  border: 1px var(--action-success) solid;
  background-color: var(--main-tertiary);
  align-content: space-between;
  align-items: center;
  height: 38px;
  box-shadow: -3px 3px 6px var(--shadow);
  position: absolute;
  bottom: 1px;
  right: 1px;
`;
const SIcon = styled.img`
  display: block;
  width: 21.93px;
  height: 21.93px;
  margin: 10px;
`;
const SButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;
