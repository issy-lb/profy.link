// プレビュー用の角丸背景
import styled from "styled-components";
export const BackGroundMaru = (props) => {
  const { link } = props;

  const BgStyle = {
    background: `url(${link}) center center / cover no-repeat`
  };
  return (
    <>
      <SPreviewTitle>
        <p>プレビュー</p>
      </SPreviewTitle>
      <SBg style={BgStyle}></SBg>
    </>
  );
};

const SBg = styled.div`
  position: fixed;
  top: 60px;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  /* border-radius: 30px 30px 0 0; */
  /* box-shadow: 0px 3px 6px var(--shadow); */
  z-index: -1;
`;
const SPreviewTitle = styled.div`
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: var(--main-secondry);
    font-size: 20px;
  }
`;
