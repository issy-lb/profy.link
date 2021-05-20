import { MovieView } from "../atoms/Movie/MovieView";
import { ButtonLinkList } from "./ButtonLinkList";
import styled from "styled-components";
import { GalleryView } from "../molecules/GalleryView/GalleryView";
import { BannerLink } from "../atoms/Banner/BannerLink";
import { TextView } from "../atoms/Text/TextView";
import { EditContainer } from "../molecules/EditContainer/EditContainer";

export const ProfyBody = (props) => {
  const { slide, bodys } = props;
  const length = bodys.length;
  const componentList = bodys.map((body) => {
    switch (body.sectionId) {
      // コメントリンク
      case "STID001":
        return (
          <>
            <ButtonLinkList linkList={body.props} />
            <br />
          </>
        );
      case "STID002":
        return (
          <>
            <MovieView propLink={body.props.propLink} />
            <br />
          </>
        );
      case "STID003":
        return (
          <>
            <BannerLink
              propImage={body.props.propImage}
              propLink={body.props.propLink}
            />
            <br />
          </>
        );
      case "STID004":
        return (
          <>
            <GalleryView imageList={body.props} />
            <br />
          </>
        );
      case "STID005":
        return (
          <>
            <TextView
              propTitle={body.props.propTitle}
              propDisc={body.props.propDisc}
            />
            <br />
          </>
        );
      default:
        return <></>;
    }
  });
  return <>{componentList}</>;
};
