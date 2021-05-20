// Module     : TopViewの全体
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import { TopViewEdit1 } from "../molecules/TopViewEdit/TopViewEdit1";
import { TopViewEdit2 } from "../molecules/TopViewEdit/TopViewEdit2";
import { TopViewEdit3 } from "../molecules/TopViewEdit/TopViewEdit3";
import { TopViewEdit4 } from "../molecules/TopViewEdit/TopViewEdit4";

export const TopViewEditCard = (props) => {
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
  const id = TopView.id;

  const selectTemplete = (id) => {
    if (id === "TLID001") {
      return (
        <TopViewEdit1
          TopView={TopView}
          startUploading={startUploading}
          startUploading2={startUploading2}
          onSubmit={onSubmit}
          onSubmit2={onSubmit2}
        />
      );
    } else if (id === "TLID002") {
      return (
        <TopViewEdit2
          TopView={TopView}
          startUploading={startUploading}
          startUploading2={startUploading2}
          onSubmit={onSubmit}
          onSubmit2={onSubmit2}
        />
      );
    } else if (id === "TLID003") {
      return (
        <TopViewEdit3
          TopView={TopView}
          startUploading={startUploading}
          startUploading2={startUploading2}
          onSubmit={onSubmit}
          onSubmit2={onSubmit2}
        />
      );
    } else if (id === "TLID004") {
      return (
        <TopViewEdit4
          TopView={TopView}
          startUploading={startUploading}
          startUploading2={startUploading2}
          onSubmit={onSubmit}
          onSubmit2={onSubmit2}
        />
      );
    } else {
      return (
        <TopViewEdit1
          TopView={TopView}
          startUploading={startUploading}
          startUploading2={startUploading2}
          onSubmit={onSubmit}
          onSubmit2={onSubmit2}
        />
      );
    }
  };

  return (
    <>
      <SContainer>
        <SContentUpper>{selectTemplete(id)}</SContentUpper>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 344px;
`;
const SContentUpper = styled.div``;
