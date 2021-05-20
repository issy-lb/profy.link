import styled from "styled-components";
import { EditableButtonLink } from "../molecules/ButtonLink/EditableButtonLink";
import { Container, Draggable } from "react-smooth-dnd";
import { useEffect, useState } from "react";
import arrayMove from "array-move";

export const EditableButtonLinkList = (props) => {
  const { linkList, setChangeFlag, changeList, onLinkClick } = props;
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(linkList);
  }, [linkList]);

  // 並び替えのD＆Dが落ちたとき
  const onDrop = (dropResult) => {
    const { removedIndex, addedIndex } = dropResult;
    const newItems = arrayMove(items, removedIndex || 0, addedIndex || 0);
    setItems(newItems);
    changeList(newItems);
    setChangeFlag(true);
  };

  return (
    <div style={{ width: "344px" }}>
      <Container onDrop={onDrop}>
        {items.map((link, index) => {
          return (
            <Draggable>
              <SContainer>
                <EditableButtonLink
                  linkList={link}
                  onLinkClick={onLinkClick}
                  index={index}
                />
              </SContainer>
            </Draggable>
          );
        })}
      </Container>
    </div>
  );
};

const SContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;
