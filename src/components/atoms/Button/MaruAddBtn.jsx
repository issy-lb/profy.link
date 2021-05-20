// 丸形の追加（＋）ボタン
import styled from "styled-components";
export const MaruAddBtn = (props) => {
  const { onClickBtn } = props;

  return (
    <SButton onClick={onClickBtn}>
      <img
        src="https://profy-59433.web.app/assets/icon/add-slide.svg"
        alt="追加"
      />
    </SButton>
  );
};

const SButton = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  border: none;
  margin: 0;
  padding: 0;
  margin: 0 5px;
`;
