// 編集詳細画面で使用するカスタムフックす

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrankLinkContents } from "../providers/BrankLinkContents";

// スライド番号とセクション番号を入れると、ローカルストレージから該当のセクションのプロップスを取得する
export const useSectionProps = () => {
  const [slideBody, setSlideBody] = useState(BrankLinkContents.slides[0]);
  const [sectionBody, setSectionBody] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false);
  const [changedBody, setChangedBody] = useState([]);
  const [slideOrder, setSlideOrder] = useState(0);
  const [sectionOrder, setSectionOrder] = useState(0);
  const history = useHistory();
  function getContents(slideOrder, sectionOrder) {
    // ローカルストレージ「linkContents」の内容を取得して、リンクコンテンツに保存
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    const slideContents = contents.slides
      .filter((slide) => {
        return slide.slideOrder === Number(slideOrder);
      })
      .shift();
    setSlideBody(slideContents);

    const bodyContents = slideContents.bodys
      .filter((body) => {
        return body.sectionOrder === Number(sectionOrder);
      })
      .shift();
    setSectionBody(bodyContents.props);
    setChangedBody(bodyContents.props);
  }

  // セクションのプロップスをlocalstrageに保存する
  const save = () => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    contents.slides
      .filter((slide) => {
        return slide.slideOrder === Number(slideOrder);
      })
      .shift()
      .bodys.filter((body) => {
        return body.sectionOrder === Number(sectionOrder);
      })
      .shift().props = changedBody;
    localStorage.setItem("linkContents", JSON.stringify(contents));
    setChangeFlag(false);
    history.push("/edit");
  };

  // 削除
  const deleteSection = () => {
    const newSlide = slideBody;
    // 現在のセクションを削除
    newSlide.bodys.some(function (v, i) {
      if (v.sectionOrder === Number(sectionOrder)) newSlide.bodys.splice(i, 1);
    });

    // 削除していないセクションを並び替え
    newSlide.bodys.sort(function (a, b) {
      if (a.sectionOrder < b.sectionOrder) return -1;
      if (a.sectionOrder > b.sectionOrder) return 1;
      return 0;
    });

    // 削除していないセクションのsectionOrderを振り直す
    const newBodys = newSlide.bodys.map((body, index) => {
      body.sectionOrder = index + 1;
      return body;
    });
    newSlide.bodys = newBodys;

    // ローカルストレージのデータを取得し、削除した「スライド」をセットする
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    const newSlides = contents.slides.map((slide) => {
      if (slide.slideOrder === Number(slideOrder)) {
        return newSlide;
      } else {
        return slide;
      }
    });
    contents.slides = newSlides;

    // 更新した内容を、ローカルストレージに保存する
    localStorage.setItem("linkContents", JSON.stringify(contents));

    history.push("/edit");
  };

  return {
    slideBody,
    setSlideBody,
    sectionBody,
    setSectionBody,
    getContents,
    changeFlag,
    setChangeFlag,
    changedBody,
    setChangedBody,
    save,
    setSectionOrder,
    setSlideOrder,
    deleteSection
  };
};
