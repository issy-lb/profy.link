// Module     : プライバシーポリシーページ
// Author     : okabe
// LastUpdate : 2021/05/06
// Since      : 2021/05/05
//Note        : https://kiyaku.jp/hinagata/privacy.html引用

import React from "react";
import styled from "styled-components";
import { Brank } from "../../atoms/layout/Brank";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";

const Text = () => {
  return (
    <>
      <div>
        ＿＿＿＿＿＿＿＿（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
      </div>
      <Brank height={"0px"} />
      <SArticle>第1条（個人情報）</SArticle>
      <ul>
        <li>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。この利用規約（以下，「本規約」といいます。）は，＿＿＿＿＿（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </li>
      </ul>
    </>
  );
};

const PrivacyPolicy = () => {
  return (
    <BrandTemp>
      <STitle>プライバシーポリシー</STitle>
      <SSubTitle>
        <Text />
      </SSubTitle>
    </BrandTemp>
  );
};

const STitle = styled(TitlePrimary)`
  margin-top: 40px;
  margin-bottom: 16px;
`;
const SSubTitle = styled(TitleSecondery)`
  margin-bottom: 24px;
`;

const STextLink = styled.p`
  display: inline;
  text-decoration: none;
  color: var(--action-success);
`;

const SArticle = styled.h3`
  margin: 40px 0 0 0;
`;

export default PrivacyPolicy;
