// /iconIDを投げたら、iconの画像URLとアイコンタイトルを返してくれるhooks

import { IconMaster } from "../Masters/IconMaster";

export const useIcon = () => {
  // アイコン画像のURLを取得
  const getIconImg = (iconId) => {
    const targetIcon = IconMaster.filter((icon) => {
      return icon.ICID === iconId;
    }).shift();
    return targetIcon.icon;
  };
  // アイコンの名前を取得
  const getIconName = (iconId) => {
    const targetIcon = IconMaster.filter((icon) => {
      return icon.ICID === iconId;
    }).shift();
    return targetIcon.name;
  };
  return { getIconImg, getIconName };
};
