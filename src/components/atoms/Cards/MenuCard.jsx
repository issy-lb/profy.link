// 文言入りのカードメニュー
import styled from "styled-components";
export const MenuCard = (props) => {
  const { img, title } = props;
  return (
    <SContainer style={{ backgroundImage: `url(${img})` }}>
      <STitle>{title}</STitle>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 142px;
  height: 101px;
  display: flex;
  background-size: cover;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
`;

const STitle = styled.div`
  width: 100%;
  height: 28px;
  text-align: center;
  background-color: rgba(108, 99, 255, 0.6);
  color: var(--common);
`;
