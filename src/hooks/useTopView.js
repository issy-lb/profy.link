// TopView編集詳細画面で使用するカスタムフックす

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrankLinkContents } from "../providers/BrankLinkContents";

// スライド番号とセクション番号を入れると、ローカルストレージから該当のセクションのプロップスを取得する
export const useTopView = () => {
  const [changeFlag, setChangeFlag] = useState(false);
  const [changedBody, setChangedBody] = useState(BrankLinkContents.header);
  const history = useHistory();
  function getContents(slideOrder, sectionOrder) {
    // ローカルストレージ「linkContents」の内容を取得して、リンクコンテンツに保存
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    const headerContents = contents.header;
    setChangedBody(headerContents);
  }

  // セクションのプロップスをlocalstrageに保存する
  const save = () => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    contents.header = changedBody;
    localStorage.setItem("linkContents", JSON.stringify(contents));
    history.push("/edit");
  };

  return {
    getContents,
    changeFlag,
    setChangeFlag,
    changedBody,
    setChangedBody,
    save
  };
};
