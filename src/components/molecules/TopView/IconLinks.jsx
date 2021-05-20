// Module     : アイコン横並びリンク
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";
import { Icon } from "../../atoms/Icon/Icon";

export const IconLinks = (props) => {
  const { TopView } = props;
  console.log("描画前");
  console.log(TopView);
  const Items = TopView.snsList.map((item, i) => {
    return (
      <SItem>
        <a href={item.url}>
          <Icon size={"40px"} image={item.image} alt={item.alt} />
        </a>
      </SItem>
    );
  });
  return (
    <SContainer>
      <SItemList>{Items}</SItemList>
    </SContainer>
  );
};

const SContainer = styled.div`
  margin: 0 auto;
`;

const SItemList = styled.ul`
  list-style: none;
  justify-content: space-evenly;
  display: flex;
  padding: 0;
`;

const SItem = styled.li`
  padding: 4px;
  margin: 4px;
`;

// const List = TopView.snsList;
// return (
//   <SContainer>
//     <Icon
//       size={"32px"}
//       image={TopView.sns.image}
//       alt={TopView.sns.alt}
//       url={TopView.sns.url}
//     />
//     <p>SNSアイコン</p>
//   </SContainer>
