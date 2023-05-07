import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Jay Anand",
    userName: "0x06EAC3737CB0a29925a20b5485F61368714f7c94",
    avatar:
      "https://pbs.twimg.com/profile_images/1511990640753618949/rZMGSR26_400x400.jpg",
    text: "My first tweet",
    isProfileImageNft: false,
    timeStamp: "2023-02-14T12:00:00.000Z",
  },
  {
    displayName: "Jay Anand",
    userName: "0x06EAC3737CB0a29925a20b5485F61368714f7c94",
    avatar:
      "https://pbs.twimg.com/profile_images/1511990640753618949/rZMGSR26_400x400.jpg",
    text: "gm",
    isProfileImageNft: false,
    timeStamp: "2012-02-01T12:00:00.000Z",
  },
  {
    displayName: "Jay Anand",
    userName: "0x06EAC3737CB0a29925a20b5485F61368714f7c94",
    avatar:
      "https://pbs.twimg.com/profile_images/1511990640753618949/rZMGSR26_400x400.jpg",
    text: "gm",
    isProfileImageNft: false,
    timeStamp: "2012-02-01T12:00:00.000Z",
  },
  {
    displayName: "Jay Anand",
    userName: "0x06EAC3737CB0a29925a20b5485F61368714f7c94",
    avatar:
      "https://pbs.twimg.com/profile_images/1511990640753618949/rZMGSR26_400x400.jpg",
    text: "gm",
    isProfileImageNft: false,
    timeStamp: "2012-02-01T12:00:00.000Z",
  },
];

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timeStamp={tweet.timeStamp}
        />
      ))}
    </div>
  );
}
export default Feed;
