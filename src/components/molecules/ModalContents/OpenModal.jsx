// 公開するときのモーダル

import styled from "styled-components";
import { Brank } from "../../atoms/layout/Brank";

export const OpenModal = (props) => {
  const { link } = props;
  const copyLink = () => {
    // コピー対象をJavaScript上で変数として定義する
    var copyTarget = document.getElementById("link-copy");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

    // コピーをお知らせする
    alert("コピーできました！ : " + copyTarget.value);
  };
  return (
    <SContainer>
      <Brank height={"100px"} />
      <SImage src="https://profy-59433.web.app/assets/illust/open-link.svg" />
      <SBottom onClick={copyLink}>
        <SLink value={`https://profy.link/${link}`} id="link-copy" />
        <SButton>
          <img src="https://profy-59433.web.app/assets/icon/copy-link.svg" />
        </SButton>
      </SBottom>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img``;
const SLink = styled.input`
  background: #ededed;
  width: 180px;
  border: none;
  height: 48px;
  font-size: 16px;
  padding-left: 20px;
  margin-right: 5px;
`;
const SBottom = styled.div`
  display: flex;
  width: 267px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
