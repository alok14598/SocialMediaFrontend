import Comments from "../../Components/Comments/Comments"
import Feed from "../../Components/Feed/Feed"
import Post from "../../Components/Post/Post"
import Story from "../../Components/Story/Story"
import "./Home.scss"


export default function Home() {
  return (
    <div className="home">
    <Story />
    <Feed />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
     </div>
  )
}
