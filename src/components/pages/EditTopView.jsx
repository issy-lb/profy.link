// TopViewの編集画面

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTopView } from "../../hooks/useTopView";
import SwipeableViews from "react-swipeable-views";
import EditButtonLinkDetail from "./EditButtonLinkDetail";
import EditIcon from "./EditIcon";
import { Button4 } from "../atoms/Button/Button4";
import { TopViewEditTemp } from "../templates/TopViewEditTemp";
import { Button2 } from "../atoms/Button/Button2";
import { Brank } from "../atoms/layout/Brank";
import { TopViewEditCard } from "../organisms/TopViewEditCard";
import { useHeader } from "../../hooks/useHeader";
import { HeaderTopViewEdit } from "../atoms/layout/HeaderTopViewEdit";
import { InputField } from "../atoms/Form/InputField";
import { InputLargeField } from "../atoms/Form/InputLargeField";
import { useHistory } from "react-router-dom";
import { EditableButtonLinkList } from "../organisms/EditableButtonLinkList";
import { TopViewPreview } from "./TopViewPreview";
import EditTopViewDetail from "./EditTopViewDetail";
import EditMovieView from "./EditMovieView";
import useCookie from "../../hooks/useCookie";
import { useImage } from "../../hooks/useImage";

const EditTopView = () => {
  const { getLinkList, getSnsList } = useHeader();

  // TopView処理用のhooks
  const {
    getContents,
    changeFlag,
    setChangeFlag,
    changedBody,
    setChangedBody,
    save
  } = useTopView();

  // TopView変換用のhooks
  const { getTopView } = useHeader();

  // ユーザーIDをcookieから取得
  const [cookie, updateCookie] = useCookie("userid", "undefined");

  // 画像を扱うためのhooks導入
  const {
    imageUrl,
    imageUrl2,
    onSubmit,
    onSubmit2,
    uploading,
    uploading2,
    setUploading,
    setUploading2,
    setFilePath
  } = useImage();

  // 画面が読み込まれた１回だけ実行する処理
  useEffect(() => {
    getContents();
    if (changedBody.sns.length >= 3) {
      setLimited(true);
    }
    setFilePath(`images/${cookie}`);
  }, []);

  // 背景画像Uploading処理開始
  // ー　フラグを無効にする
  // ー　アップロード中をtrueにする
  const startUploading = () => {
    setChangeFlag(false);
    setUploading(true);
  };

  // プロフ画像Uploading処理開始
  // ー　フラグを無効にする
  // ー　アップロード中をtrueにする
  const startUploading2 = () => {
    setChangeFlag(false);
    setUploading2(true);
  };

  // 背景画像Uploading処理（uplodadingフラグが変更された時）
  // ー　アップロード中ではなく、イメージURLが空（初回画面読み込み時）でもない時
  // ー　changedBodyに最新のURLを保存する
  useEffect(() => {
    if (!uploading && imageUrl !== "") {
      changedBody.headerBackground = imageUrl;
      setChangeFlag(true);
    }
  }, [uploading]);

  // プロフ画像Uploading処理（uplodadingフラグが変更された時）
  // ー　アップロード中ではなく、イメージURLが空（初回画面読み込み時）でもない時
  // ー　changedBodyに最新のURLを保存する
  useEffect(() => {
    if (!uploading2 && imageUrl2 !== "") {
      changedBody.headerIcon = imageUrl2;
      setChangeFlag(true);
    }
  }, [uploading2]);

  // snsリンクのlimitedを管理
  useEffect(() => {
    if (changedBody.sns.length >= 3) {
      setLimited(true);
    } else {
      setLimited(false);
    }
  }, [changedBody]);

  // ここから、スライドの実装
  // テンプレートの保存処理
  const saveTemp = () => {
    setIndex(0);
  };

  const history = useHistory();
  // スワイプ先の設定
  const [isSelectTemp, setIsSelectTemp] = useState(true);

  // スワイプのインデックス管理
  const [index, setIndex] = useState(0);
  // 選択されている配列管理
  const [selectedLink, setSelectedLink] = useState(0);

  // snsリンクの制限
  const [limited, setLimited] = useState(false);

  // アイコンの保存
  const [selectedIcon, setSelectedIcon] = useState("");
  const onSaveIcon = (icid) => {
    setSelectedIcon(icid);
    setIndex(1);
  };

  // テキストの保存
  const saveName = (input) => {
    changedBody.name = input;
  };
  const saveTitle = (input) => {
    changedBody.headerTitle = input;
  };
  const saveDisc = (input) => {
    changedBody.disc = input;
  };

  const onSaveLink = (index, link) => {
    changedBody.sns[index] = link;
  };
  // リンクの並び替え保存
  const changeList = (input) => {
    changedBody.sns = getSnsList(input);
    console.log(changedBody);
  };

  const onSave = () => {
    save();
  };

  // リンクを押したときの処理
  const onLinkDetail = (linkIndex) => {
    setSelectedLink(linkIndex);
    setIsSelectTemp(false);
    setIndex(1);
  };

  // テンプレート変更
  const changeTemplate = (tlid) => {
    changedBody.templateId = tlid;
    setChangeFlag(true);
    setIndex(0);
  };

  // コメントリンクの追加
  const addLink = () => {
    changedBody.sns.push({
      snsIconId: "ICID000",
      snslink: ""
    });
    if (changedBody.sns.length >= 3) {
      setLimited(true);
    }
    setSelectedLink(changedBody.sns.length - 1);
    setIsSelectTemp(false);
    setIndex(1);
    setChangeFlag(true);
  };

  // コメントリンクの削除
  const deleteLink = (linkIndex) => {
    if (changedBody.sns.length === 1) {
      const brankSNS = {
        snsLink: "",
        snsIconId: "ICID000"
      };
      setSelectedLink(brankSNS);
    }
    changedBody.sns.splice(linkIndex, 1);
    setChangeFlag(true);
    setSelectedLink(0);
    setIndex(0);
    setLimited(false);
  };

  // 選択されているsnsを格納
  const [selectedSNS, setSelectedSNS] = useState(changedBody.sns[selectedLink]);

  // 選択されているsnsを更新
  useEffect(() => {
    setSelectedSNS(changedBody.sns[selectedLink]);
  }, [selectedLink]);

  return (
    <SwipeableViews
      index={index}
      enableMouseEvents
      disabled={true}
      containerStyle={{ width: "100vw" }}
      animateHeight={true}
    >
      <STest>
        <TopViewEditTemp
          title={"トップビュー"}
          disc={"トップビューのコンテンツを変更できます"}
          link={"/edit"}
          changeFlag={changeFlag}
          onSave={onSave}
        >
          <SContainer>
            <div style={{ width: "100px" }}>
              <Button2
                active={false}
                onClickBtn={() => {
                  setIsSelectTemp(true);
                  setIndex(1);
                }}
              >
                レイアウト変更
              </Button2>
              <Brank height={"30px"} />
              <TopViewEditCard
                TopView={getTopView(changedBody)}
                startUploading={startUploading}
                onSubmit={onSubmit}
                startUploading2={startUploading2}
                onSubmit2={onSubmit2}
              />
              <InputField
                placeHolder={"名前"}
                input={changedBody.name}
                updateInput={saveName}
                setChangeFlag={setChangeFlag}
              />
              <Brank height={"30px"} />
              <InputField
                placeHolder={"肩書き"}
                input={changedBody.headerTitle}
                updateInput={saveTitle}
                setChangeFlag={setChangeFlag}
              />
              <Brank height={"30px"} />

              <InputLargeField
                placeHolder={"ひとこと"}
                input={changedBody.disc}
                updateInput={saveDisc}
                setChangeFlag={setChangeFlag}
              />
              <Brank height={"40px"} />
              <EditableButtonLinkList
                linkList={getLinkList(changedBody.sns)}
                setChangeFlag={setChangeFlag}
                changeList={changeList}
                onLinkClick={onLinkDetail}
              />
              <Button4
                value={"リンクを追加"}
                limited={limited}
                onClickBtn={addLink}
              />
              <Brank height={"40px"} />

              <br />
            </div>
          </SContainer>
          {/* </SScroll> */}
          {/* </> */}
        </TopViewEditTemp>
      </STest>
      {isSelectTemp ? (
        <TopViewPreview
          save={saveTemp}
          changedBody={changedBody}
          changeTemplate={changeTemplate}
          selectedId={changedBody.templateId}
        />
      ) : (
        <EditTopViewDetail
          link={selectedSNS}
          setChangeFlag={setChangeFlag}
          selectedLink={selectedLink}
          changeIndex={setIndex}
          onSaveLink={onSaveLink}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
          deleteLink={deleteLink}
        />
      )}
      <EditIcon onSaveIcon={onSaveIcon} onBack={setIndex} />
    </SwipeableViews>
  );
};
export default EditTopView;

const SContainer = styled.div`
  width: 350px;
  margin: auto;
`;
const STest = styled.div`
  overflow: scroll;
  height: 100vh;
`;
