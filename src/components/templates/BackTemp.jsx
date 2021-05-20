// ホーム画面に並べるカード（リンクの入り口）
import styled from "styled-components";
import "../../styles/color.css";
import { Footer } from "../atoms/layout/Footer";
import { HeaderBack } from "../atoms/layout/HeaderBack";

export const BackTemp = (props) => {
  const { children, title, link } = props;
  return (
    <SContainer>
      <HeaderBack link={link} title={title} />

      <SBody>{children}</SBody>
      <Footer />
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
`;
