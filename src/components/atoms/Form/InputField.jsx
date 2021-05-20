// 丸角のアクティブボタン
import { useEffect, useState, memo } from "react";
import styled from "styled-components";
import "../../../styles/color.css";
import "../../../styles/font.css";
export const InputField = memo((props) => {
  const { placeHolder, input, updateInput, setChangeFlag, inputWidth } = props;
  const [inputValue, setInputValue] = useState("");
  const width = inputWidth ? inputWidth : "314px";
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
        style={{ width: width }}
      />
    </SForm>
  );
});
const SForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
`;
const SInput = styled.input`
  outline: none;
  height: 67px;
  border: 1px solid var(--main-secondry);
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  &::placeholder {
    font-size: 14px;
    color: var(--main-dark);
  }
  &:focus {
    border: 1px solid var(--action-success);
  }
`;
