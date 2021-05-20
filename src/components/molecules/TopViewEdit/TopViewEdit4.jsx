// Module     : TopViewのデザインタイプ4(編集画面用)
// Author     : ishida
// LastUpdate : 2021/05/08
// Since      : 2021/05/08

import { useState } from "react";
import styled from "styled-components";
import "../../../styles/color.css";
import { PhotoCardDef2 } from "../../atoms/Cards/PhotoCardDef2";
import { ProfileIconPentagon } from "../../atoms/Icon/ProfileIconPentagon";
import { ImageUpload } from "../ImageUpload/ImageUpload";
import { ImageUpload2 } from "../ImageUpload/ImageUpload2";

export const TopViewEdit4 = (props) => {
  // ー　startUploading:画像UPされた時に実行する関数
  // ー　onSubmit:背景画像登録処理。背景画像のデータを渡す
  // ー　onSubmit2:プロフィール画像登録処理。プロフィール画像を渡す
  const {
    TopView,
    startUploading,
    onSubmit,
    onSubmit2,
    startUploading2
  } = props;

  // 背景プレビュー用のsrc格納
  const [src, setSrc] = useState("");
  // プロフ画像プレビュー用のsrc格納
  const [src2, setSrc2] = useState("");

  // 背景画像がUPされた時の処理
  const upSource = (source) => {
    setSrc(source);
    startUploading();
  };

  // 背景画像がUPされた時の処理
  const upSource2 = (source) => {
    setSrc2(source);
    startUploading2();
  };
  return (
    <SContainer>
      <ImageUpload upSource={upSource} onSubmit={onSubmit}>
        <PhotoCardDef2
          height={"208px"}
          image={src === "" ? TopView.coverPhoto.image : src}
          alt={TopView.coverPhoto.a}
        />
      </ImageUpload>

      <SContent>
        <ImageUpload2 upSource={upSource2} onSubmit={onSubmit2} size={"136px"}>
          <ProfileIconPentagon
            size={"136px"}
            image={src2 === "" ? TopView.profilePhoto.image : src2}
            alt={TopView.profilePhoto.alt}
          />
        </ImageUpload2>
      </SContent>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 344px;
  height: 400px;
  /* テキストボリュームに併せて可変にしないとダメ */
`;

const SContent = styled.div`
  text-align: center;
  position: absolute;
  top: 120px;
  right: 0;
  left: 0;
`;
