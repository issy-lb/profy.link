// 角丸のアイコン
// 影あり
// 受け取った画像URLの画像を表示

import styled from "styled-components";
import "../../../styles/color.css";

export const KadomaruIcon = (props) => {
  const { image, size } = props;
  return (
    <>
      <SImg width={size} height={size} src={image} />
    </>
  );
};

const SImg = styled.img`
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 3px 6px var(--shadow);
`;
