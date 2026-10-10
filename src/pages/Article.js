
// Assets
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

// Data
import PostDB from "../database/PostDB"

// Style
import "../styles/Article.css"
import Recommend from '../components/Recommend';

// Page that displays the current post being viewed
function Article() {
  
  let PostID = 8;
  let Post = PostDB[8];
  if(PostID < PostDB.length){
    Post = PostDB[PostID];
  }

  return (
    <div className='article'>
      <div className='header'></div>
      <img src={Post.img} alt=""/>
      <div className="post">
        <h1 className='title'>{Post.title}</h1>
        <p className='sub'>{Post.sub}</p>
        <div className='info'>
          <p className='author'><PersonOutlineOutlinedIcon className='personIcon'/>TomasinoWeb</p>
          <p className='date'><CalendarTodayRoundedIcon className='calendarIcon'/>{Post.date}</p>
        </div>
        <div className='content'>{Post.content.map((paragraph,key)=>{return <p className='paragraphs'>{paragraph}</p>})}</div>
      </div>
      <hr />
      <Recommend title="Related Articles"/>
    </div>
  )
}

export default Article
