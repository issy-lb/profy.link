import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Config } from "./Config";
import useCookie from "./useCookie";

// 認証まわりのhooks
export const useAuth = () => {
  // フックスを読み込み
  const history = useHistory();
  // ローディング状態を保持
  const [loading, setLoading] = useState(false);

  // エラー状態格納
  const [error, setError] = useState(false);

  // エラーメッセージを表示
  const [errorMsg, setErrorMsg] = useState("想定外のエラーが発生しました");

  // cookieを取得
  const [cookie, updateCookie] = useCookie("userid", "undefined");

  // パスワードをハッシュ化
  async function sha256(str) {
    // Convert string to ArrayBuffer
    const buff = new Uint8Array([].map.call(str, (c) => c.charCodeAt(0)))
      .buffer;
    // Calculate digest
    const digest = await crypto.subtle.digest("SHA-256", buff);
    // Convert ArrayBuffer to hex string
    // (from: https://stackoverflow.com/a/40031979)
    return [].map
      .call(new Uint8Array(digest), (x) => ("00" + x.toString(16)).slice(-2))
      .join("");
  }

  // サインアップ
  //　メールアドレス、パスワード、ニックネームを元にユーザー登録
  // エラーがあれば、エラーを返す
  // OKであれば、ユーザーIDをクッキーに保持してて、 HOME画面へ
  const signUp = (mail, pass, nickName, accountType) => {
    sha256(pass).then((value) => {
      const body = {
        mailAddress: mail,
        password: value,
        nickname: nickName,
        accountType: accountType
      };
      console.log(body);
      axios
        .post(`${Config.url}user_registration`, body, {
          headers: {
            Authorization: `Bearer ${Config.hash}`,
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          console.log(response);
          if (response.data.status === 200) {
            console.log("ユーザー登録成功");
            // ユーザー登録成功時
            setError(false);

            // ユーザーIDを取得する
            const body2 = {
              mailAddress: mail,
              password: value
            };
            console.log("これをポストする");
            console.log(body2);
            axios
              .post(`${Config.url}get_user_id`, body2, {
                headers: {
                  Authorization: `Bearer ${Config.hash}`,
                  "Content-Type": "application/json"
                }
              })
              .then((response) => {
                console.log("ユーザーID取得のAPI成功");
                console.log(response);
                if (response.data[1] === 200) {
                  updateCookie(response.data[0].userId, Config.cookieDays);
                  history.push("/home");
                } else {
                  setError(true);
                  setErrorMsg("ユーザー登録に失敗しました");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            // ユーザー登録失敗時
            setError(true);
            setErrorMsg(response.data[0].message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // ログイン
  const logIn = (mail, pass) => {
    sha256(pass).then((value) => {
      const body = {
        mailAddress: mail,
        password: value
      };
      axios
        .post(`${Config.url}get_user_id`, body, {
          headers: {
            Authorization: `Bearer ${Config.hash}`,
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          console.log("ユーザーID取得のAPI成功");
          console.log(response);
          if (response.data[1] === 200) {
            updateCookie(response.data[0].userId, Config.cookieDays);
            history.push("/home");
          } else {
            setError(true);
            setErrorMsg(response.data[0].message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // ログアウト処理
  const logOut = () => {
    updateCookie("undefined", 1);
    history.push("/login");
  };
  return { signUp, error, errorMsg, setError, setErrorMsg, logIn, logOut };
};
