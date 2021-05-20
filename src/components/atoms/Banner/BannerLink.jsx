// バナーリンク
import styled from "styled-components";
export const BannerLink = (props) => {
  const { propImage, propLink } = props;
  return (
    <a href={propLink} style={{ textDecoration: "none" }}>
      <SImg src={propImage} />
    </a>
  );
};
const SImg = styled.img`
  width: 336px;
  height: auto;
  display: block;
  margin: 0 auto;
`;
