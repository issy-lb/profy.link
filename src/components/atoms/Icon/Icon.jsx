// ノーマルアイコン
// 受け取った画像URLの画像を表示

import styled from "styled-components";
import "../../../styles/color.css";

export const Icon = (props) => {
  const { size, image, alt } = props;
  return (
    <>
      <SImg width={size} height={size} src={image} alt={alt} />
    </>
  );
};

const SImg = styled.img`
  object-fit: cover;
`;
