import styled from "styled-components";
import { MenuCard } from "../atoms/Cards/MenuCard";
import { AddCard } from "../atoms/Cards/AddCard";
import { Link } from "react-router-dom";

export const BgMenuList = (props) => {
  const { bgList } = props;
  var list = bgList.map((bg) => {
    return (
      <SBg>
        <Link
          to={`/edit/setting-bg/${bg.id}`}
          style={{ textDecoration: "none" }}
        >
          <MenuCard title={bg.title} img={bg.img} />
        </Link>
      </SBg>
    );
  });
  const add = (
    <SBg>
      <AddCard />
    </SBg>
  );
  list.unshift(add);

  return <SContainer>{list}</SContainer>;
};
const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  margin: auto;
  justify-content: space-between;
`;
const SBg = styled.div`
  margin: 10px;
`;
