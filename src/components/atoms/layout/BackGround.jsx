import styled from "styled-components";
export const BackGround = (props) => {
  const { link } = props;

  const BgStyle = {
    background: `url(${link}) center center / cover no-repeat`
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat"
  };
  return (
    <>
      <SBg style={BgStyle}></SBg>
    </>
  );
};

const SBg = styled.div`
  position: fixed;
  z-index: -1;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
`;
