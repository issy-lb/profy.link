import { Button1 } from "../atoms/Button/Button1";
import { InputField } from "../atoms/Form/InputField";
import { Brank } from "../atoms/layout/Brank";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCreateLink } from "../../hooks/useCrateLink";
import useCookie from "../../hooks/useCookie";
import { useHome } from "../../hooks/useHome";
import { SimpleAlert } from "../atoms/Alert/SimpleAlert";

const CreateLink = () => {
  // リンク名格納用
  const [linkTitle, setLinkTitle] = useState("");

  // リンク格納用
  const [linkURL, setLinkURL] = useState("");

  // 変更管理用フラグ
  const [changeFlag, setChangeFlag] = useState(false);

  // 画面遷移用
  const history = useHistory();

  // リンク作成用のhooksを読み込む
  const {
    createLinkOnLocalStrage,
    createLink,
    error,
    errorMsg,
    setError,
    setErrorMsg
  } = useCreateLink();

  // cookie
  const [cookie, updateCookie] = useCookie("userid", "undefined");

  // ユーザー情報を読み取る
  const { getHomeInfo, linkList } = useHome();

  // 画面が読み込まれた時最初の処理
  useEffect(() => {
    getHomeInfo(cookie);
  }, []);

  // 作成ボタンが押された時
  const onCreate = () => {
    // ローカルストレージ
    // createLinkOnLocalStrage(linkTitle, linkURL);
    // history.push("/home");

    // サーバーとのやりとり
    createLink(cookie, linkList.length + 1, linkURL, linkTitle);
  };

  return (
    <LinkSettingTemp
      title={"リンク作成"}
      subTitle={"リンクを作成しよう！"}
      disc={"リンク名とURLを設定してください。どちらも後から変更可能です"}
      link={"/home"}
    >
      {error ? (
        <>
          <SimpleAlert severity="error">{errorMsg}</SimpleAlert>
          <Brank height={"16px"} />
        </>
      ) : null}
      <InputField
        placeHolder={"リンク名（自分の管理用）"}
        updateInput={setLinkTitle}
        setChangeFlag={setChangeFlag}
      />
      <Brank height={"20px"} />
      <SContainer>
        <SLinkHead>https://profy.link/</SLinkHead>
        <InputField
          placeHolder={"半角英数字15字以内"}
          inputWidth={"160px"}
          updateInput={setLinkURL}
          setChangeFlag={setChangeFlag}
        />
      </SContainer>
      <Brank height={"40px"} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button1 active={changeFlag} onClickBtn={onCreate}>
          作成
        </Button1>
      </div>
    </LinkSettingTemp>
  );
};
export default CreateLink;

const SContainer = styled.div`
  display: flex;
  width: 314px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
const SLinkHead = styled.p`
  font-size: 15px;
  margin-right: 10px;
`;
