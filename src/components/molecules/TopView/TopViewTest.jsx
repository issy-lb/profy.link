// Module     : TopViewのデザインタイプ１
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";
import { TextTopView } from "../../atoms/Text/TextTopView";
import { PhotoCard } from "../../atoms/Cards/PhotoCard";
import { IconLinks } from "./IconLinks";
import { ProfileIconTest } from "../../atoms/Icon/ProfieleIconTest";

export const TopViewTest = (props) => {
  const { TopView } = props;
  return (
    <SContainer>
      <PhotoCard
        height={"182px"}
        image={TopView.coverPhoto.image}
        alt={TopView.coverPhoto.alt}
      />
      <SContent>
        <ProfileIconTest
          size="135px"
          image={TopView.profilePhoto.image}
          alt={TopView.profilePhoto.alt}
        />
        <TextTopView
          propTitle={TopView.title}
          propSubTitle={TopView.subTitle}
          propDescription={TopView.description}
        />
      </SContent>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 344px;
  height: 352px;
  /* テキストボリュームに併せて可変にしないとダメ */
`;

const SContent = styled.div`
  text-align: center;
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
`;
