import { ColorMaster } from "../../Masters/ColorMaster";
import { FontMenu } from "../molecules/Menu/FontMenu";
import { BgMenuList } from "../organisms/BgMenuList";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";

const SettingFont = () => {
  return (
    <LinkSettingTemp
      title={"編集"}
      subTitle={"フォント"}
      disc={"ページのフォントカラーを選択できます"}
      link={"/edit"}
    >
      <FontMenu colorList={ColorMaster} />
    </LinkSettingTemp>
  );
};
export default SettingFont;
