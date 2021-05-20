// Module     : ログインページ
// Author     : okabe
// LastUpdate : 2021/05/16
// Since      : 2021/05/04
//Note        : Material.UIを利用。カラーテーマ変更する必要あり。

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Brank } from "../../atoms/layout/Brank";
import { Button1 } from "../../atoms/Button/Button1";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";
import { TextField } from "@material-ui/core";
import { SimpleAlert } from "../../atoms/Alert/SimpleAlert";
import { useAuth } from "../../../hooks/useAuth";

const url = {
  signup: "/signup-beta",
  loginfailed: "",
  pwremainder: ""
};

const ErrorMessage = "メールアドレスまたはパスワードが誤っています";
const state = {
  email: "sample@profy.link",
  password: "Profy1234"
};

function Login() {
  // Auth用のhooksを読み込み
  const { signUp, error, errorMsg, setError, setErrorMsg, logIn } = useAuth();

  // ユーザー入力内容を保持
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // 登録ボタンを押したときの処理
  const onSignIn = () => {
    if (mail === "" || password === "") {
      setError(true);
      setErrorMsg("全て入力してください");
    } else {
      setError(false);
      logIn(mail, password);
      // signUp(mail, password, "FRE");
    }
  };
  return (
    <BrandTemp>
      <SContainer>
        <STitle>ログイン</STitle>
        <SSubTitle>
          初めて利用する方は
          <Link to={url.signup}>
            <STextLink>新規登録</STextLink>
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
          // error ? error : null
          // error
          // helperText="メールアドレスを入力してください"

          id="mail-address"
          label="メールアドレス"
          defaultValue=""
          variant="outlined"
          fullWidth
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Brank height={"40px"} />
        <Button1 active={true} onClickBtn={onSignIn}>
          ログイン
        </Button1>
        <Brank height={"24px"} />
        <div style={{ textAlign: "center" }}>
          <Link to={url.pwremainder}>
            <STextLink>パスワードを忘れた</STextLink>
          </Link>
        </div>
      </SContainer>
    </BrandTemp>
  );
}

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
const SContainer = styled.div`
  margin: 16px;
  padding: 16px 0;
`;
export default Login;
