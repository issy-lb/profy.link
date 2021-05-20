//リンクリスト
import styled from "styled-components";
import { IconMaster } from "../../../Masters/IconMaster";
import "../../../styles/color.css";
import { KadoCard } from "../../atoms/Cards/KadoCard";
export const ButtonLink = (props) => {
  const { propIconId, propTitle, propDisc, propLink } = props.linkList;
  const iconLink = IconMaster.filter((icon) => {
    return icon.ICID === propIconId;
  });
  return (
    <div style={{ width: "344px", margin: "0 auto" }}>
      <a href={propLink} style={{ textDecoration: "none" }}>
        <KadoCard>
          <SContainer>
            <SIcon src={iconLink[0].icon} />
            <SBody>
              <STitle>{propTitle}</STitle>
              <SDisc>
                {propDisc === ""
                  ? "興味を持ってもらえるように発信内容をコメントで紹介！"
                  : propDisc}
              </SDisc>
            </SBody>
          </SContainer>
        </KadoCard>
      </a>
    </div>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-family: sans-serif;
`;
const SIcon = styled.img`
  width: 36px;
  display: block;
`;
const SBody = styled.div`
  text-align: left;
  margin-left: 12px;
`;
const STitle = styled.div`
  font-size: 16px;
  color: var(--main-secondry);
  font-weight: bold;
`;
const SDisc = styled.div`
  font-size: 12px;
  color: var(--sub-common);
  white-space: pre-wrap;
`;
