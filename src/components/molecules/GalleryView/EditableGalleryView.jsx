import styled from "styled-components";
import "../../../styles/color.css";
import { Brank } from "../../atoms/layout/Brank";
import { FlexEditContainer } from "../EditContainer/FlexEditContainer";

export const EditableGalleryView = (props) => {
  const { imageList } = props;
  const images = imageList.map((image) => {
    return (
      <div>
        <FlexEditContainer>
          <SImage src={image.propImage} />
        </FlexEditContainer>
        <Brank height={"20px"} />
      </div>
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
`;
