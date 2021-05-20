// ホームを表示させるために使うhooks

import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ProfyTestDB } from "../providers/ProfyTestDB";
import { SampleLinkContents } from "../providers/SampleLinkContents";
import { SampleLinkContents2 } from "../providers/SampleLinkContents2";
import { SmpleUserInfo } from "../providers/SampleUserInfo";
import { ProfyTestDBFirst } from "../providers/ProfyTestDBFirst";
import { Config } from "./Config";

export const useHome = () => {
  // package読み込み
  const history = useHistory();

  // ユーザー情報を格納する
  const [userInfo, setUserInfo] = useState([]);
  // ユーザーのリンク一覧を格納する
  const [linkList, setLinkList] = useState([]);

  // リンク数が上限に達しているか状態を格納する
  const [limited, setLimited] = useState(false);

  // cookieからユーザーIDを取得する。
  // 無い場合は、ログイン画面へもどす

  // APIを叩いて、ユーザー情報を取得し、userInfo,linkListを更新する
  const getHomeInfo = (uid) => {
    //  APIアクセス
    axios
      .post(
        `${Config.url}get_home_info`,
        {
          userId: uid
        },
        {
          headers: {
            Authorization: `Bearer ${Config.hash}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then((response) => {
        if (response.data[1] === 200) {
          console.log("home情報取得成功");
          setUserInfo(response.data[0].userInfo);
          setLinkList(response.data[0].links);
          console.log(response.data[0].userInfo);
          console.log(response.data[0].links);
        } else {
          console.log("home情報取得失敗");
          console.log(response[0].message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // テスト用のマスタから、ユーザー情報を取得し、userInfo,linkListを更新する
  const getUserInfoFromMaster = () => {
    setUserInfo(SmpleUserInfo[0]);
    setLinkList(SmpleUserInfo[0].links);
    updateLimited();
  };
  // localstrageから、ユーザー情報を取得し、userInfo,linkListを更新する
  const getUserInfoFromLocalStrage = () => {
    const db = JSON.parse(localStorage.getItem("profyTestDB"));
    if (db) {
      // ローカルストレージのDBバージョンが最新の時は、その内容を格納する
      if (db.version >= ProfyTestDB.version) {
        setUserInfo(db.userInfo);
        setLinkList(db.userContents);
      } else {
        // ローカルストレージのバージョンが最新でない場合は、DBの内容を初期化する
        const newDB = ProfyTestDBFirst;
        localStorage.setItem("profyTestDB", JSON.stringify(newDB));
        setUserInfo(newDB.userInfo);
        setUserInfo(newDB.userContents);
      }
    } else {
      // ローカルストレージに情報がない場合は、DBの内容を初期化する
      const newDB = ProfyTestDBFirst;
      localStorage.setItem("profyTestDB", JSON.stringify(newDB));
      setUserInfo(newDB.userInfo);
      setUserInfo(newDB.userContents);
    }
    updateLimited();
  };

  // リンク一覧から、HomeCardに入れるためのリストを取得する
  const getHomeCardList = (linkList) => {
    const HomeCardList = linkList.map((link) => {
      return {
        title: link.mainTitle,
        icon: link.header.headerIcon,
        url: link.link,
        bg: link.header.headerBackground
      };
    });
    return HomeCardList;
  };

  // リンク数上限フラグを更新する
  const updateLimited = () => {
    if (linkList.length >= 2) {
      setLimited(true);
    }
  };
  // リンクリストが更新されるたびにリンク数上限を更新する
  useEffect(() => {
    updateLimited();
  }, [linkList]);

  // リンクがタップされたら、該当のリンク情報をAPIで取得し、localstrageに保存してから、リンク編集画面へ遷移する
  const goToEdit = (link) => {
    axios
      .post(
        `${Config.url}get_link_spec`,
        {
          link: link
        },
        {
          headers: {
            Authorization: `Bearer ${Config.hash}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then((response) => {
        console.log("サーバーからのレスポンス");
        console.log(response);
        if (response.data[1] === 200) {
          console.log("登録成功");
          const newLinkContents = response.data[0];
          localStorage.setItem("linkContents", JSON.stringify(newLinkContents));
          history.push("/edit");
        } else {
          console.log("サーバーからの取得失敗");
          console.log(response.data[0].message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // リンクがタップされたら、該当のリンク情報をテスト用マスタから取得し、localstrageに保存してから、リンク編集画面へ遷移する
  const goToEditViaMaster = (linkIndex) => {
    const newLinkContents = linkList[Number(linkIndex)];
    localStorage.setItem("linkContents", JSON.stringify(newLinkContents));
    history.push("/edit");
  };
  // リンクがタップされたら、該当のリンク情報をローカルから取得し、localstrageに保存してから、リンク編集画面へ遷移する
  const goToEditViaLocalStrage = (linkIndex) => {};

  return {
    getUserInfoFromMaster,
    getHomeCardList,
    goToEditViaMaster,
    linkList,
    limited,
    getUserInfoFromLocalStrage,
    getHomeInfo,
    userInfo,
    goToEdit
  };
};
