import styled from "styled-components";
import "../../../styles/color.css";
export const MovieView = (props) => {
  const { propLink } = props;
  const lastIndex = propLink ? propLink.lastIndexOf("/") : false;
  const link = lastIndex
    ? propLink.substr(lastIndex, propLink.length - lastIndex)
    : "";
  // if (propLink){timeIndex=propLink.indexOf("t=")}
  // if (timeIndex !== -1){time =propLink.slice(timeIndex)}
  return (
    <iframe
      style={{ display: "block", width: "336px", margin: "0 auto" }}
      width="336"
      height="189"
      src={`https://www.youtube.com/embed/${link}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};
