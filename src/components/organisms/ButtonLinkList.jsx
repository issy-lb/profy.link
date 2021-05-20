import { ButtonLink } from "../molecules/ButtonLink/ButtonLink";
import styled from "styled-components";

export const ButtonLinkList = (props) => {
  const { linkList } = props;
  const ButtonLinkList = linkList.map((link) => {
    return (
      <SContainer>
        <ButtonLink linkList={link} />
      </SContainer>
    );
  });
  return <>{ButtonLinkList}</>;
};

const SContainer = styled.div`
  margin-bottom: 15px;
`;
