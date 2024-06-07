import CategoryList from "../components/CategoryList/CategoryList";
import Music from "../components/DriveTime/DriveTime";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="Home">
      <CategoryList />
      <Music />
      <Video />
    </div>
  );
}