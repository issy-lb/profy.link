// Module     : TopViewの全体
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import { TopView1 } from "../molecules/TopView/TopView1";
import { TopView2 } from "../molecules/TopView/TopView2";
import { TopView3 } from "../molecules/TopView/TopView3";
import { TopView4 } from "../molecules/TopView/TopView4";
import { IconLinks } from "../molecules/TopView/IconLinks";

export const TopViewCard = (props) => {
  const { TopView } = props;
  const id = TopView.id;

  const selectTemplete = (id) => {
    if (id === "TLID001") {
      return <TopView1 TopView={TopView} />;
    } else if (id === "TLID002") {
      return <TopView2 TopView={TopView} />;
    } else if (id === "TLID003") {
      return <TopView3 TopView={TopView} />;
    } else if (id === "TLID004") {
      return <TopView4 TopView={TopView} />;
    } else {
      return <TopView1 TopView={TopView} />;
    }
  };

  return (
    <>
      <SContainer>
        <SContentUpper>{selectTemplete(id)}</SContentUpper>
        <SContentBottom>
          <IconLinks TopView={TopView} />
        </SContentBottom>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 344px;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const SContentUpper = styled.div``;
const SContentBottom = styled.div``;
