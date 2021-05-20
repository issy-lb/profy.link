import { Button2 } from "./Button2";

// idが一致する場合はアクティブ、しない場合は非アクティブ
export const Button3 = (props) => {
  const { children, id, selectedId } = props;

  if (id === selectedId) {
    return <Button2 active={true}>{children}</Button2>;
  } else {
    return <Button2 active={false}>{children}</Button2>;
  }
};
