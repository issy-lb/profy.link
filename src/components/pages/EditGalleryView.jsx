import { EditableGalleryView } from "../molecules/GalleryView/EditableGalleryView";

import { EditDetailTemp } from "../templates/EditDetailTemp";

const imageList = [
  {
    propImage:
      "https://images.unsplash.com/photo-1617201834941-0dff6e023ae2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617290578591-a461227d4d16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617261487057-1a0e30613025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617194663454-1009e8fef0ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617201835784-540fae0edb6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    propLink: "https://www.google.co.jp/"
  },
  {
    propImage:
      "https://images.unsplash.com/photo-1617173793304-aab2dff0190d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    propLink: "https://www.google.co.jp/"
  }
];

const EditGalleryView = () => {
  return (
    <EditDetailTemp
      title={"ギャラリービュー"}
      disc={"ギャラリーの並び替えや編集ができます"}
      link={"/edit"}
    >
      <EditableGalleryView imageList={imageList} />
    </EditDetailTemp>
  );
};
export default EditGalleryView;
