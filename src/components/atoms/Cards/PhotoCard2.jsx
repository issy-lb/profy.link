// 編集画面用

import styled from "styled-components";
import "../../../styles/color.css";

export const PhotoCard2 = (props) => {
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
