import React, { useState } from "react";
import styled from "styled-components";
import { Brank } from "../atoms/layout/Brank";
import { HeaderBack } from "../atoms/layout/HeaderBack";
import { CustomizeModal } from "../atoms/Mordal/CustomizeModal";
import { LinkMenu } from "../molecules/LinkMenu/LinkMenu";
const linkList = [
  {
    link: "aa",
    icon: "https://profy-59433.web.app/assets/icon/mail.svg",
    title: "メールアドレス変更",
    target: false
  },
  {
    link: "aa",
    icon: "https://profy-59433.web.app/assets/icon/lock.svg",
    title: "パスワード変更",
    target: false
  },
  {
    link: "aa",
    icon: "https://profy-59433.web.app/assets/icon/account.svg",
    title: "アカウント設定",
    target: false
  },
  {
    link: "logout",
    icon: "https://profy-59433.web.app/assets/icon/logout.svg",
    title: "ログアウト",
    target: false
  }
];
const linkList2 = [
  {
    link: "upgrade",
    icon: "https://profy-59433.web.app/assets/icon/upgrade.svg",
    title: "アップグレード",
    target: false
  },
  {
    link: "https://note.com/profy_link",
    icon: "https://profy-59433.web.app/assets/icon/help.svg",
    title: "使い方・活用例",
    target: true
  },
  {
    link: "/setting/contact",
    icon: "https://profy-59433.web.app/assets/icon/inquiry.svg",
    title: "お問い合わせ",
    target: false
  },
  {
    link: "/setting/terms",
    icon: "https://profy-59433.web.app/assets/icon/document.svg",
    title: "利用規約",
    target: false
  }
];
const Setting = () => {
  return (
    <>
      <SBg></SBg>
      <HeaderBack link={"/home"} title={"設定"} />
      <div style={{ marginTop: "100px" }}></div>
      <STitle>アカウント</STitle>
      <SIllust>
        <img src="https://profy-59433.web.app/assets/illust/sideway.png" />
      </SIllust>
      <LinkMenu linkList={linkList} />
      <div style={{ marginTop: "40px" }}></div>
      <STitle>サービス</STitle>
      <LinkMenu linkList={linkList2} />
      <Brank height={"50px"} />
    </>
  );
};
export default Setting;
const SBg = styled.div`
  position: fixed;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  background: url("https://profy-59433.web.app/assets/bg/bg-setting.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;
const STitle = styled.div`
  width: 344px;
  margin: 0 auto 15px auto;
  font-size: 20px;
  font-family: sans-serif;
`;
const SIllust = styled.div`
  position: absolute;
  height: 2px;
  top: 38px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  width: 344px;
  text-align: right;
`;
