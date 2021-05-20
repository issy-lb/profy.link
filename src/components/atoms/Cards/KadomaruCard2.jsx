// 影付き、上の2つの角が角丸のカード

import styled from "styled-components";
import "../../../styles/color.css";

export const KadomaruCard2 = (props) => {
  const { children, bg } = props;
  const style = {
    backgroundImage: `url("${bg}")`
  };
  return <SCard style={style}>{children}</SCard>;
};

const SCard = styled.div`
  width: 334px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px 3px 6px var(--shadow);
  padding: 3px 5px;
  background-size: cover;
  background-color: rgba(225, 225, 225, 0.5);
  background-blend-mode: lighten;
`;
