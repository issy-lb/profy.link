import { InputField } from "../atoms/Form/InputField";
import { MovieView } from "../atoms/Movie/MovieView";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import styled from "styled-components";
import { Brank } from "../atoms/layout/Brank";
import { EditableBannerLink } from "../atoms/Banner/EditableBannerLink";
import { useSectionProps } from "../../hooks/useSectionProps";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useImage } from "../../hooks/useImage";
import { ImageUpload } from "../molecules/ImageUpload/ImageUpload";
import useCookie from "../../hooks/useCookie";

export const EditBannerLink = () => {
  //  パラメータの値を取得
  const { slide, section } = useParams();
  // 画像プレビューのsource
  const [source, setSource] = useState("");

  // ユーザーID取得
  const [cookie, updateCookie] = useCookie("userid", "undefined");

  // カスタムフックス「useSectionProps」から読み込み
  const {
    sectionBody,
    getContents,
    changeFlag,
    setChangeFlag,
    changedBody,
    save,
    setChangedBody,
    setSlideOrder,
    setSectionOrder,
    deleteSection
  } = useSectionProps();

  // 画像を扱うためのhooks導入
  const {
    imageUrl,
    onSubmit,
    uploading,
    setUploading,
    setFilePath
  } = useImage();

  // リンク先を格納する
  const [link, setLink] = useState("");

  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    // スライド番号とセクション番号をもとに、
    // ローカルストレージからスライドとセクションの情報を受け取り、
    // slideBody,sectionBodyにセットする
    getContents(slide, section);
    setSectionOrder(section);
    setSlideOrder(slide);
    setFilePath(`images/${cookie}`);
  }, []);

  // 画像アップロード処理
  // ー　フラグを無効にする
  // ー　アップロード中をtrueにする
  // ー　ソースを保存する
  const upSource = (source) => {
    console.log("開始");
    setChangeFlag(false);
    setUploading(true);
    setSource(source);
  };

  // アップロード中フラグが変更された時
  // ー　アップロード中ではなく、イメージURLが空（初回画面読み込み時）でもない時
  // ー　changedBodyに最新のURLを保存する
  useEffect(() => {
    if (!uploading && imageUrl !== "") {
      const prop = {
        propLink: link,
        propImage: imageUrl
      };
      setChangedBody(prop);
      setChangeFlag(true);
    }
  }, [uploading]);

  // URLが変更されたら、changedBodyを更新する
  useEffect(() => {
    changedBody.propLink = link;
  }, [link]);

  const onUpImage = () => {
    save();
  };

  return (
    <EditDetailTemp
      title={"バナーリンク"}
      disc={"好きな画像をバナーとして設定できます"}
      link={"/edit"}
      onSave={onUpImage}
      onDelete={deleteSection}
      changeFlag={changeFlag}
    >
      <ImageUpload upSource={upSource} onSubmit={onSubmit}>
        <EditableBannerLink
          propImage={source === "" ? changedBody.propImage : source}
        />
      </ImageUpload>
      <Brank height={"30px"} />
      <InputField
        placeHolder={"バナーのリンク先"}
        input={changedBody.propLink}
        updateInput={setLink}
        setChangeFlag={setChangeFlag}
      />
    </EditDetailTemp>
  );
};
export default EditBannerLink;
