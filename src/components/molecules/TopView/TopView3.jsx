// Module     : TopViewのデザインタイプ３
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";
import { ProfileIconMaruLarge } from "../../atoms/Icon/ProfileIconMaruLarge";
import { PhotoCard } from "../../atoms/Cards/PhotoCard";

export const TopView3 = (props) => {
  const { TopView } = props;
  return (
    <SContainer>
      <PhotoCard
        height={"358px"}
        image={TopView.coverPhoto.image}
        alt={TopView.coverPhoto.alt}
      >
        <SContent>
          <STitle>{TopView.title}</STitle>
          <SSubTitle>{TopView.subTitle}</SSubTitle>
          <ProfileIconMaruLarge
            size="200px"
            image={TopView.profilePhoto.image}
            alt={TopView.profilePhoto.alt}
          />
          <SDescription>{TopView.description}</SDescription>
        </SContent>
      </PhotoCard>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 344px;
  /* height: 352px; */
  /* テキストボリュームに併せて可変にしないとダメ */
`;
const SContent = styled.div`
  text-align: center;
  padding-top: 12px;
`;
const STitle = styled.h2`
  font-size: 24px;
  color: var(--main-dark);
  margin: 0;
  padding: 0;
  /* height: 36px; */
`;
const SSubTitle = styled.p`
  padding: 0;
  margin-top: 0;
  color: var(--main-secondry);

  font-size: 16px;
  /* height: 24px; */
`;
const SDescription = styled.p`
  padding: 0;
  margin: 0;
  padding: 20px 0px;

  color: var(--main-dark);
  font-size: 16px;
  /* height: 34px; */
  white-space: pre-wrap;
`;
