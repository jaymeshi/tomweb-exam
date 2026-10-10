import {Link} from "react-router"

// Assets
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarToday';

// Components
import PostList from "../components/PostList";

// Data
import PostDB from "../database/PostDB"

// Style
import "../styles/Landing.css"
import Recommend from '../components/Recommend';

// Landing page
function Home() {
  let featuredPostID =8;
  let featuredPost = PostDB[8];
  if(featuredPostID < PostDB.length){
    featuredPost = PostDB[featuredPostID];
  }

  const landing = (
    <div className='landing'>      
      <Link to="\article" className='report' viewTransitions>
        <div className='featured' id="featured">
          <img className='featureBg' id="featureBg" src={featuredPost.img} alt=""/>
          <div id="gradient"></div>
          <div className='featureText'>
            <div className='gradient'></div>
            <h1 className='featureTitle'>{featuredPost.title}</h1>
            <p className='featureSub'>{featuredPost.tag.toUpperCase()}<span> — </span><span>{featuredPost.sub}</span></p>
            <div className='featureDateDiv'>
              <CalendarTodayRoundedIcon className='calendar'/>
              <p className='date'>{featuredPost.date}</p>
            </div>
          </div>
        </div>
      </Link>
      <Recommend title="Latest"/>
      <div className='dark-bg'>
        <PostList query="Featured Reports" axis="horizontal" size="large" sub="true"/>
      </div>
      <Recommend title="More Articles"/>
    </div>
  )

  

  return landing;
}

export default Home
