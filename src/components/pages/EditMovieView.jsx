import { InputField } from "../atoms/Form/InputField";
import { MovieView } from "../atoms/Movie/MovieView";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import styled from "styled-components";
import { Brank } from "../atoms/layout/Brank";
import { useSectionProps } from "../../hooks/useSectionProps";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditMovieView = () => {
  const {
    sectionBody,
    getContents,
    changeFlag,
    setChangeFlag,
    save,
    setChangedBody,
    setSlideOrder,
    setSectionOrder,
    deleteSection,
    changedBody
  } = useSectionProps();

  const [update, setUpdata] = useState(false);

  //  パラメータの値を取得
  const { slide, section } = useParams();

  const [link, setLink] = useState("");

  const updateURL = (url) => {
    const prop = {
      propLink: url
    };
    setChangedBody(prop);
    setUpdata(update ? false : true);
    console.log(url);
  };

  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    // スライド番号とセクション番号をもとに、
    // ローカルストレージからスライドとセクションの情報を受け取り、
    // slideBody,sectionBodyにセットする
    getContents(slide, section);
    setSectionOrder(section);
    setSlideOrder(slide);
    setUpdata(update ? false : true);
  }, []);

  return (
    <EditDetailTemp
      title={"YouTubeリンク"}
      disc={"YouTubeのリンクを設定できます"}
      link={"/edit"}
      changeFlag={changeFlag}
      onSave={save}
      onDelete={deleteSection}
    >
      <MovieView propLink={changedBody.propLink} />
      <Brank height={"30px"} />
      <InputField
        placeHolder={"youTube動画のURL"}
        input={changedBody.propLink}
        setChangeFlag={setChangeFlag}
        updateInput={updateURL}
      />
    </EditDetailTemp>
  );
};
export default EditMovieView;
