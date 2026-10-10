
// Components
import PostList from "./PostList"

// Style
import "../styles/Recommend.css"

// Used for titled horizontal lists of posts like "Latest" and "Related Articles"
function Recommend(props) {
  return (
    <div className='recommend-div'>
    <h3 className='recommend'>{props.title}</h3>
        <PostList className='recommend-list' query={props.title} axis="horizontal"  sub="false"/>
    </div>
  )
}

export default Recommend
