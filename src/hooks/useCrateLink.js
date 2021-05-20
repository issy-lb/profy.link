// リンクを作成する時に使うhooks

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrankLinkContents } from "../providers/BrankLinkContents";
import { Config } from "./Config";

export const useCreateLink = () => {
  // hooks
  const history = useHistory();

  // エラー状態格納
  const [error, setError] = useState(false);

  // エラーメッセージを表示
  const [errorMsg, setErrorMsg] = useState("想定外のエラーが発生しました");

  // リンク名とリンクURLとリンクインデックスから、初回保存用のリンクを作る
  const cretateDefaultLink = (linkTitle, linkURL, linkIndex) => {
    let defaultLink = BrankLinkContents;
    defaultLink.mainTitle = linkTitle;
    defaultLink.link = linkURL;
    defaultLink.linkIndex = linkIndex;
    return defaultLink;
  };

  // ローカルストレージに保存する
  const createLinkOnLocalStrage = (linkTitle, linkURL) => {
    let db = JSON.parse(localStorage.getItem("profyTestDB"));
    const userContents = db.userContents;
    const newLinkIndex = userContents.length;
    db.userContents.push(cretateDefaultLink(linkTitle, linkURL, newLinkIndex));
    localStorage.setItem("profyTestDB", JSON.stringify(db));
  };

  // サーバーに保存する
  const createLink = (uid, linkOrder, link, linkTitle) => {
    const body = {
      userId: uid,
      templateId: "TLID001",
      name: linkTitle,
      linkOrder: linkOrder,
      link: link,
      linkTitle: ""
    };
    console.log(body);
    axios
      .post(`${Config.url}create_link`, body, {
        headers: {
          Authorization: `Bearer ${Config.hash}`,
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log("サーバーからのレスポンス");
        console.log(response);
        if (response.data.status === 200) {
          console.log("登録成功");
          history.push("/home");
        } else {
          setError(true);
          setErrorMsg("URLが重複しています。変更してください");
          console.log("サーバーからの取得失敗");
          console.log(response.data[0].message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    createLinkOnLocalStrage,
    createLink,
    error,
    setError,
    errorMsg,
    setErrorMsg
  };
};
