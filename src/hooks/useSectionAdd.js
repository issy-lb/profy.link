// スライドに洗濯したセクションを追加する
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FirstLinkContents } from "../providers/FirstLinkContents";

export const useSectionAdd = () => {
  const [slideOrder, setSlideOrder] = useState(0);
  const history = useHistory();

  // セクションの「追加」ボタンが押されたとき
  const addSection = (sectionId) => {
    // 返却する新しいセクションを決める
    const sectionReturn = (id) => {
      switch (id) {
        case "STID001":
          return FirstLinkContents.STID001;
        case "STID002":
          return FirstLinkContents.STID002;
        case "STID003":
          return FirstLinkContents.STID003;
        case "STID004":
          return FirstLinkContents.STID004;
        case "STID005":
          return FirstLinkContents.STID005;
        default:
          return false;
      }
    };
    const section = sectionReturn(sectionId);

    // セクションを追加する処理
    if (section) {
      const contents = JSON.parse(localStorage.getItem("linkContents"));
      const slideC = contents.slides
        .filter((slide) => {
          return slide.slideOrder === Number(slideOrder);
        })
        .shift();
      const newSectionOrder = slideC.bodys.length + 1;
      const newBody = {
        props: section,
        sectionId: sectionId,
        sectionOrder: newSectionOrder
      };
      contents.slides
        .filter((slide) => {
          return slide.slideOrder === Number(slideOrder);
        })
        .shift()
        .bodys.push(newBody);
      localStorage.setItem("linkContents", JSON.stringify(contents));
      history.push("/edit");
    }
  };
  return { addSection, setSlideOrder };
};
