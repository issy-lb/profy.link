// コメントリンクの編集画面

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSectionProps } from "../../hooks/useSectionProps";
import { EditableButtonLinkList } from "../organisms/EditableButtonLinkList";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import SwipeableViews from "react-swipeable-views";
import EditButtonLinkDetail from "./EditButtonLinkDetail";
import EditIcon from "./EditIcon";
import { Button4 } from "../atoms/Button/Button4";
import styled from "styled-components";
import { Test } from "./Test";

const EditButtonLink = () => {
  // カスタムフックス「useSectionProps」から読み込み
  const {
    sectionBody,
    getContents,
    changeFlag,
    setChangeFlag,
    changedBody,
    save,
    setChangedBody,
    setSlideOrder,
    setSectionOrder,
    deleteSection
  } = useSectionProps();

  //  パラメータの値を取得
  const { slide, section } = useParams();

  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    // スライド番号とセクション番号をもとに、
    // ローカルストレージからスライドとセクションの情報を受け取り、
    // slideBody,sectionBodyにセットする
    getContents(slide, section);
    setSectionOrder(section);
    setSlideOrder(slide);
  }, []);

  // ここから、スライドの実装

  // スワイプのインデックス管理
  const [index, setIndex] = useState(0);
  // 選択されている配列管理
  const [selectedLink, setSelectedLink] = useState(0);

  // index0⇨１　を押したときの処理
  // -コメントリンク詳細の書き換え
  // -インデックス変更
  const onLinkDetail = (linkIndex) => {
    setSelectedLink(linkIndex);
    setIndex(1);
    console.log(changedBody);
  };

  const onSaveLink = (index, link) => {
    const newBody = changedBody;
    newBody[index] = link;
    setChangedBody(newBody);
  };

  // コメントリンクの追加
  const addLink = () => {
    const list = changedBody;
    list.push({
      propDisc: "",
      propIconId: "ICID000",
      propLink: "",
      propTitle: ""
    });
    setChangedBody(list);
    setSelectedLink(list.length - 1);
    setIndex(1);
    setChangeFlag(true);
  };

  // コメントリンクの削除
  const deleteLink = (linkIndex) => {
    const list = changedBody;
    list.splice(linkIndex, 1);
    setChangedBody(list);
    setIndex(0);
    setChangeFlag(true);
    setSelectedLink(0);
  };

  // アイコンの保存
  const [selectedIcon, setSelectedIcon] = useState("");
  const onSaveIcon = (icid) => {
    setSelectedIcon(icid);
    setIndex(1);
  };

  return (
    <SwipeableViews
      index={index}
      enableMouseEvents
      disabled={true}
      containerStyle={{ width: "100vw", height: "100vh" }}
      animateHeight={true}
    >
      <EditDetailTemp
        title={"コメントリンク"}
        disc={
          "長押しで並び順を変更できます。左にスワイプでリンクを削除できます。"
        }
        link={"/edit"}
        changeFlag={changeFlag}
        onSave={save}
        onDelete={deleteSection}
      >
        <SContainer>
          <EditableButtonLinkList
            linkList={sectionBody}
            setChangeFlag={setChangeFlag}
            changeList={setChangedBody}
            onLinkClick={onLinkDetail}
          />
          <br />
          <Button4
            value={"リンクを追加"}
            limited={false}
            onClickBtn={addLink}
          />
        </SContainer>
      </EditDetailTemp>
      <EditButtonLinkDetail
        link={changedBody[selectedLink]}
        setChangeFlag={setChangeFlag}
        selectedLink={selectedLink}
        changeIndex={setIndex}
        onSaveLink={onSaveLink}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        deleteLink={deleteLink}
      />
      <EditIcon onSaveIcon={onSaveIcon} onBack={setIndex} />
    </SwipeableViews>
  );
};
export default EditButtonLink;
const SContainer = styled.div`
  width: 350px;
  margin: auto;
`;
