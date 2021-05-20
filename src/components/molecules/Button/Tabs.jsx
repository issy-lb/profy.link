// Module     : タブのリスト
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

import styled from "styled-components";
import "../../../styles/color.css";
import { Tab } from "../../atoms/Button/Tab";

export const Tabs = (props) => {
  // const { this } = props;
  return (
    <SContainer>
      <Tab>Tab1</Tab>
      {/* <STabs>
        <STabList>
          <STab>
            <Tab value={"Tab1"} />
          </STab>
          <STab>
            <Tab value={"Tab2"} />
          </STab>
        </STabList>
        <STabContent>ここにTabのコンテンツが入る</STabContent>
      </STabs> */}
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: grey;
  margin: 0 auto;
  width: 344px;
`;

const STabs = styled.div`
  background-color: #95ebc2;
`;

const STabList = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  border-bottom: 1px solid var(--common);
`;

const STab = styled.li`
  background-color: var(--action-success);
  display: block;
  height: 40px;
  padding: 4px;
  width: 50%;
`;

const STabContent = styled.div`
  background-color: #ccc;
`;
