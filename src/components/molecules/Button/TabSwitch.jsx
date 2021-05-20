// Module     : タブの切り替え（idが一致する場合はアクティブ、しない場合は非アクティブ）
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02
// Note       : Button3.jsxから流用したが、共通パーツ化できるかも。

import "../../../styles/color.css";
import { Tab } from "../../atoms/Button/Tab";

export const TabSwitch = (props) => {
  const { children, id, selectedId } = props;

  if (id === selectedId) {
    return <Tab active={true}>{children}</Tab>;
  } else {
    return <Tab active={false}>{children}</Tab>;
  }
};
