// // Module     : Tab,Button切り替えパーツ
// // Author     : okabe
// // LastUpdate : 2021/05/02
// // Since      : 2021/05/02

import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import styled from "styled-components";
import { Button3 } from "../atoms/Button/Button3";

const index = [1, 2, 3, 4];

export const SelectTab = () => {
  const [value, setValue] = useState(1);
  // const chandeIndex = (index) => {
  //   setValue(index);
  // };

  const onClick = (index) => {
    setValue(index);
  };
  return (
    <SContainer>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(1)}
      >
        <Button3 id={1} selectedId={value}>
          Templete1
        </Button3>
      </SButton>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(2)}
      >
        <Button3 id={2} selectedId={value}>
          Templete2
        </Button3>
      </SButton>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(3)}
      >
        <Button3 id={3} selectedId={value}>
          Templete3
        </Button3>
      </SButton>
      <SButton
        style={{ border: "none", background: "none" }}
        onClick={() => onClick(4)}
      >
        <Button3 id={4} selectedId={value}>
          Templete4
        </Button3>
      </SButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
  width: 100vw;
`;
const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;
