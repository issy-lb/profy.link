import { SwipeIcon } from "../organisms/SwipeIcon";
import { BackOnlyTemp } from "../templates/BackOnlyTemp";
import { ButtonLinkDetailTemp } from "../templates/ButtonLinkDetailTemp";

const EditIcon = (props) => {
  const { onSaveIcon, onBack, setIndex } = props;

  return (
    <BackOnlyTemp
      onSave={() => {
        setIndex(0);
      }}
    >
      <SwipeIcon onSaveIcon={onSaveIcon} />
    </BackOnlyTemp>
  );
};
export default EditIcon;
