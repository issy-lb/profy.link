import { SlideChangeButton } from "./SlideChangeButton";

// idが一致する場合はアクティブ、しない場合は非アクティブ
export const SlideChangeButton2 = (props) => {
  const { id, selectedId, children } = props;

  if (id === selectedId) {
    return <SlideChangeButton active={true}>{children}</SlideChangeButton>;
  } else {
    return <SlideChangeButton active={false}>{children}</SlideChangeButton>;
  }
};
