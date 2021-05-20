// Module     : ブランドヘッダー
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/05

import React from "react";
import styled from "styled-components";

export const BrandHeader = (props) => {
  return (
    <>
      <SHeader>
        <SNavibar>
          <SLogo>Profy.link</SLogo>
        </SNavibar>
      </SHeader>
    </>
  );
};
const SHeader = styled.header`
  display: block;
`;

const SNavibar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  align-items: left;
  z-index: 999;
  display: block;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

const SLogo = styled.div`
  top: 13px;
  left: 20px;
  width: 100px;
  height: 31px;
  color: var(--main-accent);
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0px;
`;

export default BrandHeader;
