import styled from "styled-components";
import "../../../styles/color.css";

export const TextLink = (props) => {
  const { children } = props;
  return <SLink>{children}</SLink>;
};
const SLink = styled.span`
  font-size: 16px;
  color: var(--action-success);
  border-bottom: 1px solid var(--action-success);
`;
