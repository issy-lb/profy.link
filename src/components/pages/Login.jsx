// Module     : ログインページ
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/04
//Noto        : Material.UIを利用。カラーテーマ変更する必要あり。

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Brank } from "../atoms/layout/Brank";
import { Button1 } from "../atoms/Button/Button1";
import { BrandTemp } from "../templates/BrandTemp";
import { TitlePrimary } from "../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../atoms/Text/TitleSecondery";
import { TextField } from "@material-ui/core";
import { SimpleAlert } from "../atoms/Alert/SimpleAlert";

const url = {
  signup: "/signup",
  loginfailed: "",
  pwremainder: ""
};

const Login = () => {
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
        <SimpleAlert />
        <Brank height={"16px"} />
        <TextField
          // required
          error
          id="mail-address"
          label="メールアドレス"
          defaultValue=""
          variant="outlined"
          fullWidth
          helperText="メールアドレスを入力してください"
        />
        <Brank height={"24px"} />

        <TextField
          error
          id="outlined-password-input"
          label="パスワード"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
          helperText="パスワードを入力してください"
        />
        <Brank height={"40px"} />
        <Button1 active={true}>登録</Button1>
        <Brank height={"24px"} />
        <div style={{ textAlign: "center" }}>
          <Link to={url.pwremainder}>
            <STextLink>パスワードを忘れた</STextLink>
          </Link>
        </div>
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
  display: inline;
  text-decoration: none;
  color: var(--action-success);
`;
const SContainer = styled.div`
  margin: 16px;
  padding: 16px 0;
`;

export default Login;
