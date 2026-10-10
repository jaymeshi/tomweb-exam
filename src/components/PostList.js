
// Components
import PostItem from "../components/PostItem";

// Data
import PostDB from "../database/PostDB"
import CollectionDB from "../database/CollectionDB"

// Style
import "../styles/PostList.css"

// Used to search "databases" for specific posts
function PostList(props) {
    const tags = ["Reports", "Blogs", "Sports"];

    let posts = [];

    if (!tags.includes(props.query)){
        let collectionIndexes = []
        for (const coll of CollectionDB){
            if(coll.title === props.query)
                collectionIndexes = coll.posts;
        }
        for (const index of collectionIndexes){
            posts.push(PostDB[index]);
        }        
    }
    else{
        for (const post of PostDB){
            if(post.tag === props.query){
                posts.push(post);
            }
        }
    }

    let axis = props.axis;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    if(vw<0.75*vh){
        if(axis === "horizontal"){
            axis = "vertical";
        }else{
            axis = "horizontal";
        }
    }

  return (
    <div className='posts'>
        <div className={axis}>
            {posts.map((post, key) => {
                return (<PostItem img={post.img} date={post.date} title={post.title} sub={post.sub} tag={post.tag} axis={axis} size={props.size} showSub={props.sub}/>)
            })}
        </div>
    </div>
  )
}

export default PostList
