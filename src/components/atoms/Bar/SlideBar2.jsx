import { SlideBar } from "./SlideBar";

// idが一致する場合はアクティブ、しない場合は非アクティブ
export const SlideBar2 = (props) => {
  const { id, selectedId } = props;

  if (id === selectedId) {
    return <SlideBar active={true} />;
  } else {
    return <SlideBar active={false} />;
  }
};
