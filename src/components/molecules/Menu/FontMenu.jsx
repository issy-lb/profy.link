import styled from "styled-components";
export const FontMenu = (props) => {
  const { colorList } = props;
  const list = colorList.map((color) => {
    return <SColor style={{ backgroundColor: `${color.color}` }}></SColor>;
  });
  return <SContainer>{list}</SContainer>;
};
const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  margin: auto;
  justify-content: space-between;
`;
const SColor = styled.div`
  width: 142px;
  height: 101px;
  margin: 10px;
`;
