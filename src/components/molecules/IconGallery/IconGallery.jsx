// アイコン一覧を表示する
import styled from "styled-components";

export const IconGallery = (props) => {
  const { iconList, onSave } = props;
  const List = iconList.map((icon) => {
    return (
      <SButton
        onClick={() => {
          onSave(icon.ICID);
        }}
      >
        <SIcon src={icon.icon}></SIcon>
      </SButton>
    );
  });
  return <SContainer>{List}</SContainer>;
};

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 321px;
  margin: auto;
`;
const SIcon = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  margin: 10px;
`;
const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;
