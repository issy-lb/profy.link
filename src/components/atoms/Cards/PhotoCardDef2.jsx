// Module     : TopViewのカバー写真（変形パラレル）
// Author     : okabe
// LastUpdate : 2021/05/15
// Since      : 2021/05/15

import styled from "styled-components";
import "../../../styles/color.css";

export const PhotoCardDef2 = (props) => {
  const { height, image, alt } = props;
  return (
    <SContainer>
      <SCoverImgLong height={height} src={image} alt={alt} />
      <SCoverImgShort height={height} src={image} alt={alt} />
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const SCoverImgLong = styled.img`
  width: 100%;
  display: flex;
  position: absolute;
  object-fit: cover;
  box-shadow: 0px 3px 6px var(--shadow);
  clip-path: path("M13.336,1.89,354.518,0,340.712,74.653,0,74Z");
  transform: matrix(0.98, -0.17, 0.17, 0.98, 9, 67.56);
`;
const SCoverImgShort = styled.img`
  width: 100%;
  display: flex;
  object-fit: cover;
  box-shadow: 0px 3px 6px var(--shadow);
  clip-path: path("M10.563,1.89,280.792,0,269.856,74.653,0,74Z");
  transform: matrix(0.98, -0.17, 0.17, 0.98, 62.48, 174.82);
`;
