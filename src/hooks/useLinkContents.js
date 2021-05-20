import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrankLinkContents } from "../providers/BrankLinkContents";

export const useLinkContents = () => {
  // ローカルストレージの内容を格納
  const [linkContents, setLinkContents] = useState(BrankLinkContents);

  // 画面遷移用のhooks導入
  const history = useHistory();

  // ローカルストレージから、linkcontentsの内容を取得して、リンクコンテンツに格納
  const getLinkFromLocalStrage = () => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    if (contents) {
      setLinkContents(contents);
    } else {
      // ローカルストレージの内容がない場合は、ホームに戻す
      history.push("/home");
    }
  };

  // ローカルストレージのlinkcontentsの内容を更新
  const setLinkOnLocalStrage = (newLinkContentes) => {
    localStorage.setItem("linkContents", JSON.stringify(newLinkContentes));
  };

  return { getLinkFromLocalStrage, setLinkOnLocalStrage, linkContents };
};
