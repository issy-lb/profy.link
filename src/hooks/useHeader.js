// APIで取得したheader情報を変換する

import { useIcon } from "./useIcon";

export const useHeader = () => {
  const { getIconImg, getIconName } = useIcon();
  // TopViewへ変換する
  const getTopView = (header) => {
    const TopView = {
      id: "TLID001",
      title: "名前",
      subTitle: "肩書き",
      description: "ひとことコメント！",
      profilePhoto: {
        image: "https://profy-59433.web.app/assets/parts/default-icon.svg",
        alt: "Profile Photo"
      },
      coverPhoto: {
        image:
          "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80",
        alt: "Profile Cover Photo"
      },
      snsList: [
        {
          image:
            "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
          alt: "icon",
          url: ""
        },
        {
          image: "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
          alt: "icon",
          url: ""
        },
        {
          image: "https://profy-59433.web.app/assets/sns-icon/sns/tiktok.png",
          alt: "icon",
          url: ""
        }
      ]
    };
    TopView.id = header.templateId;
    TopView.title = header.name;
    TopView.subTitle = header.headerTitle;
    TopView.description = header.disc;
    TopView.profilePhoto.image = header.headerIcon;
    TopView.coverPhoto.image = header.headerBackground;
    TopView.snsList = header.sns.map((sns) => {
      console.log("アイコン");
      console.log(sns.snsIconId);
      const snsParts = {
        image: getIconImg(sns.snsIconId),
        alt: "icon",
        url: sns.snslink
      };
      return snsParts;
    });
    return TopView;
  };

  // 空の場合デフォルト文言が入るTOP Viewを作成する
  // TopViewへ変換する
  const getDefaultTopView = (header) => {
    const TopView = {
      id: "TLID001",
      title: "名前",
      subTitle: "肩書き",
      description: "ひとことコメント！",
      profilePhoto: {
        image: "https://profy-59433.web.app/assets/parts/default-icon.svg",
        alt: "Profile Photo"
      },
      coverPhoto: {
        image:
          "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80",
        alt: "Profile Cover Photo"
      },
      snsList: [
        {
          image:
            "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
          alt: "icon",
          url: ""
        },
        {
          image: "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
          alt: "icon",
          url: ""
        },
        {
          image: "https://profy-59433.web.app/assets/sns-icon/sns/tiktok.png",
          alt: "icon",
          url: ""
        }
      ]
    };
    TopView.id = header.templateId;
    TopView.title = header.name === "" ? "名前" : header.name;
    TopView.subTitle =
      header.headerTitle === "" ? "肩書き" : header.headerTitle;
    TopView.description =
      header.disc === "" ? "一言コメントで自己紹介" : header.disc;
    TopView.profilePhoto.image = header.headerIcon;
    TopView.coverPhoto.image = header.headerBackground;
    TopView.snsList = header.sns.map((sns) => {
      console.log("アイコン");
      console.log(sns.snsIconId);
      const snsParts = {
        image: getIconImg(sns.snsIconId),
        alt: "icon",
        url: sns.snslink
      };
      return snsParts;
    });
    return TopView;
  };

  // ヘッダーsns情報からlinkListを作る
  const getLinkList = (sns) => {
    const list = sns.map((sns) => {
      const newList = {
        propDisc: sns.snslink,
        propIconId: sns.snsIconId,
        propLink: sns.snslink,
        propTitle: getIconName(sns.snsIconId)
      };
      return newList;
    });
    return list;
  };

  // linkListからヘッダーsns情報を作る
  const getSnsList = (linkList) => {
    const list = linkList.map((link) => {
      const newList = {
        snslink: link.propLink,
        snsIconId: link.propIconId
      };
      return newList;
    });
    return list;
  };
  return { getTopView, getLinkList, getSnsList, getDefaultTopView };
};
