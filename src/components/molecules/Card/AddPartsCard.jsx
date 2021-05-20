// パーツを追加するためのカード
import styled from "styled-components";
import "../../../styles/color.css";
import { Button2 } from "../../atoms/Button/Button2";
import { Brank } from "../../atoms/layout/Brank";
export const AddPartsCard = (props) => {
  const { title, img, onClickBtn } = props;
  return (
    <SContainer>
      <STitle>{title}</STitle>
      <div style={{ textAlign: "center" }}>
        <SImg src={img} />
      </div>
      <Brank height={"30px"} />
      <Button2 active={"turue"} onClickBtn={onClickBtn}>
        追加
      </Button2>
    </SContainer>
  );
};

const SContainer = styled.div`
  background: var(--common);
  width: 332px;
  margin: auto;
  padding: 20px 26px;
  margin-bottom: 25px;
`;
const STitle = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: var(--main-secondry);
`;
const SImg = styled.img`
  display: inline-block;
`;
