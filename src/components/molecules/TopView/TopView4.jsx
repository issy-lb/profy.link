// Module     : TopViewのデザインタイプ４
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";
import { TextTopView } from "../../atoms/Text/TextTopView";
import { PhotoCardDef2 } from "../../atoms/Cards/PhotoCardDef2";
import { ProfileIconPentagon } from "../../atoms/Icon/ProfileIconPentagon";

export const TopView4 = (props) => {
  const { TopView } = props;
  return (
    <SContainer>
      <SVisual>
        <PhotoCardDef2
          height={"208px"}
          image={TopView.coverPhoto.image}
          alt={TopView.coverPhoto.a}
        />

        <SContent>
          <ProfileIconPentagon
            size={"136px"}
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
  /* テキストボリュームに併せて可変にしないとダメ */
`;

const SContent = styled.div`
  text-align: center;
  position: absolute;
  top: 120px;
  right: 0;
  left: 0;
`;

const SVisual = styled.div`
  height: 275px;
  position: relative;
`;
