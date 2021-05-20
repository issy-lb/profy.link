import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
export const NoMenuEditContainer = (props) => {
  const { children, link } = props;
  return (
    <SContainer>
      <Link to={link} style={{ textDecoration: "none" }}>
        <SBorder>{children}</SBorder>
      </Link>
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 344px;
`;
const SBorder = styled.div`
  border: 2px var(--action-success) dashed;
  width: 344px;
  margin: 0 auto;
  position: relative;
  * {
    pointer-events: none;
  }
`;
