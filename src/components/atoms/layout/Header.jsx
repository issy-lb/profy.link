// ホームのヘッダー
import styled from "styled-components";
import "../../../styles/color.css";

export const Header = (props) => {
  const { children } = props;
  return <SContainer>{children}</SContainer>;
};

const SContainer = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  background-color: var(--common);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 300;
`;
