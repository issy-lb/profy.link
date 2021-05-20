// 高さ可変の空白
import styled from "styled-components";

export const HBrank = (props) => {
  const { height } = props;
  return <div style={{ width: `${height}` }}></div>;
};
