import { useEffect, useState } from "react";
import { TopViewTest } from "../components/molecules/TopView/TopViewTest";
import { EditProfyBody } from "../components/organisms/EditProfyBody";
import { ProfyBody } from "../components/organisms/ProfyBody";
import { BrankLinkContents } from "../providers/BrankLinkContents";
const TopView = {
  id: "2",
  title: "Miku",
  subTitle: "ライフスタイルクリエイター",
  description: "もっと自分らしく、もっとハッピーに",
  profilePhoto: {
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    alt: "Profile Photo"
  },
  coverPhoto: {
    image:
      "https://images.unsplash.com/photo-1601979689063-cb474664e70b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "Profile Cover Photo"
  },
  snsList: [
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/miku427"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
      alt: "Twitter",
      url: "https://twitter.com/miku427x"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/facebook.png",
      alt: "Facebook",
      url: "https://www.facebook.com/"
    }
  ]
};

export const PreviewTest = () => {
  // const [content,setContent] = useState([])
  // const linkcontents = useRecoilValue(linkContents);
  const [linkContents, setLinkContents] = useState(BrankLinkContents);
  useEffect(() => {
    const contents = JSON.parse(localStorage.getItem("linkContents"));
    setLinkContents(contents);
  }, []);

  return (
    <>
      {/* <ProfyBody bodys={linkContents.slides.slide1.bodys} />
      <EditProfyBody bodys={linkContents.slides.slide1.bodys} /> */}
      <TopViewTest TopView={TopView} />
    </>
  );
};
