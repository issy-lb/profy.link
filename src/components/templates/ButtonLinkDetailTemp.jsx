// コメントリンクの詳細編集画面のテンプレ
import styled from "styled-components";
import "../../styles/color.css";
import { HeaderButtonLinkDetail } from "../atoms/layout/HeaderButtonLinkDetail";

export const ButtonLinkDetailTemp = (props) => {
  const { children, title, disc, link, onSave, onDelete } = props;
  return (
    <SContainer>
      <HeaderButtonLinkDetail
        link={link}
        title={"編集"}
        onSave={onSave}
        onDelete={onDelete}
      />

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
  padding-top: 60px;
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
