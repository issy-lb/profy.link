import React, { useEffect } from "react";
import { HomeCard } from "../molecules/HomeCard/HomeCard";
import { HomeTemp } from "../templates/HomeTemp";
import { useRecoilValue } from "recoil";
import { linkContents } from "../../store/linkContents";
import { Button4 } from "../atoms/Button/Button4";
import { useHome } from "../../hooks/useHome";
import { useHistory } from "react-router-dom";
import useCookie from "../../hooks/useCookie";

const Home = () => {
  // cookieを取得
  const [cookie, updateCookie] = useCookie("userid", "undefined");
  const {
    getUserInfoFromMaster,
    linkList,
    getHomeCardList,
    goToEditViaMaster,
    limited,
    getUserInfoFromLocalStrage,
    getHomeInfo,
    userInfo,
    goToEdit
  } = useHome();
  useEffect(() => {
    // localstrageから取得
    // getUserInfoFromLocalStrage();
    // サーバーから取得
    getHomeInfo(cookie);
    console.log("home");
    console.log(cookie);
  }, []);

  // 遷移を制御
  const history = useHistory();

  // ホームカードの一覧を取得する
  const HomeCardList = getHomeCardList(linkList).map((link, index) => {
    return (
      <>
        <HomeCard
          link={link}
          onClickBtn={() => {
            // ローカルストレージから取得
            // goToEditViaMaster(linkList[index].linkIndex);

            // サーバーから取得
            goToEdit(linkList[index].link);
          }}
        />
        {/* <HomeCard link={link}  /> */}
        <br />
      </>
    );
  });
  return (
    <HomeTemp name={userInfo.nickname}>
      {HomeCardList}
      <Button4
        limited={limited}
        value={"リンクを追加"}
        onClickBtn={() => {
          history.push("/create-link");
        }}
      />
    </HomeTemp>
  );
};
export default Home;
