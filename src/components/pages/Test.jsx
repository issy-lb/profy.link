import { useEffect, useState } from "react";
import arrayMove from "array-move";
import styled from "styled-components";
import { EditDetailTemp } from "../templates/EditDetailTemp";
import { Brank } from "../atoms/layout/Brank";
import React, { Component } from "react";
import { Transition } from "react-transition-group";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SwipeableViews from "react-swipeable-views";
import zIndex from "@material-ui/core/styles/zIndex";
import { EditableButtonLinkList } from "../organisms/EditableButtonLinkList";
import { ButtonLink } from "../molecules/ButtonLink/ButtonLink";
import { ButtonLinkDetailTemp } from "../templates/ButtonLinkDetailTemp";
import { Button2 } from "../atoms/Button/Button2";
import { InputField } from "../atoms/Form/InputField";
import { InputLargeField } from "../atoms/Form/InputLargeField";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: {
      propDisc: "",
      propIconId: "ICID001",
      propLink: "",
      propTitle: "Instagram"
    }
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 3;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  // background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "350px"
});

class DND extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(20)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
    console.log(items);
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      // style={{margin:"20px"}}
                    >
                      <ButtonLink linkList={item.content} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export const Test = () => {
  // スワイプのインデックス管理
  const [index, setIndex] = useState(0);
  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff"
    },
    slide1: {
      backgroundColor: "#FEA900",
      minHeight: "2000px"
    },
    slide2: {
      backgroundColor: "#B3DC4A",
      minHeight: "1000px"
    },
    slide3: {
      backgroundColor: "#6AC0FF"
    }
  };
  // return (
  //   <SwipeableViews
  //     index={index}
  //     enableMouseEvents
  //     disabled={true}
  //     containerStyle={{ width: "100vw", height: "100vh" }}
  //     animateHeight={true}
  //   >
  //     <EditDetailTemp
  //       title={"コメントリンク"}
  //       disc={
  //         "長押しで並び順を変更できます。左にスワイプでリンクを削除できます。"
  //       }
  //       link={"/edit"}
  //     >
  //       <SContainer>
  //         <DND />
  //       </SContainer>
  //     </EditDetailTemp>
  //   </SwipeableViews>
  // );
  //マウントの状態を管理

  const [mount, setMount] = useState(false);
  return (
    <>
      <SButton>
        <button
          onClick={() => {
            setMount(true);
            document.getElementById("win1").scroll(0, 0);
          }}
        >
          移動まえ
        </button>
        <button
          onClick={() => {
            setMount(false);
            document.getElementById("win2").scroll(0, 0);
          }}
        >
          移動後
        </button>
      </SButton>
      <Transition in={mount} timeout={1000}>
        {(state) => (
          <SContainer style={transitionStyle[state]} id="win1">
            <Brank height={"50px"} />
            <ButtonLinkDetail />
            <DND />
            <Brank height={"20px"} />

            <input
              value={"aaa"}
              style={{ fontSize: "16px" }}
              onBlur={() => {
                document.defaultView.scroll(0, 0);
              }}
            ></input>
            <Brank height={"100px"} />
          </SContainer>
        )}
      </Transition>
      <Transition in={mount} timeout={1000}>
        {(state) => (
          <SContainer2 style={transitionStyle[state]} id="win2">
            <SwipeableViews
              index={index}
              enableMouseEvents
              // disabled={true}
              containerStyle={{ width: "100vw", height: "100vh" }}
              animateHeight={true}
            >
              <ButtonLinkDetail />
              <>aaa</>
            </SwipeableViews>
          </SContainer2>
        )}
      </Transition>
    </>
  );
};
const SContainer = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  background: red;
  overflow: scroll;
  position: absolute;
  overflow-x: hidden;
`;
const SContainer2 = styled.div`
  margin: auto;
  overflow-x: hidden;

  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  top: 0;
  background: red;
  left: 100vw;
`;
const transitionStyle = {
  entering: {
    transition: "all 0.2s ease"
    /* // transform: "translateY(0) " */
  },
  entered: {
    transition: "all 0.2s ease"
    /* // transform: "translateY(0) " */
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
  position: fixed;
  z-index: 10;
`;
const ButtonLinkDetail = () => {
  return (
    <ButtonLinkDetailTemp
      title={"コメントリンク"}
      disc={
        "アイコンを選択後すると自動でSNSの名称がタイトルに入力されます。SNSでの発信内容を一言コメントで入れてください。"
      }
    >
      <SIconContainer>
        <SIcon />
        <Button2 active={false} onClickBtn={() => {}}>
          アイコン選択
        </Button2>
      </SIconContainer>
      <SInputContainer>
        <InputField placeHolder={"SNSの種類"} input={"aaaa"} />
        <Brank height={"20px"} />
        <InputField placeHolder={"リンク先"} input={"あああ"} />
        <Brank height={"20px"} />
        <InputLargeField placeHolder={"ひとことコメント"} input={"ssssssss"} />
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
