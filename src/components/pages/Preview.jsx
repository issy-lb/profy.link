import React, { useState } from "react";
import styled from "styled-components";
import { TopViewCard } from "../organisms/TopViewCard";
import { useHeader } from "../../hooks/useHeader";
import { Brank } from "../atoms/layout/Brank";
import SwipeableViews from "react-swipeable-views";
import { SlideBar2 } from "../atoms/Bar/SlideBar2";
import { useLinkEdit } from "../../hooks/useLinkEdit";
import { ProfyBody } from "../organisms/ProfyBody";

//SingleTransitionコンポーネント
const Preview = (props) => {
  const { getBodys } = useLinkEdit();
  const { linkContents } = props;
  const { getDefaultTopView } = useHeader();
  // スライドの変更
  const changeSlide = (index) => {
    console.log(index);
    setSlide(index + 1);
    console.log(slide);
  };
  const [slide, setSlide] = useState(1);

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
  for (var i = 0; i < linkContents.slides.length; i++) {
    SlideBody.push(
      <>
        <ProfyBody slide={i + 1} bodys={getBodys(linkContents, i + 1)} />
        <Brank height={"30px"} />
      </>
    );
  }
  return (
    <>
      <Brank height={"80px"} />
      <TopViewCard TopView={getDefaultTopView(linkContents.header)} />
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
      <Brank height={"80px"} />
    </>
  );
};

export default Preview;
const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  border-radius: 10px 10px 0 0;
  z-index: 1000;
`;

const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;
