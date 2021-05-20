import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSectionAdd } from "../../hooks/useSectionAdd";
import { Brank } from "../atoms/layout/Brank";
import { AddPartsCardList } from "../organisms/AddPartsCardList";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";
const partsList = [
  {
    title: "コメントリンク",
    img: "https://profy-59433.web.app/assets/parts/parts-list/button-link.svg",
    sectionId: "STID001"
  },
  {
    title: "YouTubeリンク",
    img: "https://profy-59433.web.app/assets/parts/parts-list/youtube-link.svg",
    sectionId: "STID002"
  },
  {
    title: "バナーリンク",
    img: "https://profy-59433.web.app/assets/parts/parts-list/banner-link.svg",
    sectionId: "STID003"
  },
  {
    title: "ギャラリービュー",
    img: "https://profy-59433.web.app/assets/parts/parts-list/gallery-view.svg",
    sectionId: "STID004"
  },
  {
    title: "テキストビュー",
    img: "https://profy-59433.web.app/assets/parts/parts-list/text-view.svg",
    sectionId: "STID005"
  }
];

const AddParts = () => {
  const { slide } = useParams();
  const { addSection, setSlideOrder } = useSectionAdd();
  useEffect(() => {
    setSlideOrder(slide);
  }, []);

  const onClickBtn = (sectionId) => {
    addSection(sectionId);
  };
  return (
    <LinkSettingTemp
      title={"編集"}
      subTitle={"セクション追加"}
      disc={
        "追加したいセクションを選択してください追加後に、お好きな場所へ移動できます"
      }
      link={"/edit"}
    >
      <AddPartsCardList partsList={partsList} onClickBtn={onClickBtn} />
    </LinkSettingTemp>
  );
};
export default AddParts;
