import { useEffect, useState } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import { Button4 } from "../atoms/Button/Button4";
import { EditableCommentLinkList } from "../organisms/EditableCommentLinkList";
import { Brank } from "../atoms/layout/Brank";
import EditCommentLinkDetail from "./EditCommentLinkDetail";
import Edit from "./Edit";
import { useHistory, useParams } from "react-router-dom";
import { useSectionProps } from "../../hooks/useSectionProps";
import { EditDetailTemp2 } from "../templates/EditDetailTemp2";
import SwipeableViews from "react-swipeable-views";
import EditIcon from "./EditIcon";

const EditCommentLink = () => {
  //【custom hooksの読み込み】
  // ーsectuon編集を扱うhooks
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

  // ーページ遷移を扱うhooks
  const history = useHistory();

  // 【ここはフラグ系の状態管理】
  //　ートランジションの管理
  const [mount, setMount] = useState(true);

  // ー選択されてるリンクのインデックス
  const [linkIndex, setLinkIndex] = useState(-1);

  // ーアイコン選択画面遷移のindex管理

  const [index, setIndex] = useState(0);

  // ー強制レンダリング
  const [update, setUpdata] = useState(false);

  // ー選択されているアイコン
  const [icon, setIcon] = useState("");

  // 【ここはデータ系の状態管理】
  //  ーパラメータの値を取得
  const { slide, section } = useParams();

  // 【定数管理】
  // ーlistの初期値
  const brankList = [
    {
      propDisc: "",
      propIconId: "ICID000",
      propLink: "",
      propTitle: ""
    }
  ];

  // 【画面が読み込まれた１回だけ実行する処理】
  useEffect(() => {
    // スライド番号とセクション番号をもとに、
    // ローカルストレージからスライドとセクションの情報を受け取り、
    // slideBody,sectionBodyにセットする
    getContents(slide, section);
    setSectionOrder(section);
    setSlideOrder(slide);
  }, []);

  // ーアイコンの保存
  const onSaveIcon = (icid) => {
    setIcon(icid);
    setIndex(0);
  };
  // 　【ここは画面を操作する関数】

  // ー一覧画面から詳細画面へ遷移するとき
  const moveRight = () => {
    setUpdata(update ? false : true);

    setMount(false);
    document.getElementById("win1").scroll(0, 0);
  };

  // 詳細画面から一覧画面へ遷移するとき
  const moveLeft = () => {
    setUpdata(update ? false : true);

    setMount(true);
    document.getElementById("win2").scroll(0, 0);
  };

  // ー一覧画面からEdit画面へ遷移するとき
  const onBackEdit = () => {
    history.push("/edit");
  };

  // リンクを押したときの処理　を押したときの処理
  // ー　コメントリンク詳細の書き換え
  // ー　インデックス変更
  const onLinkDetail = (linkIndex) => {
    setLinkIndex(linkIndex);
    moveRight();
    console.log(linkIndex);
  };

  // リンク編集画面で「戻る」を押したときの処理
  const onBackTop = () => {
    moveLeft();
    console.log("moveLeft");
  };

  //  【ここはデータを管理する関数】
  // リンクを追加する処理
  const addLink = () => {
    console.log(changedBody);

    const newLink = {
      propDisc: "",
      propIconId: "ICID000",
      propLink: "",
      propTitle: ""
    };
    var newList = changedBody;
    newList.push(newLink);
    setChangedBody(newList);
    setUpdata(update ? false : true);
  };
  // リンクの保存処理
  const onSaveLink = (index, link) => {
    const newBody = changedBody;
    newBody[index] = link;
    setChangedBody(newBody);
    moveLeft();
  };

  // リンクの削除処理
  const deleteLink = (linkIndex) => {
    const list = changedBody;
    list.splice(linkIndex, 1);
    setLinkIndex(-1);
    setChangedBody(list);
    setMount(true);
    setChangeFlag(true);
    setUpdata(update ? false : true);
  };

  return (
    <>
      {/* １画面目 */}
      <Transition in={mount} timeout={1000}>
        {(state) => (
          <SContainer style={transitionStyle[state]} id="win1">
            <EditDetailTemp
              title={"コメントリンク"}
              disc={
                "長押しで並び順を変更できます。右矢印をタップして、リンクの編集・削除ができます"
              }
              changeFlag={changeFlag}
              onSave={save}
              onDelete={deleteSection}
              onBack={onBackEdit}
            >
              <EditableCommentLinkList
                linkList={changedBody === [] ? brankList : changedBody}
                onLinkClick={onLinkDetail}
                setChangeFlag={setChangeFlag}
                changeList={setChangedBody}
                update={update}
              />
              <br />
              <Button4
                value={"リンクを追加"}
                limited={false}
                onClickBtn={addLink}
              />
              <Brank height={"100px"} />
            </EditDetailTemp>
          </SContainer>
        )}
      </Transition>
      {/* ２画面目 */}
      <Transition in={mount} timeout={1000}>
        {(state) => (
          <SContainer2 style={transitionStyle[state]} id="win2">
            <SwipeableViews
              index={index}
              enableMouseEvents
              disabled={true}
              // containerStyle={{ width: "100vw", height: "100vh" }}
              // animateHeight={true}
            >
              <EditCommentLinkDetail
                link={linkIndex === -1 ? brankList[0] : changedBody[linkIndex]}
                setChangeFlag={setChangeFlag}
                selectedLink={linkIndex}
                changeIndex={setIndex}
                onSaveLink={onSaveLink}
                selectedIcon={icon}
                setSelectedIcon={setIcon}
                deleteLink={deleteLink}
                changeFlag={changeFlag}
                onBack={onBackTop}
                update={update}
                setUpdata={setUpdata}
                setIndex={setIndex}
              />

              <EditIcon
                onSaveIcon={onSaveIcon}
                onBack={setIndex}
                setIndex={setIndex}
              />
            </SwipeableViews>
          </SContainer2>
        )}
      </Transition>
    </>
  );
};

export default EditCommentLink;

// １画面目のスタイル
const SContainer = styled.div`
  margin: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
`;

// ２画面目のスタイル
const SContainer2 = styled.div`
  margin: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 100vw;
  z-index: 10;
`;

// 画面移動の処理
const transitionStyle = {
  entering: {
    transition: "all 0.2s ease"
  },
  entered: {
    transition: "all 0.2s ease"
  },
  exiting: {
    transition: "all 0.2s ease",
    transform: "translateX(-100vw)"
  },
  exited: {
    transition: "all 0.2s ease",
    transform: "translateX(-100vw)"
  }
};
// 画面移動の処理
const transitionStyle2 = {
  entering: {
    transition: "all 0.2s ease"
  },
  entered: {
    transition: "all 0.2s ease"
  },
  exiting: {
    transition: "all 0.2s ease",
    transform: "translateX(-100vw)"
  },
  exited: {
    transition: "all 0.2s ease",
    transform: "translateX(-100vw)"
  }
};

const SButton = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 5px;
  right: 5px;
`;

const testList = [
  {
    propDisc: "",
    propIconId: "ICID007",
    propLink: "",
    propTitle: "TikTok"
  },
  {
    propDisc: "aaa",
    propIconId: "ICID002",
    propLink: "",
    propTitle: "Twitter"
  },
  {
    propDisc: "",
    propIconId: "ICID007",
    propLink: "",
    propTitle: "TikTok"
  }
];
