import React from "react";
import styled from "styled-components";
import { HeaderBack } from "../atoms/layout/HeaderBack";

const Contact = () => {
  return (
    <>
      <HeaderBack link={"/setting"} title={"お問い合わせ"} />
      <div style={{ marginTop: "100px" }}></div>
      <SFormContainer>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScGmalKDwgt9SywJCBI-a5GMDfgRuiBtvXt_oRfildXG1Z2Yg/viewform?embedded=true"
          width="350"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          読み込んでいます…
        </iframe>
      </SFormContainer>
    </>
  );
};
export default Contact;

const SFormContainer = styled.div`
  width: 350px;
  margin: auto;
`;
