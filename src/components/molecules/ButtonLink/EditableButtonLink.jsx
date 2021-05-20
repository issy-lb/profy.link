//リンクリスト
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconMaster } from "../../../Masters/IconMaster";
import "../../../styles/color.css";
import { KadoCard } from "../../atoms/Cards/KadoCard";
import { Icon } from "../../atoms/Icon/Icon";
import { NonShadowKadomaruIcon } from "../../atoms/Icon/NonShadowKadomaruIcon";
import { Brank } from "../../atoms/layout/Brank";
export const EditableButtonLink = (props) => {
  const { propIconId, propTitle, propDisc } = props.linkList;
  const { onLinkClick, index } = props;
  const iconLink = IconMaster.filter((icon) => {
    return icon.ICID === propIconId;
  }).shift();
  return (
    <div style={{ width: "344px", margin: "0 auto" }}>
      <KadoCard>
        <SContainer>
          <Brank width="7px" />
          <SMenu src="https://profy-59433.web.app/assets/icon/menu.svg" />
          <Brank width="12px" />
          <NonShadowKadomaruIcon image={iconLink.icon} size={"27px"} />
          <Brank width="3px" />

          <SBody>
            <STitle>{propTitle}</STitle>
            <SDisc>{propDisc}</SDisc>
          </SBody>

          <Brank width="14px" />
          <SButton
            onClick={() => {
              onLinkClick(index);
            }}
          >
            <SNext
              src={"https://profy-59433.web.app/assets/icon/next-page.svg"}
            />
          </SButton>
        </SContainer>
      </KadoCard>
    </div>
  );
};

const SMenu = styled.img`
  display: block;
  height: 11.5px;
  padding: 0;
  margin: 0;
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-family: sans-serif;
  width: 344px;
`;

const SBody = styled.div`
  text-align: left;
  margin-left: 10px;
  width: 10px;
`;
const STitle = styled.div`
  font-size: 16px;
  color: var(--main-secondry);
  font-weight: bold;
  width: 220px;
`;
const SDisc = styled.div`
  font-size: 12px;
  color: var(--sub-common);
  white-space: pre-wrap;
  width: 220px;
`;
const SNext = styled.img`
  display: block;
  height: 15px;
  padding: 0;
  margin: 0;
`;

const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
  height: 40px;
  width: 30px;
  padding-left: 200px;
  padding-right: 30px;
`;
