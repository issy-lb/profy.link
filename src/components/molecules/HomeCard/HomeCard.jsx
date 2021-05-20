// ホーム画面に並べるカード（リンクの入り口）
import styled from "styled-components";
// import "src/styles/color"
import { useState } from "react";
import "../../../styles/color.css";
import { KadomaruCard2 } from "../../atoms/Cards/KadomaruCard2";
import { KadoCard } from "../../atoms/Cards/KadoCard";
import { KadomaruIcon } from "../../atoms/Icon/KadomaruIcon";
import { Link } from "react-router-dom";
import { QRModal } from "../../atoms/Mordal/QRModal";

export const HomeCard = (props) => {
  const { link, onClickBtn } = props;
  const [show, setShow] = useState(false);
  const onShow = () => {
    setShow(true);
  };
  // const str = link.url;
  // const shortenStr = str.substr(7, str.length - 7);
  return (
    <div style={{ width: "344px", margin: "0 auto" }}>
      <SButton onClick={onClickBtn}>
        <KadomaruCard2 bg={link.bg}>
          <KadomaruIcon image={link.icon} size={"50px"} />
          <SBody>
            <STitle>{link.title}</STitle>
            <SLink>{"profy.link/" + link.url}</SLink>
          </SBody>
          <SNext src="https://profy-59433.web.app/assets/icon/next-page.svg" />
        </KadomaruCard2>
      </SButton>
      <KadoCard>
        <SContainer>
          <SButton onClick={onShow}>
            <SIcon src="https://profy-59433.web.app/assets/icon/qr.svg" />
          </SButton>
          <SIcon src="https://profy-59433.web.app/assets/icon/copy.svg" />
          <SIcon src="https://profy-59433.web.app/assets/icon/share.svg" />
          <SIcon src="https://profy-59433.web.app/assets/icon/garbage.svg" />
        </SContainer>
      </KadoCard>
      <QRModal show={show} setShow={setShow} link={link.url} />
    </div>
  );
};
const SBody = styled.div`
  width: 245px;
  text-align: left;
  padding-left: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: sans-serif;
`;
const STitle = styled.h2`
  font-size: 16px;
  color: var(--main-dark);
  margin: 0;
  padding: 0;
  font-weight: lighter;
  font-weight: 500;
`;
const SLink = styled.p`
  font-size: 12px;
  color: var(--common);
  margin: 0;
  padding: 0;
`;
const SNext = styled.img`
  display: block;
  height: 20px;
  padding: 0;
  margin: 0;
`;
const SIcon = styled.img`
  height: 17.14px;
  width: 17.14px;
`;

const SContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:first-child {
    margin-left: 33px;
  }
  &:last-child {
    margin-right: 33px;
  }
`;
const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
