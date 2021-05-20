import styled from "styled-components";
import "../../../styles/color.css";

// パーツやリンクを追加するボタン
export const Button4 = (props) => {
  // limitedはBool型　trueの場合は上限に達しているから追加できない
  // valueはボタンの中の文言
  const { limited, onClickBtn, value } = props;
  if (limited !== undefined && !limited) {
    return (
      <SCard onClick={onClickBtn}>
        <SIcon src="https://profy-59433.web.app/assets/icon/add-maru.svg" />
        <p>{value}</p>
      </SCard>
    );
  } else {
    return <></>;
  }
};
const SCard = styled.button`
  width: 349px;
  height: 56px;
  display: flex;
  align-items: center;
  background: var(--main-tertiary);
  border-radius: 10px;
  box-shadow: 0px 3px 6px var(--shadow);
  padding: 3px 5px;
  border: none;
  outline: none;
  margin: auto;
  padding: auto;
  color: var(--action-sucsess);
  justify-content: center;
  p {
    color: var(--action-success);
    font-size: 16px;
  }
`;

const SIcon = styled.img`
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
`;
