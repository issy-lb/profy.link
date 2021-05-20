// バナーリンク
import styled from "styled-components";
export const EditableBannerLink = (props) => {
  const { propImage, propLink } = props;
  return (
    <a href={propLink} style={{ textDecoration: "none" }}>
      <SContainer>
        <SImg src={propImage} />
      </SContainer>
    </a>
  );
};
const SContainer = styled.div`
  position: relative;
  width: 336px;
  margin: 0 auto;
`;

const SImg = styled.img`
  width: 336px;
  height: auto;
  display: block;
`;
