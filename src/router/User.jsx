// Module     : Userクラス（login処理、logout処理、ログイン状態の確認処理）
// Author     : okabe
// LastUpdate : 2021/05/06
// Since      : 2021/05/06

class User {
  isLoggedIn = () => this.get("isLoggedIn") === "true";

  set = (key, value) => localStorage.setItem(key, value);

  get = (key) => this.getLocalStorage(key);

  getLocalStorage = (key) => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email, password) => {
    // ログイン処理

    this.set("isLoggedIn", true);

    return true;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set("isLoggedIn", false);
      // ログアウト処理
    }
  };
}

export default new User();
