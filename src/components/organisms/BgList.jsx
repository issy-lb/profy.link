import styled from "styled-components";
export const BgList = (props) => {
  const { imgList, selectedBgId, onSelectBg } = props;
  const list = imgList.map((bg) => {
    return (
      <SButton
        onClick={() => {
          onSelectBg(bg.id);
        }}
      >
        <SImg src={bg.img} />
      </SButton>
    );
  });
  return <SContainer>{list}</SContainer>;
};

const SButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
const SImg = styled.img`
  width: 142px;
  height: 210px;
  display: block;
  margin: 10px;
  background-size: cover;
`;

const SContainer = styled.div`
  display: flex;
  width: 350px;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;
