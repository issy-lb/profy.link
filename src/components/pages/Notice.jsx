import { TwitterTimelineEmbed } from "react-twitter-embed";
import { NoticeHeader } from "../molecules/Header/NoticeHeader";
export const Notice = () => {
  return (
    <>
      <NoticeHeader />
      <div className="centerContent">
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="profile"
            userId={"1336146098579152896"}
            options={{ height: "100vh" }}
          />
        </div>
      </div>
    </>
  );
};
