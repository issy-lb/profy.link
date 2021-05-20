// コンポーネントを追加するカードのリスト
import styled from "styled-components";
import { AddPartsCard } from "../molecules/Card/AddPartsCard";
export const AddPartsCardList = (props) => {
  const { partsList, onClickBtn } = props;
  const list = partsList.map((list) => {
    return (
      <AddPartsCard
        title={list.title}
        img={list.img}
        onClickBtn={() => {
          onClickBtn(list.sectionId);
        }}
      />
    );
  });
  return <SContainer>{list}</SContainer>;
};
const SContainer = styled.div``;
