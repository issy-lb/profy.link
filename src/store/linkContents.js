import { atom } from "recoil";
export const linkContents = atom({
  key: "linkContents",
  default: {
    header: {
      disc: "",
      headerBackground: "",
      headerIcon: "",
      header_title: "",
      name: "",
      sns: [{ snsIconId: "", snslink: "" }],
      templateId: ""
    },
    link: "",
    main_title: "",
    settings: { fontColorId: "" },
    slides: {
      slide1: {
        bodys: [],
        slideBackground: ""
      }
    }
  }
});
