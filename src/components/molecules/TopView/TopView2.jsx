// Module     : TopViewのデザインタイプ２
// Author     : okabe
// LastUpdate : 2021/05/18
// Since      : 2021/05/02
// none       :　高さ可変対応（ishida）

import styled from "styled-components";
import "../../../styles/color.css";
import { TextTopView } from "../../atoms/Text/TextTopView";
import { ProfileIconMaru } from "../../atoms/Icon/ProfileIconMaru";
import { PhotoCardDef } from "../../atoms/Cards/PhotoCardDef";

export const TopView2 = (props) => {
  const { TopView } = props;
  return (
    <SContainer>
      <SVisual>
        <PhotoCardDef
          height={"208px"}
          image={TopView.coverPhoto.image}
          alt={TopView.coverPhoto.a}
        />
        <SContent>
          <ProfileIconMaru
            size="130px"
            image={TopView.profilePhoto.image}
            alt={TopView.profilePhoto.alt}
          />
        </SContent>
      </SVisual>
      <TextTopView
        propTitle={TopView.title}
        propSubTitle={TopView.subTitle}
        propDescription={TopView.description}
      />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 344px;
`;
const SContent = styled.div`
  text-align: center;
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
`;
const SVisual = styled.div`
  height: 235px;
  position: relative;
`;
