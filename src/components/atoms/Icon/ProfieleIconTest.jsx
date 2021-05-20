// プロフィールアイコン五角形型

import styled from "styled-components";
import "../../../styles/color.css";

export const ProfileIconTest = (props) => {
  const { size, image, alt } = props;
  return (
    <>
      <SImg width={size} height={size} src={image} alt={alt} />
    </>
  );
};

const SImg = styled.img`
  object-fit: cover;
  /* border-radius: 50px; */
  clip-path: path(
    "M52.252,9.739a21,21,0,0,1,25.5,0L118.36,40.763a21,21,0,0,1,7.316,22.888L115.618,96.2l-.058.187L109.746,115.2A21,21,0,0,1,89.682,130H40.318a21,21,0,0,1-20.064-14.8L4.325,63.651A21,21,0,0,1,11.64,40.763Z"
  );
  box-shadow: 0px 3px 6px var(--shadow);
`;
