import styled from "styled-components";
import "../../styles/color.css";
import { Brank } from "../atoms/layout/Brank";
import { HomeHeader } from "../molecules/Header/HomeHeader";

export const HomeTemp = (props) => {
  const { children, name } = props;
  return (
    <SBody>
      <HomeHeader />
      <Brank height={"50px"} />
      <SConteiner>
        <SName>{`${name}さんのリンク`}</SName>
        {children}
      </SConteiner>
    </SBody>
  );
};

const SName = styled.h2`
  font-size: 20px;
  color: var(--main-secondry);
  margin: 0 auto 20px auto;
  width: 344px;
  font-family: sans-serif;
`;
const SBody = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
const SConteiner = styled.div`
  margin: 0;
  padding-top: 30px;
`;
