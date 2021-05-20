import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button1 } from "../atoms/Button/Button1";
import { InputField } from "../atoms/Form/InputField";
import { Brank } from "../atoms/layout/Brank";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";
import styled from "styled-components";
import { useLocalDB } from "../../hooks/useLocalDB";
import { TopViewEditTemp } from "../templates/TopViewEditTemp";

const SettingLink = () => {
  // リンク名格納用
  const [linkTitle, setLinkTitle] = useState("");

  // リンク格納用
  const [linkURL, setLinkURL] = useState("");

  // 変更管理用フラグ
  const [changeFlag, setChangeFlag] = useState(false);

  // 画面遷移用
  const history = useHistory();

  // ローカルストレージと通信するhooks読み込み
  const {
    saveLinkInfoOnLOcalStrage,
    getLinkContentsFromLocalStrage
  } = useLocalDB();
  // ローカルストレージから、リンクURLとリンク名を取得する
  const onCreate = () => {
    saveLinkInfoOnLOcalStrage(linkTitle, linkURL);
    history.push("/edit");
  };
  // 画面読み込み時の挙動
  useEffect(() => {
    const link = getLinkContentsFromLocalStrage();
    setLinkTitle(link.mainTitle);
    setLinkURL(link.link);
  }, []);

  // チェックボタンを押した時
  const onSave = () => {
    history.push("/edit");
  };

  return (
    <TopViewEditTemp
      title={"リンクの設定"}
      disc={
        "ページタイトルとURLを変更できます（「公開」するまでは保存されません）"
      }
      link={"/edit"}
      changeFlag={changeFlag}
      onSave={onSave}
    >
      <InputField
        placeHolder={"リンク名（自分の管理用）"}
        updateInput={setLinkTitle}
        setChangeFlag={setChangeFlag}
        input={linkTitle}
      />
      <Brank height={"20px"} />
      <SContainer>
        <SLinkHead>https://profy.link/</SLinkHead>
        <InputField
          placeHolder={"半角英数字15字以内"}
          inputWidth={"160px"}
          updateInput={setLinkURL}
          setChangeFlag={setChangeFlag}
          input={linkURL}
        />
      </SContainer>
    </TopViewEditTemp>
  );
};
export default SettingLink;
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
