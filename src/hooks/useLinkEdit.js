// /edit でのデータ取得・保持・更新・削除のためのhooks

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrankLinkContents } from "../providers/BrankLinkContents";

export const useLinkEdit = () => {
  // 該当のリンクIDを保持
  const [linkId, setLinkId] = useState("");
  // 該当のスライドNOを保持
  const [slide, setSlide] = useState(1);

  const [update, setUpdata] = useState(false);

  // 該当のスライドの中身を保持
  const [linkContents, setLinkContents] = useState(BrankLinkContents);
  // 変更フラグ（公開ボタンの見た目を変更）
  const [changeFlag, setChangeFlag] = useState(false);

  // slideの数
  const [slideLength, setSlideLength] = useState(1);

  // ページ遷移用のhooks
  const history = useHistory();

  // ローカルストレージから該当のリンクの中身を取得する
  const getContents = () => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    if (contents) {
      setLinkContents(orderContents(contents));
    } else {
      // ローカルストレージの内容がない場合は、ホームに戻す
      history.push("/home");
    }
  };

  // linkContentsの中身を並び替える
  const orderContents = (contents) => {
    const newContents = contents;
    newContents.slides = newContents.slides.map((slide) => {
      slide.bodys.sort(function (a, b) {
        if (a.sectionOrder < b.sectionOrder) return -1;
        if (a.sectionOrder > b.sectionOrder) return 1;
        return 0;
      });
      return slide;
    });
    return newContents;
  };

  // ローカルストレージに該当のリンクの中身を保存する
  const setContents = (contents) => {
    localStorage.setItem("linkContents", JSON.stringify(contents));
    setChangeFlag(true);
  };

  // 編集したローカルストレージの内容を、ProfyTestDBに保存する
  const saveOnLocalStrage = () => {
    let db = JSON.parse(localStorage.getItem("profyTestDB"));
    console.log(linkContents.linkIndex);

    db.userContents[linkContents.linkIndex] = linkContents;
    localStorage.setItem("profyTestDB", JSON.stringify(db));
  };

  // 該当のスライド番号の「bodys」を受け取る
  const getBodys = (contents, slideNo) => {
    if (contents.linkId === "brank") {
      console.log("ブランク");
      return [];
    } else {
      console.log("中身あり");
      console.log(contents);
      const bodys = contents.slides
        .filter((slide) => {
          return slide.slideOrder === Number(slideNo);
        })
        .shift().bodys;
      return bodys;
    }
  };

  // セクションの順番を並び替える
  const onSwap = (a, b) => {
    const newContents = linkContents;
    newContents.slides
      .filter((Slide) => {
        return Slide.slideOrder === Number(slide);
      })
      .shift().bodys = getBodys(linkContents, slide).map((body) => {
      if (body.sectionOrder === a) {
        body.sectionOrder = b;
        return body;
      } else if (body.sectionOrder === b) {
        body.sectionOrder = a;
        return body;
      } else {
        return body;
      }
    });
    setLinkContents(orderContents(newContents));
    setContents(orderContents(newContents));
    setUpdata(update ? false : true);
  };

  // スライド追加
  const addSlide = () => {
    const newSlideOrder = linkContents.slides.length + 1;
    const newSlide = {
      bodys: [],
      slideOrder: newSlideOrder
    };
    linkContents.slides.push(newSlide);
    // 更新した内容を、ローカルストレージに保存する
    localStorage.setItem("linkContents", JSON.stringify(linkContents));
    setSlide(newSlideOrder);
    setUpdata(update ? false : true);
  };
  // 選択したセクションを削除する
  // 該当のセクションを指定
  // 削除後、sectionOrderを振り直す
  const deleteSection = (sectionOrder) => {
    const newSlide = linkContents.slides
      .filter((slideContents) => {
        return slideContents.slideOrder === slide;
      })
      .shift();
    console.log("リンク削除");
    console.log(sectionOrder);
    console.log(newSlide);

    // 指定のセクションを削除
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
    const newSlides = linkContents.slides.map((slide) => {
      if (slide.slideOrder === Number(slide)) {
        return newSlide;
      } else {
        return slide;
      }
    });
    linkContents.slides = newSlides;
    // 更新した内容を、ローカルストレージに保存する
    localStorage.setItem("linkContents", JSON.stringify(linkContents));
    setUpdata(update ? false : true);
  };

  // 選択したスライドを削除する
  const deleteSlide = (slideOrder) => {
    let slides = linkContents.slides;

    // 指定のスライドを削除
    slides.some(function (v, i) {
      if (v.slideOrder === Number(slideOrder)) slides.splice(i, 1);
    });
    // 削除していないセクションを並び替え
    slides.sort(function (a, b) {
      if (a.slideOrder < b.slideOrder) return -1;
      if (a.slideOrder > b.slideOrder) return 1;
      return 0;
    });
    // 削除していないセクションのslideOrderを振り直す
    const newSlides = slides.map((slide, index) => {
      slide.slideOrder = index + 1;
      return slide;
    });
    let newLinkContents = linkContents;
    newLinkContents.slides = newSlides;
    setLinkContents(newLinkContents);
    // 更新した内容を、ローカルストレージに保存する
    localStorage.setItem("linkContents", JSON.stringify(newLinkContents));
    setUpdata(update ? false : true);
  };
  return {
    linkId,
    setLinkId,
    slide,
    setSlide,
    linkContents,
    setLinkContents,
    changeFlag,
    setChangeFlag,
    getContents,
    setContents,
    getBodys,
    onSwap,
    orderContents,
    update,
    setUpdata,
    saveOnLocalStrage,
    deleteSection,
    addSlide,
    deleteSlide
  };
};
