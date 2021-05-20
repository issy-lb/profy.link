import styled from "styled-components";
import "../../../styles/color.css";

export const GalleryView = (props) => {
  const { imageList } = props;
  const images = imageList.map((image) => {
    return (
      <a href={image.propLink}>
        <SImage src={image.propImage} />
      </a>
    );
  });
  return <SGallery>{images}</SGallery>;
};

const SGallery = styled.div`
  width: 340px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin-bottom: 20px;
`;
