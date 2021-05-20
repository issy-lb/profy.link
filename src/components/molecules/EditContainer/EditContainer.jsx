import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../styles/color.css";
import { EditSectionMenu } from "../../atoms/Menu/EditSectionMenu";
export const EditContainer = (props) => {
  const {
    children,
    link,
    onSwap,
    sectionOrder,
    lastFlag,
    deleteSection
  } = props;
  return (
    <SContainer>
      <Link to={link} style={{ textDecoration: "none" }}>
        <SBorder>{children}</SBorder>
      </Link>
      <EditSectionMenu
        onSwap={onSwap}
        deleteSection={deleteSection}
        sectionOrder={sectionOrder}
        lastFlag={lastFlag}
      />
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
