import { BackOnlyTemp } from "../templates/BackOnlyTemp";
import styled from "styled-components";
import { useHeader } from "../../hooks/useHeader";
import { TopViewEditCard } from "../organisms/TopViewEditCard";
import { useTopView } from "../../hooks/useTopView";
import { TopViewCard } from "../organisms/TopViewCard";

// TopViewのプレビュー
export const TopViewPreview = (props) => {
  const { save, changeTemplate, selectedId } = props;
  // テンプレートの配列
  const list = [1, 2, 3, 4].map((index) => {
    return (
      <SButton
        onClick={() => {
          changeTemplate("TLID00" + index);
        }}
      >
        <SImage
          src={
            "https://profy-59433.web.app/assets/parts/tlid00" + index + ".svg"
          }
        />
        {selectedId === "TLID00" + index ? (
          <SIcon src={"https://profy-59433.web.app/assets/icon/selected.svg"} />
        ) : null}
      </SButton>
    );
  });
  return (
    <BackOnlyTemp
      onSave={save}
      title={"テンプレート選択"}
      disc={"トップビューのテンプレートを変更できます"}
    >
      <SContainer>{list}</SContainer>
    </BackOnlyTemp>
  );
};
const SContainer = styled.div`
  display: flex;
  width: 340px;
  margin: auto;
  flex-wrap: wrap;
  margin: auto;
`;

const SImage = styled.img`
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 10px;
`;
const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  position: relative;
`;
const SIcon = styled.img`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;
