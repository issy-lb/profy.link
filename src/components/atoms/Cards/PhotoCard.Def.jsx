// Module     : TopViewのカバー写真（変形）
// Author     : okabe
// LastUpdate : 2021/05/15
// Since      : 2021/05/15

import styled from "styled-components";
import "../../../styles/color.css";

export const PhotoCardDef = (props) => {
  const { height, image, alt } = props;
  return (
    <SContainer>
      <SCoverImg height={height} src={image} alt={alt} />
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const SCoverImg = styled.img`
  width: 344px;
  display: flex;
  object-fit: cover;
  box-shadow: 0px 3px 6px var(--shadow);
`;
