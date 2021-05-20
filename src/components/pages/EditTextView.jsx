import { InputField } from "../atoms/Form/InputField";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import styled from "styled-components";
import { Brank } from "../atoms/layout/Brank";
import { InputLargeField } from "../atoms/Form/InputLargeField";
import { useSectionProps } from "../../hooks/useSectionProps";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditTextView = () => {
  // カスタムフックス「useSectionProps」から読み込み
  const {
    sectionBody,
    getContents,
    changeFlag,
    setChangeFlag,
    save,
    setChangedBody,
    setSlideOrder,
    setSectionOrder,
    deleteSection
  } = useSectionProps();

  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  useEffect(() => {
    const sectionBody = {
      propTitle: title,
      propDisc: disc
    };
    setChangedBody(sectionBody);
  }, [title, disc]);
  useEffect(() => {
    setTitle(sectionBody.propTitle);
    setDisc(sectionBody.propDisc);
  }, [sectionBody]);
  //  パラメータの値を取得
  const { slide, section } = useParams();

  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    // スライド番号とセクション番号をもとに、
    // ローカルストレージからスライドとセクションの情報を受け取り、
    // slideBody,sectionBodyにセットする
    getContents(slide, section);
    setSectionOrder(section);
    setSlideOrder(slide);
  }, []);

  return (
    <EditDetailTemp
      title={"テキストビュー"}
      disc={"テキストを設定できます（タイトル任意）"}
      link={"/edit"}
      changeFlag={changeFlag}
      onSave={save}
      onDelete={deleteSection}
    >
      <InputField
        placeHolder={"見出し"}
        input={sectionBody.propTitle}
        updateInput={setTitle}
        setChangeFlag={setChangeFlag}
      />
      <Brank height={"30px"} />
      <InputLargeField
        placeHolder={"本文"}
        input={sectionBody.propDisc}
        updateInput={setDisc}
        setChangeFlag={setChangeFlag}
      />
    </EditDetailTemp>
  );
};
export default EditTextView;
