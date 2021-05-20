import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../hooks/useAuth";
import "../../../styles/color.css";
export const LinkMenu = (props) => {
  const { logOut } = useAuth();
  const { linkList } = props;
  const list = linkList.map((link) => {
    if (link.link === "logout") {
      return (
        <SListItemBtn onClick={logOut}>
          <img src={link.icon} alt={link.title} />
          <div>{link.title}</div>
          <img
            src="https://profy-59433.web.app/assets/icon/right-arrow.svg"
            alt={link.title}
          />
        </SListItemBtn>
      );
    } else if (link.link === "upgrade") {
      return (
        <SListItem2>
          <img src={link.icon} alt={link.title} />
          <div style={{ color: "#BBBBBB" }}>{link.title}</div>
          <img
            style={{ height: "30px" }}
            src="https://profy-59433.web.app/assets/icon/preparation.svg"
            alt={link.title}
          />
        </SListItem2>
      );
    } else {
      return (
        // <Link style={{ textDecoration: "none"}} to={link.link}>
        <SListItem>
          {link.target ? (
            <a
              style={{ display: "flex", textDecoration: "none" }}
              target={link.target ? "_brank" : "_self"}
              href={link.link}
            >
              <img src={link.icon} alt={link.title} />
              <div>{link.title}</div>
              <img
                src="https://profy-59433.web.app/assets/icon/right-arrow.svg"
                alt={link.title}
              />
            </a>
          ) : (
            <Link
              style={{ display: "flex", textDecoration: "none" }}
              to={link.link}
            >
              <img src={link.icon} alt={link.title} />
              <div>{link.title}</div>
              <img
                src="https://profy-59433.web.app/assets/icon/right-arrow.svg"
                alt={link.title}
              />
            </Link>
          )}
        </SListItem>
        // </Link>
      );
    }
  });
  return (
    <ListBoard>
      <ListContainer>{list}</ListContainer>
    </ListBoard>
  );
};
const ListBoard = styled.div`
  width: 320px;
  padding: 20px 15px;
  background-color: var(--common);
  box-shadow: 0px 3px 6px var(--shadow);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
`;
const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const SListItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  img {
    width: 22px;
    height: 22px;
  }
  div {
    width: 250px;
    margin-left: 20px;
    text-align: left;
    font-size: 16px;
    color: var(--main-secondry);
    font-weight: 400;
    font-family: sans-serif;
  }
`;
const SListItemBtn = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  img {
    width: 22px;
    height: 22px;
  }
  div {
    width: 250px;
    margin-left: 20px;
    text-align: left;
    font-size: 16px;
    color: var(--main-secondry);
    font-weight: 400;
    font-family: sans-serif;
  }
`;
const SListItem2 = styled.div`
  color: gray;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  img {
    height: 22px;
  }
  div {
    width: 150px;
    margin-left: 20px;
    text-align: left;
    font-size: 16px;
    color: var(--main-secondry);
    font-weight: 400;
    font-family: sans-serif;
  }
`;
