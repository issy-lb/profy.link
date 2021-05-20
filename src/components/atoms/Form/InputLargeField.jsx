// 丸角のアクティブボタン
import { useEffect, useState } from "react";
import styled from "styled-components";
import "../../../styles/color.css";
import "../../../styles/font.css";
export const InputLargeField = (props) => {
  const { placeHolder, input, updateInput, setChangeFlag } = props;
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(input);
  }, [input]);
  const changeInput = (e) => {
    setInputValue(e.target.value);
    updateInput(e.target.value);
    setChangeFlag(true);
  };
  return (
    <SForm>
      <SInput
        placeholder={placeHolder}
        value={inputValue}
        onChange={changeInput}
      />
    </SForm>
  );
};
const SForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
`;
const SInput = styled.textarea`
  outline: none;
  width: 314px;
  height: 118px;
  border: 1px solid var(--main-secondry);
  border-radius: 15px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    color: var(--main-dark);
  }
  &:focus {
    border: 1px solid var(--action-success);
  }
`;
