import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import { EditSectionMenu } from "../../atoms/Menu/EditSectionMenu";
export const FlexEditContainer = (props) => {
  const { children, link } = props;
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <SBorder>
        {children}
        <EditSectionMenu />
      </SBorder>
    </Link>
  );
};

const SBorder = styled.div`
display:inline-block;
  border: 2px var(--action-success) dashed;
  margin: 0 auto;
  position: relative;
  * {
    pointer-events: none;
  }
`;
