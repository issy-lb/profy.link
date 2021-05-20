import styled from "styled-components";
import "../../styles/color.css";
import { BackGround } from "../atoms/layout/BackGround";
import { Brank } from "../atoms/layout/Brank";
import { HeaderEditHome } from "../atoms/layout/HeaderEditHome";
import { EditHomeHeader } from "../molecules/Header/EditHomeHeader";

export const EditHomeTemp = (props) => {
  const { changeFlag, onSave, onPreview, children, bgLink } = props;
  return (
    <SBody>
      <HeaderEditHome
        changeFlag={changeFlag}
        link={"/home"}
        title={"編集"}
        onSave={onSave}
        onPreview={onPreview}
      />
      <Brank height={"50px"} />
      <BackGround link={bgLink} />
      <SConteiner>{children}</SConteiner>
    </SBody>
  );
};
const SBody = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
const SConteiner = styled.div`
  margin: 0;
  padding-top: 30px;
`;
