// スワイプでアイコンを切り替えるメニュー

import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import styled from "styled-components";
import { Button3 } from "../atoms/Button/Button3";
import { IconGallery } from "../molecules/IconGallery/IconGallery";
import { Brank } from "../atoms/layout/Brank";
import { IconMaster } from "../../Masters/IconMaster";

const snsList = [
  "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/facebook.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/pintarest.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/line.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/youtube.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/tiktok.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/linkedin.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/note.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/applemusic.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/spotify.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/amazonmusic.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/showroom.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/17live.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/weibo.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/hate2.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/slack.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/whatsapp.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/wechat.png",
  "https://profy-59433.web.app/assets/sns-icon/sns/github.png"
];
const otherList = [
  "https://profy-59433.web.app/assets/sns-icon/other/music.png",
  "https://profy-59433.web.app/assets/sns-icon/other/question.png",
  "https://profy-59433.web.app/assets/sns-icon/other/talk.png",
  "https://profy-59433.web.app/assets/sns-icon/other/mail.png",
  "https://profy-59433.web.app/assets/sns-icon/other/man.png",
  "https://profy-59433.web.app/assets/sns-icon/other/bell.png",
  "https://profy-59433.web.app/assets/sns-icon/other/pen.png",
  "https://profy-59433.web.app/assets/sns-icon/other/shopping.png",
  "https://profy-59433.web.app/assets/sns-icon/other/camera.png"
];
export const SwipeIcon = (props) => {
  const { onSaveIcon } = props;

  const [value, setValue] = useState(0);
  const chandeIndex = (index) => {
    setValue(index);
  };

  const onClick = (index) => {
    setValue(index);
  };
  return (
    <SContainer>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(0)}
      >
        <Button3 id={0} selectedId={value}>
          SNS
        </Button3>
      </SButton>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(1)}
      >
        <Button3 id={1} selectedId={value}>
          その他
        </Button3>
      </SButton>
      <Brank height={"30px"} />

      {/* スワイプの要素 */}
      <SwipeableViews
        index={value}
        enableMouseEvents
        onChangeIndex={chandeIndex}
      >
        <IconGallery iconList={IconMaster.slice(1)} onSave={onSaveIcon} />
        <IconGallery iconList={IconMaster} onSave={onSaveIcon} />
      </SwipeableViews>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
  width: 100vw;
`;
const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;
