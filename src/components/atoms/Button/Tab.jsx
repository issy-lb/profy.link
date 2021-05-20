// Module     : タブの単品パーツ
// Author     : okabe
// LastUpdate : 2021/05/02
// Since      : 2021/05/02

// タブ単品
import styled from "styled-components";
import "../../../styles/color.css";

export const Tab = (props) => {
  const { value } = props;
  return (
    <>
      <STab>Tab1</STab>
      {/* <SCoverImg height={height} src={image} alt={alt} /> */}
    </>
  );
};

const STab = styled.div`
  width: 85%;
  height: 42px;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  margin: 0 auto;
  font-size: 16px;
  background-color: #ccc;
  padding: 8px 24px;
`;

// export const Tab = (props) => {
// const { children, active } = props;
// const tabs = active ? (
//   <SActiveContainer>
//     <STab>{children}</STab>
//   </SActiveContainer>
// ) : (
//   <SInActiveContainer>
//     <STab>{children}</STab>
//   </SInActiveContainer>
// );
// return <>{tabs}</>;
// };

const SActiveContainer = styled.div`
  color: var(--main-secondry);
  display: flex;
`;
const SInActiveContainer = styled.div`
  color: var(--common);
  display: flex;
`;
