// TopViewの編集画面のテンプレ
import styled from "styled-components";
import "../../styles/color.css";
import { Brank } from "../atoms/layout/Brank";
import { HeaderTopViewEdit } from "../atoms/layout/HeaderTopViewEdit";

export const TopViewEditTemp = (props) => {
  const { children, title, disc, link, onSave, changeFlag } = props;
  return (
    <SContainer>
      <HeaderTopViewEdit
        link={link}
        title={"編集"}
        onSaveBtn={onSave}
        changeFlag={changeFlag}
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
  background-color: var(--background);
  font-family: sans-serif;
  min-height: 100vh;
  margin: 0;
`;

const SBody = styled.div`
  padding-top: 60px;
  height: auto;
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
