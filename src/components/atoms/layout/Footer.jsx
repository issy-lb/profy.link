// フッター
import styled from "styled-components";
import { Brank } from "./Brank";
export const Footer = () => {
  return (
    <>
      <Brank height={"30px"} />
      <SFooterTitle src="https://profy-59433.firebaseapp.com/assets/logo/footerTitle.svg" />
      <SCopyRight src="https://profy-59433.firebaseapp.com/assets/logo/copyRight.svg" />
      <Brank height={"20px"} />
    </>
  );
};

const SFooterTitle = styled.img`
  display: block;
  margin-top: 30px;
  margin-left: 22px;
  margin-bottom: 20px;
`;

const SCopyRight = styled.img`
  display: block;
  margin: 0 auto;
`;
