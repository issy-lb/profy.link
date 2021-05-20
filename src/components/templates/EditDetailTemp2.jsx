// 編集画面詳細のテンプレ
// 「戻る」を押すと、リンクではなくイベントが発火
import styled from "styled-components";
import "../../styles/color.css";
import { Brank } from "../atoms/layout/Brank";
import { HeaderEditDetail } from "../atoms/layout/HeaderEditDetail";
import { HeaderEditDetail2 } from "../atoms/layout/HeaderEditDetail2";

export const EditDetailTemp2 = (props) => {
  const {
    children,
    title,
    disc,
    link,
    onSave,
    changeFlag,
    onDelete,
    onBack
  } = props;
  return (
    // <SContainer>
    <SContainer>
      <HeaderEditDetail2
        link={link}
        title={"編集"}
        onSave={onSave}
        changeFlag={changeFlag}
        onDelete={onDelete}
        onBack={onBack}
      />

      <SBody>
        <STitle>{title}</STitle>
        <SDisc>{disc}</SDisc>
        {children}
        <Brank height={"50px"} />
      </SBody>
      {/* </SContainer> */}
    </SContainer>
  );
};
const SContainer = styled.div`
  background-color: var(--background);
  font-family: sans-serif;
  min-height: 100vh;
  margin: 0;
`;

const SBody = styled.div`
  padding-top: 60px;
`;
const STitle = styled.h2`
  margin-left: 25px;
  font-size: 24px;
  color: var(--main-secondry);
  padding: 0px;
  margin-bottom: 44px;
`;
const SDisc = styled.p`
  font-size: 16px;
  margin: 0 25px;
  margin-bottom: 24px;
  padding: 0;
  color: var(--main-secondry);
`;
