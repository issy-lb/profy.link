// スライドを変えるバー
import styled from "styled-components";
import "../../../styles/color.css";

export const SlideBar = (props) => {
  const { active } = props;
  const SlideBar = active ? (
    <SActiveBar></SActiveBar>
  ) : (
    <SInActiveBar></SInActiveBar>
  );
  return <>{SlideBar}</>;
};

const SActiveBar = styled.div`
  width: 40px;
  height: 4px;
  background-color: var(--main-accent);
`;

const SInActiveBar = styled.div`
  width: 40px;
  height: 4px;
  background-color: var(--sub-common);
`;
