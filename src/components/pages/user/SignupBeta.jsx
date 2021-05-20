// Module     : 新規登録ページ（β版）
// Author     : ishida
// LastUpdate : 2021/05/16
// Since      : 2021/05/16
//Noto        : Material.UIを利用。カラーテーマ変更する必要あり。
//              道のり
//              （未）stateの初期値設定
//              （未）APIから初期値を取得する
//              （未）ユーザーが必要な項目を入力する
//              （未）postする前に入力項目をチェックする
//              （未）入力項目をpostする

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Brank } from "../../atoms/layout/Brank";
import { Button1 } from "../../atoms/Button/Button1";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";
import { TextField } from "@material-ui/core";
import { useAuth } from "../../../hooks/useAuth";
import { SimpleAlert } from "../../atoms/Alert/SimpleAlert";

const url = {
  login: "/login",
  loginfailed: "",
  pwremainder: ""
};
export const SignupBeta = () => {
  // ユーザー入力内容を保持
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  // Auth用のhooksを読み込み
  const { signUp, error, errorMsg, setError, setErrorMsg } = useAuth();

  // 登録ボタンを押したときの処理
  const onSignUp = () => {
    if (mail === "" || password === "" || nickName === "") {
      setError(true);
      setErrorMsg("全て入力してください");
    } else {
      setError(false);
      signUp(mail, password, nickName, "FRE");
    }
  };

  return (
    <BrandTemp>
      <SContainer>
        <STitle>新規登録</STitle>
        <SSubTitle>
          登録済みの方は、
          <Link to={url.login}>
            <STextLink>ログイン</STextLink>
          </Link>
          を行ってください
        </SSubTitle>
        <Brank height={"24px"} />
        {error ? (
          <>
            <SimpleAlert severity="error">{errorMsg}</SimpleAlert>
            <Brank height={"16px"} />
          </>
        ) : null}

        <TextField
          // required
          // error
          id="mail-address"
          label="メールアドレス"
          defaultValue=""
          variant="outlined"
          type="email"
          fullWidth
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          // helperText="パスワードを入力してください"
        />
        <Brank height={"24px"} />

        <TextField
          // error
          id="nick-name"
          label="ニックネーム"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
          value={nickName}
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          // helperText="ニックネームを入力してください"
        />
        <Brank height={"40px"} />
        <Button1 active={true} onClickBtn={onSignUp}>
          登録
        </Button1>
        <Brank height={"24px"} />
      </SContainer>
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
const SContainer = styled.div`
  margin: 16px;
  padding: 16px 0;
`;
export default SignupBeta;
