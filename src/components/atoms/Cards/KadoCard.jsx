// 角が丸くない、影付きのカード

import styled from "styled-components";
import "../../../styles/color.css";

export const KadoCard = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  width: 344px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 6px var(--shadow);
  background-color: var(--common);
`;
