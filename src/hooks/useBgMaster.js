// 背景マスタ　を操作するためのhooks

import { BgMaster } from "../Masters/BgMaster";

export const useBgMaster = () => {
  // 背景IDから画像URLを取得
  const getBgImg = (bgid) => {
    if (bgid.length === 6) {
      const targetBgList = BgMaster.filter((bglist) => {
        return bglist.id === bgid.slice(0, 4);
      }).shift();

      const targetBg = targetBgList.imgList
        .filter((bg) => {
          return bg.id === bgid;
        })
        .shift();

      return targetBg.img;
    } else {
      console.log("背景画像が見つかりません");
      return null;
    }
  };
  return { getBgImg };
};
