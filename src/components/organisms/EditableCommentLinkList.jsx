import styled from "styled-components";
import { EditableButtonLink } from "../molecules/ButtonLink/EditableButtonLink";
import { useEffect, useState } from "react";
import arrayMove from "array-move";
import { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ButtonLink } from "../molecules/ButtonLink/ButtonLink";

// const { linkList, setChangeFlag, changeList, onLinkClick } = props;

export const EditableCommentLinkList = (props) => {
  // 初期読み込み
  const { linkList, onLinkClick, changeList, update, setChangeFlag } = props;
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems(linkList));
    console.log("yomikomi");
  }, [linkList, update]);
  // this.onDragEnd = this.onDragEnd.bind(this);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items2 = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(items2);
    changeList(getList(items2));
    setChangeFlag(true);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
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
                    <div>
                      {/* <button>aaa</button> */}
                      <EditableButtonLink
                        linkList={item.content}
                        onLinkClick={onLinkClick}
                        index={index}
                      />
                    </div>
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
};

// linkListから、D＆D用のアイテムリストを作る
const getItems = (linkList) => {
  const newItems = linkList.map((list, index) => {
    return {
      id: String(index),
      content: list
    };
  });
  return newItems;
};

// itemからlistを作る
const getList = (items) => {
  const list = items.map((item) => {
    return item.content;
  });
  return list;
};
const SContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

// 並べ替えのための処理
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// リストのアイテムのスタイル
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 5,
  margin: `0 0 5px 0`,
  ...draggableStyle
});

// リスト全体のスタイル
const getListStyle = (isDraggingOver) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 5,
  width: "350px",
  margin: "auto"
});
