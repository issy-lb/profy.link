import React from "react";
import styled from "styled-components";

import { EditHomeTemp } from "../templates/EditHomeTemp";
import { GalleryView } from "../molecules/GalleryView/GalleryView";
import { MovieView } from "../atoms/Movie/MovieView";
import { EditContainer } from "../molecules/EditContainer/EditContainer";
import { ButtonLinkList } from "../organisms/ButtonLinkList";
import { BannerLink } from "../atoms/Banner/BannerLink";
import { TextView } from "../atoms/Text/TextView";
import { LinkSettingButtons } from "../molecules/Button/LinkSettingButtons";
import { Link } from "react-router-dom";
import { IconTextButton2 } from "../atoms/Button/IconTextButton2";
import { Brank } from "../atoms/layout/Brank";
const snsList = [
  {
    propIconId: "ICID001",
    propTitle: "Instagram",
    propDisc: "いつでもハッピーお届け！"
  },
  {
    propIconId: "ICID002",
    propTitle: "Twitter",
    propDisc: "いつでもハッピーお届け！ってわけじゃねえだろう！！"
  },
  {
    propIconId: "ICID007",
    propTitle: "TikTok",
    propDisc: "いつでもハッピーお届け！ってわけじゃねえだろう！！"
  }
];
const imageList = [
  {
    propImage:
      "https://images.unsplash.com/photo-1617201834941-0dff6e023ae2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617290578591-a461227d4d16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617261487057-1a0e30613025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617194663454-1009e8fef0ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617201835784-540fae0edb6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617173793304-aab2dff0190d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    propLink: "https://www.google.co.jp/"
  }
];
const SampleEdit = () => {
  return (
    <EditHomeTemp>
      <EditContainer link={"/edit/button-link"}>
        <ButtonLinkList linkList={snsList} />
      </EditContainer>
      <br />
      <EditContainer link={"/edit/gallery-view"}>
        <GalleryView imageList={imageList} />
      </EditContainer>
      <br />
      <EditContainer link={"/edit/banner-link"}>
        <BannerLink
          img={
            "https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </EditContainer>
      <br />
      <EditContainer link={"/edit/movie-view"}>
        <MovieView propLink={"https://www.youtube.com/embed/10ict3GCxGY"} />
      </EditContainer>
      <br />
      <EditContainer link={"/edit/text-view"}>
        <TextView
          propTitle={"毎日更新中"}
          propDisc={
            "フリーランスで執筆、デザイン制作してます | 言葉とアートと音楽が好物 | ニューヨーク州立大学美術史学科卒"
          }
        />
      </EditContainer>
      <br />
      <EditContainer link={"/edit/banner-link"}>
        <BannerLink
          propImage={
            "https://images.unsplash.com/photo-1618767628693-2144aff816da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
        />
      </EditContainer>
      <br />
      <Brank height={"50px"} />
      <Link style={{ textDecoration: "none" }} to="/edit/add-parts">
        <IconTextButton2
          active={true}
          icon={"https://profy-59433.web.app/assets/icon/add.svg"}
        >
          セクション
        </IconTextButton2>
      </Link>
      <Brank height={"150px"} />
      <SFroat>
        <LinkSettingButtons />
      </SFroat>
    </EditHomeTemp>
  );
};
export default SampleEdit;

const SFroat = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);

  height: 90px;
  display: flex;
`;
