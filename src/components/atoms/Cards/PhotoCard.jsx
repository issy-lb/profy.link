// Module     : TopViewのカバー写真
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";

export const PhotoCard = (props) => {
  const { height, image, alt, children } = props;
  const BgStyle = {
    background: `url(${image}) center center / cover no-repeat`,
    backgroundColor: "rgba(255,255,255,0.4)",
    backgroundBlendMode: "lighten"
  };
  return (
    <SContainer style={BgStyle}>
      {/* <SCoverImg height={height} src={image} alt={alt} /> */}
      {children}
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 344px;
`;
const SCoverImg = styled.img`
  width: 344px;
  display: flex;
  object-fit: cover;
  box-shadow: 0px 3px 6px var(--shadow);
`;
