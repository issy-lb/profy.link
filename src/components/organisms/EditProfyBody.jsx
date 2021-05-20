import { MovieView } from "../atoms/Movie/MovieView";
import { ButtonLinkList } from "./ButtonLinkList";
import styled from "styled-components";
import { GalleryView } from "../molecules/GalleryView/GalleryView";
import { BannerLink } from "../atoms/Banner/BannerLink";
import { TextView } from "../atoms/Text/TextView";
import { EditContainer } from "../molecules/EditContainer/EditContainer";

export const EditProfyBody = (props) => {
  const { slide, bodys, onSwap, deleteSection } = props;
  const length = bodys.length;
  const componentList = bodys.map((body) => {
    switch (body.sectionId) {
      // コメントリンク
      case "STID001":
        return (
          <>
            <EditContainer
              link={"/edit/comment-link/" + slide + "/" + body.sectionOrder}
              onSwap={onSwap}
              deleteSection={deleteSection}
              sectionOrder={body.sectionOrder}
              lastFlag={body.sectionOrder === length ? true : false}
            >
              <ButtonLinkList linkList={body.props} />
            </EditContainer>
            <br />
          </>
        );
      case "STID002":
        return (
          <>
            <EditContainer
              link={"/edit/movie-view/" + slide + "/" + body.sectionOrder}
              onSwap={onSwap}
              sectionOrder={body.sectionOrder}
              lastFlag={body.sectionOrder === length ? true : false}
              deleteSection={deleteSection}
            >
              <MovieView propLink={body.props.propLink} />
            </EditContainer>
            <br />
          </>
        );
      case "STID003":
        return (
          <>
            <EditContainer
              link={"/edit/banner-link/" + slide + "/" + body.sectionOrder}
              onSwap={onSwap}
              sectionOrder={body.sectionOrder}
              lastFlag={body.sectionOrder === length ? true : false}
              deleteSection={deleteSection}
            >
              <BannerLink
                propImage={body.props.propImage}
                propLink={body.props.propLink}
              />
            </EditContainer>
            <br />
          </>
        );
      case "STID004":
        return (
          <>
            <EditContainer
              link={"/edit/gallery-view/" + slide + "/" + body.sectionOrder}
              onSwap={onSwap}
              sectionOrder={body.sectionOrder}
              lastFlag={body.sectionOrder === length ? true : false}
              deleteSection={deleteSection}
            >
              <GalleryView imageList={body.props} />
            </EditContainer>
            <br />
          </>
        );
      case "STID005":
        return (
          <>
            <EditContainer
              link={"/edit/text-view/" + slide + "/" + body.sectionOrder}
              onSwap={onSwap}
              sectionOrder={body.sectionOrder}
              lastFlag={body.sectionOrder === length ? true : false}
              deleteSection={deleteSection}
            >
              <TextView
                propTitle={body.props.propTitle}
                propDisc={body.props.propDisc}
              />
            </EditContainer>
            <br />
          </>
        );
      default:
        return <></>;
    }
  });
  return <>{componentList}</>;
};
