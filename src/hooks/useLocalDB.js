import { ProfyTestDB } from "../providers/ProfyTestDB";

// localStrageのDBとの通信のためのhooks
export const useLocalDB = () => {
  // localStrageの情報全体を取得するなければHOMEに戻す
  const getDBFromLocalStrage = () => {
    const db = JSON.parse(localStorage.getItem("profyTestDB"));
    if (db) {
      // ローカルストレージのDBバージョンが最新の時は、その内容を格納する
      if (db.version >= ProfyTestDB.version) {
        return db;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  // localStrageからユーザー情報を取得する
  const getUserInfoFromLocalStrage = () => {
    if (getDBFromLocalStrage()) {
      return getDBFromLocalStrage().userInfo;
    } else {
      return null;
    }
  };

  // localStrageからユーザーのリンク一覧を取得する
  const getUserContentsFromLocalStrage = () => {
    if (getDBFromLocalStrage()) {
      return getDBFromLocalStrage().userContents;
    } else {
      return null;
}
  };
  // localStrageに情報全体を保存する
  const saveOnLocalDB = (db) => {
    localStorage.setItem("profyTestDB", JSON.stringify(db));
  };

  // ローカルストレージからlinkContentsを取得する
  const getLinkContentsFromLocalStrage = () => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    if (contents) {
      return contents;
    } else {
      // ローカルストレージの内容がない場合は、ホームに戻す
      return null;
    }
  };

  // ローカルストレージにlinkContentsを格納する
  const saveLinkContentsOnFromLocalStrage = (linkContents) => {
    localStorage.setItem("linkContents", JSON.stringify(linkContents));
  };

  // localStrageのlinkContentsにリンクのリンク名＋リンク情報を更新する
  const saveLinkInfoOnLOcalStrage = (linkTitle, linkURL) => {
    let link = getLinkContentsFromLocalStrage();
    console.log(link);
    if (link) {
      link.mainTitle = linkTitle;
      link.link = linkURL;
      saveLinkContentsOnFromLocalStrage(link);
    }
  };
  return { saveLinkInfoOnLOcalStrage, getLinkContentsFromLocalStrage };
};
