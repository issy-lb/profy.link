// プロフィールアイコン丸型
//　「KadomaruIcon.jsx」「Icon.jsx」など他パーツとマージできるかも

import styled from "styled-components";
import "../../../styles/color.css";

export const ProfileIconMaru = (props) => {
  const { size, image, alt } = props;
  return (
    <>
      <SImg width={size} height={size} src={image} alt={alt} />
    </>
  );
};

const SImg = styled.img`
  border-radius: 65px;
  object-fit: cover;
  box-shadow: 0px 3px 6px var(--shadow);
`;
