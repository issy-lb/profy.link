import { useHistory, useParams } from "react-router-dom";
import { BgList } from "../organisms/BgList";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";
import { BgMaster } from "../../Masters/BgMaster";
import { useLinkContents } from "../../hooks/useLinkContents";
import { useEffect } from "react";

const SettingBgDetail = () => {
  // URLからパラメータ取得
  const { id } = useParams();

  // linkContentsを扱うhooksを導入
  const {
    getLinkFromLocalStrage,
    setLinkOnLocalStrage,
    linkContents
  } = useLinkContents();

  // 画面遷移用のhooks導入
  const history = useHistory();

  // 最初に読み込んだ時の処理
  // 現在選択されている背景IDを取得
  useEffect(() => {
    getLinkFromLocalStrage();
  }, []);

  // 背景リストをマスタから取得
  const bgList = BgMaster.filter((bg) => {
    return bg.id === id;
  });

  // 背景が選択された時の処理
  const onSelectBgId = (bgid) => {
    linkContents.settings.backgroundId = bgid;
    console.log(linkContents);
    setLinkOnLocalStrage(linkContents);
    history.push("/edit");
  };

  return (
    <LinkSettingTemp
      title={"編集"}
      subTitle={"ページ背景"}
      disc={"ページ背景を選択できます"}
      link={"/edit/setting-bg"}
    >
      <BgList
        imgList={bgList[0].imgList}
        selectedBgId={linkContents.settings.backgroundId}
        onSelectBg={onSelectBgId}
      />
    </LinkSettingTemp>
  );
};
export default SettingBgDetail;
