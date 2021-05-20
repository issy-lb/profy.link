// ホーム画面に並べるカード（リンクの入り口）
import styled from "styled-components";
import "../../styles/color.css";
import { Brank } from "../atoms/layout/Brank";
import { Footer } from "../atoms/layout/Footer";
import { HeaderBack } from "../atoms/layout/HeaderBack";

export const LinkSettingTemp = (props) => {
  const { children, title, link, subTitle, disc } = props;
  return (
    <SContainer>
      <HeaderBack link={link} title={title} />

      <SBody>
        <STitle>{subTitle}</STitle>
        <SDisc>{disc}</SDisc>
        <Brank height={"30px"} />
        {children}
      </SBody>
    </SContainer>
  );
};
const SContainer = styled.div`
  margin: 0;
  background-color: var(--background);
  min-height: 100vh;
  font-family: sans-serif;
`;

const SBody = styled.div`
  padding-top: 60px;
  min-height: 75vh;
  margin: 0 auto;
`;
const STitle = styled.h2`
  margin-left: 25px;
  font-size: 24px;
  color: var(--main-secondry);
  padding: 0px;
  margin-bottom: 20px;
`;
const SDisc = styled.p`
  font-size: 16px;
  margin: 0 25px;
  margin-bottom: 24px;
  padding: 0;
  color: var(--main-secondry);
`;
