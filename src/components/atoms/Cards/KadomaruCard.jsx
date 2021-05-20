// 影付き、四隅が角丸のカード
import styled from "styled-components";
import "../../../styles/color.css";

export const KadomaruCard = (props) => {
  const { children, bg } = props;
  const style = {
    backgroundImage: `url("${bg}")`
  };
  return <SCard style={style}>{children}</SCard>;
};

const SCard = styled.div`
  width: 344px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 3px 6px var(--shadow);
  padding: 3px 5px;
  background-size: cover;
`;
