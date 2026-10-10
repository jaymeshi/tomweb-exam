import {Link} from "react-router"

// Style
import "../styles/PostItem.css"

// Used to format each post in the PostList
function PostItem(props) {
  
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  let axis = props.axis;
  if(props.size === "large" && vw<0.75*vh){
        if(axis === "horizontal"){
            axis = "vertical";
        }else{
            axis = "horizontal";
        }
    }

  return (
    <Link to="/article" className='post'>
      <div className={`postdiv ${axis}-item ${props.size}`}>
        <div className='image'>
          <div className="gradient"></div>
          <img src={props.img} alt=""/>
        </div>
        <div className='text'>
          <div className="info">
            <p className='tag'>{props.tag.toUpperCase()}</p>
            <p>•</p><p>{props.date}</p>
          </div>
          <h3 className='title'>{props.title}</h3>
          {props.showSub === "true" ? <p className='sub'>{props.sub}</p> : ""}
        </div>
      </div>
    </Link>
  )
}

export default PostItem
