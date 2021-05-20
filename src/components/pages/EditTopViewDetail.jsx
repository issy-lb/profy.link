import { EditDetailTemp } from "../templates/EditDetailTemp";
import styled from "styled-components";
import { InputField } from "../atoms/Form/InputField";
import { InputLargeField } from "../atoms/Form/InputLargeField";
import { Brank } from "../atoms/layout/Brank";
import { Button2 } from "../atoms/Button/Button2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ButtonLinkDetailTemp } from "../templates/ButtonLinkDetailTemp";
import { useIcon } from "../../hooks/useIcon";
import { BackOnlyTemp } from "../templates/BackOnlyTemp";

const EditTopViewDetail = (props) => {
  const {
    // 現在選択しているリンク情報
    link,
    setChangeFlag,
    // 保存ボタンを押したときの処理
    onSaveLink,
    // 選ばれてるリンクのインデックス
    selectedLink,
    // スライドを更新
    changeIndex,
    // アイコン画面で選んだ場合
    selectedIcon,
    setSelectedIcon,
    deleteLink
  } = props;
  const [update, setUpdata] = useState(false);

  const [newLink, setNewLink] = useState({
    snsIconId: "ICID000",
    snskink: ""
  });
  const { getIconImg } = useIcon();
  useEffect(() => {
    // アイコンが変更されたときの処理
    if (selectedIcon !== "") {
      newLink.snsIconId = selectedIcon;
      setChangeFlag(true);
      setUpdata(update ? false : true);
    }
  }, [selectedIcon]);
  useEffect(() => {
    setNewLink(link);
    console.log(link);
  }, [link]);

  const updateLink = (input) => {
    newLink.snslink = input;
  };

  const save = () => {
    onSaveLink(selectedLink, newLink);
    setSelectedIcon("");
    changeIndex(0);
  };
  return (
    <ButtonLinkDetailTemp
      title={"SNSリンク"}
      disc={"アイコンを選択して、SNSのリンクを入力してください。"}
      onSave={save}
      onDelete={() => {
        deleteLink(selectedLink);
      }}
    >
      <SIconContainer>
        <SIcon src={getIconImg(newLink.snsIconId)} />
        <Button2
          active={false}
          onClickBtn={() => {
            changeIndex(2);
          }}
        >
          アイコン選択
        </Button2>
      </SIconContainer>
      <SInputContainer>
        <Brank height={"20px"} />
        <InputField
          placeHolder={"リンク先"}
          input={link.snslink}
          updateInput={updateLink}
          setChangeFlag={setChangeFlag}
        />
      </SInputContainer>
    </ButtonLinkDetailTemp>
  );
};
const SIconContainer = styled.div`
  display: flex;
  width: 340px;
  margin: 0 auto;
  align-items: center;
  margin-top: 30px;
`;
const SIcon = styled.img`
  display: block;
  border-radius: 15px;
  margin-right: 18px;
  width: 60px;
  height: 60px;
`;
const SInputContainer = styled.div`
  margin-top: 50px;
`;
export default EditTopViewDetail;
