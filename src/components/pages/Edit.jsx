import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EditHomeTemp } from "../templates/EditHomeTemp";
import { LinkSettingButtons } from "../molecules/Button/LinkSettingButtons";
import { useHistory } from "react-router-dom";
import { Brank } from "../atoms/layout/Brank";
import { EditProfyBody } from "../organisms/EditProfyBody";
import SwipeableViews from "react-swipeable-views";
import { SlideBar2 } from "../atoms/Bar/SlideBar2";
import { useLinkEdit } from "../../hooks/useLinkEdit";
import { useHeader } from "../../hooks/useHeader";
import { Button4 } from "../atoms/Button/Button4";
import { TopViewCard } from "../organisms/TopViewCard";
import { NoMenuEditContainer } from "../atoms/Container/NoMenuEditContainer";
import { useBgMaster } from "../../hooks/useBgMaster";
import Preview from "./Preview";
import { Transition } from "react-transition-group";
import { BackGroundMaru } from "../atoms/layout/BackGroundMaru";
import { SlideChangeButton2 } from "../atoms/Button/SlideChangeButton2";
import { MaruAddBtn } from "../atoms/Button/MaruAddBtn";
import { CustomizeModal } from "../atoms/Mordal/CustomizeModal";
import { OpenModal } from "../molecules/ModalContents/OpenModal";
import { TextButton } from "../atoms/Button/TextButton";
import useCookie from "../../hooks/useCookie";

// トランジションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {
  entering: {
    transition: "all 0.2s ease",
    transform: "translateY(0) "
  },
  entered: {
    transition: "all 0.2s ease",
    transform: "translateY(0) "
  },
  exiting: {
    transition: "all 0.2s ease",
    transform: "translateY(100vh)"
  },
  exited: {
    transition: "all 0.2s ease",
    transform: "translateY(100vh)"
  }
};

const Edit = () => {
  // カスタムフックスの読み込み
  const {
    slide,
    setSlide,
    linkContents,
    getContents,
    getBodys,
    onSwap,
    saveOnLocalStrage,
    deleteSection,
    addSlide,
    deleteSlide
  } = useLinkEdit();
  const [cookie, updateCookie] = useCookie("test", "brank");
  const { getDefaultTopView } = useHeader();

  // 背景画像取得のためのhooks
  const { getBgImg } = useBgMaster();

  const history = useHistory();

  //マウントの状態を管理
  const [mount, setMount] = useState(false);

  // モーダルの開閉ステータス格納
  const [open, setOpen] = useState(false);

  //マウントのオンオフを切り替える
  const changer = () => {
    setMount(!mount);
  };
  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    getContents();
    console.log("editCookie");
    console.log(cookie);
  }, []);

  // スライドの変更
  const changeSlide = (index) => {
    console.log(index);
    setSlide(index + 1);
    console.log(slide);
  };

  // スライドメニュー
  var slideMenu = [];
  for (let i = 0; i < linkContents.slides.length; i++) {
    slideMenu.push(
      <SButton
        onClick={() => {
          setSlide(i + 1);
        }}
      >
        <SlideChangeButton2 id={i + 1} selectedId={slide}>
          {i + 1}
        </SlideChangeButton2>
      </SButton>
    );
  }
  if (linkContents.slides.length < 3) {
    slideMenu.push(<MaruAddBtn onClickBtn={addSlide} />);
  }

  // スライドバー
  var SlideBar = [];
  for (let i = 0; i < linkContents.slides.length; i++) {
    SlideBar.push(
      <SButton
        onClick={() => {
          setSlide(i + 1);
        }}
      >
        <SlideBar2 id={i + 1} selectedId={slide} />
      </SButton>
    );
  }

  const SlideBody = [];
  // スライド中身
  for (let i = 0; i < linkContents.slides.length; i++) {
    SlideBody.push(
      <>
        <EditProfyBody
          slide={i + 1}
          bodys={getBodys(linkContents, i + 1)}
          onSwap={onSwap}
          deleteSection={deleteSection}
        />
        <Brank height={"30px"} />
        <Button4
          limited={false}
          value={"セクションを追加"}
          onClickBtn={() => {
            history.push("/edit/add-parts/" + slide);
          }}
        />
        <Brank height={"10px"} />
        <div style={{ textAlign: "center" }}>
          <TextButton
            onClickBtn={() => {
              deleteSlide(i + 1);
              setSlide(1);
            }}
          >
            このスライドを削除
          </TextButton>
        </div>
        <br />
      </>
    );
  }

  // 公開押下時の処理
  const onClickOpen = () => {
    saveOnLocalStrage();
    setOpen(true);
  };

  return (
    <>
      {/* プレビューモーダル */}
      <Transition in={mount} timeout={1000}>
        {(state) => (
          <SPreview style={transitionStyle[state]}>
            <BackGroundMaru
              link={getBgImg(
                linkContents.settings
                  ? linkContents.settings.backgroundId
                  : "BGID0101"
              )}
            />
            <SScroll>
              <SClose onClick={changer}>
                <img
                  src="https://profy-59433.web.app/assets/icon/close.svg"
                  alt="閉じる"
                />
              </SClose>

              <div>
                <Preview linkContents={linkContents} />
              </div>
            </SScroll>
          </SPreview>
        )}
      </Transition>
      {/* 公開押下時のモーダル */}
      <CustomizeModal
        open={open}
        setOpen={setOpen}
        height={"524px"}
        width={"328px"}
      >
        <OpenModal link={linkContents.link} />
      </CustomizeModal>
      {/* 画面本体 */}

      <EditHomeTemp
        changeFlag={true}
        onSave={onClickOpen}
        bgLink={getBgImg(
          linkContents.settings
            ? linkContents.settings.backgroundId
            : "BGID0101"
        )}
        onPreview={changer}
      >
        <SContainer>
          <NoMenuEditContainer link={"/edit/top-view"}>
            <TopViewCard TopView={getDefaultTopView(linkContents.header)} />
          </NoMenuEditContainer>
          <Brank height={"50px"} />
          <SSlideChange>{slideMenu}</SSlideChange>
          <div style={{ textAlign: "center" }}>{SlideBar}</div>
          <Brank height={"20px"} />
          <SwipeableViews
            index={slide - 1}
            enableMouseEvents
            onChangeIndex={changeSlide}
            containerStyle={{ width: "100vw" }}
          >
            {SlideBody}
          </SwipeableViews>
          <br />
          <Brank height={"150px"} />
          <SFroat>
            <LinkSettingButtons />
          </SFroat>
        </SContainer>
      </EditHomeTemp>
    </>
  );
};
export default Edit;

const SFroat = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);

  height: 90px;
  display: flex;
`;
const SContainer = styled.div`
  width: 100vw;
`;
const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
`;
const SPreview = styled.div`
  width: 100vw;
  border-radius: 30px 30px 0 0;
  z-index: 1000;
  position: fixed;
  background: white;
  top: 2vh;
  box-shadow: 0px 3px 15px var(--shadow);
`;
const SScroll = styled.div`
  overflow: scroll;
  height: 98vh;
`;
const SClose = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 20px;
  border: none;
  background-color: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
const SSlideChange = styled.div`
  display: flex;
  width: 336px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
