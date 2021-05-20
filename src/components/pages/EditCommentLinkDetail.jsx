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
import { EditDetailTemp2 } from "../templates/EditDetailTemp2";

const EditCommentLinkDetail = (props) => {
  const {
    link,
    setChangeFlag,
    onSaveLink,
    selectedLink,
    selectedIcon,
    setSelectedIcon,
    deleteLink,
    changeFlag,
    onBack,
    update,
    setUpdata,
    setIndex
  } = props;
  const [newLink, setNewLink] = useState({
    propTitle: "",
    propDisc: "",
    propIconId: "ICID001",
    propLink: ""
  });
  const { getIconImg, getIconName } = useIcon();

  useEffect(() => {
    // アイコンが変更されたときの処理
    if (selectedIcon !== "") {
      newLink.propIconId = selectedIcon;
      newLink.propTitle = getIconName(selectedIcon);
      setChangeFlag(true);
      setUpdata(update ? false : true);
    }
  }, [selectedIcon]);
  useEffect(() => {
    setNewLink(link);
    console.log(link);
  }, [link]);
  const updateTitle = (input) => {
    const link = newLink;
    newLink.propTitle = input;
    setNewLink(link);
  };
  const updateDisc = (input) => {
    const link = newLink;
    newLink.propDisc = input;
    setNewLink(link);
  };
  const updateLink = (input) => {
    newLink.propLink = input;
  };

  const save = () => {
    onSaveLink(selectedLink, newLink);
    setSelectedIcon("");
    setIndex(0);
  };
  return (
    <EditDetailTemp2
      title={"コメントリンク"}
      disc={
        "アイコンを選択後すると自動でSNSの名称がタイトルに入力されます。SNSでの発信内容を一言コメントで入れてください。"
      }
      changeFlag={changeFlag}
      onSave={save}
      onDelete={() => {
        deleteLink(selectedLink);
      }}
      onBack={onBack}
    >
      <SIconContainer>
        <SIcon src={getIconImg(newLink.propIconId)} />
        <Button2
          active={false}
          onClickBtn={() => {
            setIndex(1);
          }}
        >
          アイコン選択
        </Button2>
      </SIconContainer>
      <SInputContainer>
        <InputField
          placeHolder={"SNSの種類"}
          input={newLink.propTitle}
          updateInput={updateTitle}
          setChangeFlag={setChangeFlag}
        />
        <Brank height={"20px"} />
        <InputField
          placeHolder={"リンク先"}
          input={link.propLink}
          updateInput={updateLink}
          setChangeFlag={setChangeFlag}
        />
        <Brank height={"20px"} />
        <InputLargeField
          placeHolder={"ひとことコメント"}
          input={link.propDisc}
          updateInput={updateDisc}
          setChangeFlag={setChangeFlag}
        />
      </SInputContainer>
    </EditDetailTemp2>
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
export default EditCommentLinkDetail;
