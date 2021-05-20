import styled from "styled-components";
import "../../../styles/color.css";

export const CustomizeModal = (props) => {
  const { open, setOpen, children, height, width } = props;
  if (open) {
    return (
      <SContainer>
        <SBody style={{ width: width, height: height }}>
          <SButton onClick={() => setOpen(false)}>
            <img src="https://profy-59433.web.app/assets/icon/close.svg" />
          </SButton>
          {children}
        </SBody>
      </SContainer>
    );
  } else {
    return null;
  }
};
const SContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const SBody = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 3px 6px var(--shadow);
  text-align: center;
`;

const SButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
