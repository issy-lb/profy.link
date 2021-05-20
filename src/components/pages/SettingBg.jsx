import { BgMenuList } from "../organisms/BgMenuList";
import { LinkSettingTemp } from "../templates/LinkSettingTemp";

const bgList = [
  {
    id: "BG01",
    title: "自然",
    img:
      "https://images.unsplash.com/photo-1616235352608-0c314f4b9027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: "BG02",
    title: "アート",
    img:
      "https://images.unsplash.com/photo-1618989104318-b29a9335b2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
  },
  {
    id: "BG03",
    title: "モダン",
    img:
      "https://images.unsplash.com/photo-1527239441953-caffd968d952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: "BG04",
    title: "ビジネス",
    img:
      "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "BG05",
    title: "フード",
    img:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "BG06",
    title: "アニメ",
    img:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
  },
  {
    id: "BG07",
    title: "インテリア",
    img:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
  }
];
const SettingBg = () => {
  return (
    <LinkSettingTemp
      title={"編集"}
      subTitle={"ページ背景"}
      disc={"ページ背景を選択できます"}
      link={"/edit"}
    >
      <BgMenuList bgList={bgList} />
    </LinkSettingTemp>
  );
};
export default SettingBg;
