import styled from "styled-components";
import "../../../styles/color.css";

export const QRModal = (props) => {
  const { show, setShow, link } = props;
  if (show) {
    return (
      <SContainer>
        <SBody>
          <SButton onClick={() => setShow(false)}>
            <img src="https://profy-59433.web.app/assets/icon/close.svg" />
          </SButton>
          <STitle>あなたのリンクをシェアできます</STitle>
          <img
            src={`http://chart.apis.google.com/chart?cht=qr&chs=200x200&chl=${link}`}
          />
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
`;

const SBody = styled.div`
  position: relative;
  width: 328px;
  height: 359px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 3px 6px var(--shadow);
  text-align: center;
`;

const STitle = styled.h2`
  margin-top: 70px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 200;
  color: var(--main-secondry);
`;
const SButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  bottom: -20px;
  left: 140px;
  border: none;
  background-color: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
