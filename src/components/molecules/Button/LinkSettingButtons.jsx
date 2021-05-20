import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconTextButton } from "../../atoms/Button/IconTextButton";

export const LinkSettingButtons = () => {
  return (
    <SConteinr>
      <Link to="/edit/setting-link" style={{ textDecoration: "none" }}>
        <IconTextButton
          text={"リンク編集"}
          icon={"https://profy-59433.web.app/assets/icon/main-setting.svg"}
        />
      </Link>
      <Link
        to="/edit/setting-bg"
        style={{ textDecoration: "none", marginLeft: "40px" }}
      >
        <IconTextButton
          text={"背景"}
          icon={"https://profy-59433.web.app/assets/icon/bg-setting.svg"}
        />
      </Link>
      {/* <Link to="/edit/setting-font" style={{ textDecoration: "none" }}>
        <IconTextButton
          text={"フォント設定"}
          icon={"https://profy-59433.web.app/assets/icon/font-setting.svg"}
        />
      </Link> */}
    </SConteinr>
  );
};
const SConteinr = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  width: 375px;
  margin: auto;
`;
