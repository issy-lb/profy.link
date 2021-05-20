// Module     : 新規登録ページ
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/04
//Noto        : Material.UIを利用。カラーテーマ変更する必要あり。
//              道のり
//              （未）stateの初期値設定
//              （未）APIから初期値を取得する
//              （未）ユーザーが必要な項目を入力する
//              （未）postする前に入力項目をチェックする
//              （未）入力項目をpostする

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Brank } from "../../atoms/layout/Brank";
import { Button1 } from "../../atoms/Button/Button1";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";
import { TextField } from "@material-ui/core";

const url = {
  login: "/login",
  loginfailed: "",
  pwremainder: ""
};

const Signup = () => {
  return (
    <BrandTemp>
      <STitle>新規登録</STitle>
      <SSubTitle>
        <Link to={url.login}>
          <STextLink>新規登録</STextLink>
        </Link>
        を行ってください
      </SSubTitle>
      <Brank height={"24px"} />
      <TextField
        // required
        // error
        id="mail-address"
        label="メールアドレス"
        defaultValue=""
        variant="outlined"
        fullWidth
        // helperText="メールアドレスを入力してください"
      />
      <Brank height={"24px"} />

      <TextField
        // error
        id="outlined-password-input"
        label="パスワード"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        fullWidth
        // helperText="パスワードを入力してください"
      />
      <Brank height={"40px"} />
      <Button1 active={true}>登録</Button1>
      <Brank height={"24px"} />
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
  color: var(--action-sucsess);
  display: inline;
  text-decoration: none;
`;

export default Signup;
