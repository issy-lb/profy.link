// TopViewの編集画面のテンプレ
// ヘッダー固定（スワイプ対応）
import styled from "styled-components";
import "../../styles/color.css";
import { HeaderBackOnly } from "../atoms/layout/HeaderBackOnly";

export const BackOnlyTemp = (props) => {
  const { children, title, disc, onSave } = props;
  return (
    <SContainer>
      <HeaderBackOnly title={"編集"} onSave={onSave} />

      <SBody>
        <STitle>{title}</STitle>
        <SDisc>{disc}</SDisc>
        {children}
      </SBody>
    </SContainer>
  );
};
const SContainer = styled.div`
  margin: 0;
  background-color: var(--background);
  min-height: 100vh;
  font-family: sans-serif;
`;

const SBody = styled.div`
  overflow: scroll;  
  height: 100vh;
   /* IE, Edge 対応 */
   -ms-overflow-style: none;
    /* Firefox 対応 */
    scrollbar-width: none;
  }
  /* Chrome, Safari 対応 */
  ::-webkit-scrollbar {
    display:none;
  }
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
