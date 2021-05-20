// Module     : ヘッダーフッター有ページテンプレート
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/04

import styled from "styled-components";
import "../../styles/color.css";
import { BrandHeader } from "../atoms/layout/BrandHeader";
import { Footer } from "../atoms/layout/Footer";

export const BrandTemp = (props) => {
  const { children } = props;
  return (
    <SBody>
      <BrandHeader />
      <SConteiner>{children}</SConteiner>
      <Footer />
    </SBody>
  );
};
const SBody = styled.body`
  /* background-color: var(--background); */
  margin: 0;
  padding: 0;
`;
const SConteiner = styled.div`
  margin: 0;
`;
