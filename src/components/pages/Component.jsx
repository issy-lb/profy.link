import React, { useState } from "react";
import { SlideBar } from "../atoms/Bar/SlideBar";
import { Button1 } from "../atoms/Button/Button1";
import { Button2 } from "../atoms/Button/Button2";
import { Button3 } from "../atoms/Button/Button3";
import { IconTextButton2 } from "../atoms/Button/IconTextButton2";
import { SlideChangeButton } from "../atoms/Button/SlideChangeButton";
import { MenuCard } from "../atoms/Cards/MenuCard";
import { Brank } from "../atoms/layout/Brank";
import { QRModal } from "../atoms/Mordal/QRModal";
import { LinkSettingButtons } from "../molecules/Button/LinkSettingButtons";
import { EditContainer } from "../molecules/EditContainer/EditContainer";
import { HomeCard } from "../molecules/HomeCard/HomeCard";
import { SwipeIcon } from "../organisms/SwipeIcon";

// おかべ追加
import { TopView1 } from "../molecules/TopView/TopView1";
import { TopView2 } from "../molecules/TopView/TopView2";
import { TopView3 } from "../molecules/TopView/TopView3";
import { TopView4 } from "../molecules/TopView/TopView4";
import { ContentMargin } from "../atoms/layout/ContentMargin";
import { TopViewCard } from "../organisms/TopViewCard";
import { SelectTab } from "../organisms/SelectTab";
import styled from "styled-components";
import "../../styles/color.css";
import { InputField } from "../atoms/Form/InputField";
import { InputLargeField } from "../atoms/Form/InputLargeField";
import { HeaderTopViewEdit } from "../atoms/layout/HeaderTopViewEdit";
import { MovieView } from "../atoms/Movie/MovieView";
import { BackGround } from "../atoms/layout/BackGround";
import { BannerLink } from "../atoms/Banner/BannerLink";
import Preview from "./Preview";
import zIndex from "@material-ui/core/styles/zIndex";
import { MaruAddBtn } from "../atoms/Button/MaruAddBtn";
import { CustomizeMordal } from "../atoms/Mordal/CustomizeModal";

const link = {
  title: "TAKASHI",
  icon:
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  url: "http://profy.link/takashi",
  bg:
    "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1927&q=80"
};

const TopView = {
  id: "2",
  title: "Miku",
  subTitle: "ライフスタイルクリエイター",
  description: "もっと自分らしく、もっとハッピーに",
  profilePhoto: {
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    alt: "Profile Photo"
  },
  coverPhoto: {
    image:
      "https://images.unsplash.com/photo-1601979689063-cb474664e70b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "Profile Cover Photo"
  },
  snsList: [
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/miku427"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
      alt: "Twitter",
      url: "https://twitter.com/miku427x"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/facebook.png",
      alt: "Facebook",
      url: "https://www.facebook.com/"
    }
  ]
};

const Component = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [changeFrag, setChangeFlag] = useState(false);
  const change = (e) => {
    setText(e.target.value);
    console.log("a");
  };
  return (
    <>
      <h3>モーダル</h3>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        モーダル開く
      </button>
      {/* <CustomizeMordal open={open} setOpen={setOpen}></CustomizeMordal>       */}
      <h3>HomeCrd</h3>
      <MaruAddBtn />
      <EditContainer>
        <HomeCard link={link} />
      </EditContainer>
      <h2>Button1</h2>
      <div style={{ display: "flex" }}>
        <Button1 active={false}>ログイン</Button1>
        <Brank width={"10px"} />
        <Button1 active={true}>戻る</Button1>
      </div>
      <br />
      <h2>Button2</h2>
      <div style={{ display: "flex" }}>
        <Button2 active={false}>アイコン選択</Button2>
        <Brank width={"10px"} />
        <Button2 active={true}>選択中</Button2>
      </div>
      <br />
      <h2>IconTextButton2</h2>
      <div style={{ display: "flex" }}>
        <IconTextButton2
          active={true}
          icon={"https://profy-59433.web.app/assets/icon/add.svg"}
        >
          セクション
        </IconTextButton2>
      </div>
      <h2>LinkSettingButtons</h2>
      <LinkSettingButtons />
      <br />
      <h2>MenuCard</h2>
      <MenuCard
        title={"写真"}
        img={
          "https://images.unsplash.com/photo-1618764073687-7679711d132b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      />
      <br />
      <h2>SlideChangeButton</h2>
      <div style={{ display: "flex" }}>
        <SlideChangeButton active={false}>1</SlideChangeButton>
        <Brank width={"10px"} />
        <SlideChangeButton active={true}>2</SlideChangeButton>
        <Brank width={"10px"} />
        <SlideChangeButton active={false}>3</SlideChangeButton>
      </div>
      <br />
      <h2>SlideBar</h2>
      <div style={{ display: "flex" }}>
        <SlideBar active={true} />
        <Brank width={"5px"} />
        <SlideBar active={false} />
        <Brank width={"5px"} />
        <SlideBar active={false} />
      </div>
      <br />
      <h2>スワイプアイコン</h2>
      <SwipeIcon />
      <Button3 id={1} selectedId={1}>
        a
      </Button3>
      <QRModal />
      <br />
      {/* ----------------------TopView1--------------------- */}
      <SH2>TopView1</SH2>
      <TopView1 TopView={TopView} />
      <ContentMargin />
      {/* ----------------------TopView2--------------------- */}
      <SH2>TopView2</SH2>
      <TopView2 TopView={TopView} />
      <ContentMargin />
      {/* ----------------------TopView3--------------------- */}
      <SH2>TopView3</SH2>
      <TopView3 TopView={TopView} />
      <ContentMargin />
      {/* ----------------------TopView4--------------------- */}
      <SH2>TopView4</SH2>
      <TopView4 TopView={TopView} />
      <ContentMargin />
      {/* ----------------------TopView--------------------- */}
      {/* [TopView.id]を1~4に変更するとテンプレート変わる */}
      <SH2>TopViewCard</SH2>
      {/* <CountButton TopView={TopView} /> */}
      <p style={{ textAlign: "center" }}>テンプレート{TopView.id}</p>
      <SContainer>
        <SListFlex>
          <SlideChangeButton active={false}>1</SlideChangeButton>
          <SlideChangeButton active={true}>2</SlideChangeButton>
          <SlideChangeButton active={false}>3</SlideChangeButton>
          <SlideChangeButton active={false}>4</SlideChangeButton>
          <SlideChangeButton active={false}>＋</SlideChangeButton>
        </SListFlex>
      </SContainer>
      <TopViewCard TopView={TopView} />
      <ContentMargin />
      <SelectTab />
      <InputLargeField />
      <InputField />
      {/* </SBody> */}
    </>
  );
};
export default Component;

const SContainer = styled.div`
  width: 344px;
  margin: 0 auto;
`;

const SH2 = styled.h2`
  display: block;
  padding: 8px;
  margin: 24px 8px 8px 8px;
  color: var(--main-dark);
  border-bottom: solid 1px var(--main-dark);
`;

const SListFlex = styled.ul`
  list-style: none;
  justify-content: space-evenly;
  display: flex;
  padding: 0;
  margin: 8px 0;
`;
const SHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background: red;
  width: 100%;
`;
const SInput = styled.input`
  margin-top: 60px;
  margin-left: 50px;
  height: 50px;
`;
// const SBody = styled.div`
// position:relative
// `
