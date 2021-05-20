// 高さ可変の空白
import styled from "styled-components";

export const Brank = (props) => {
  const { height, width } = props;
  return <div style={{ height: `${height}`, width: `${width}` }}></div>;
};
