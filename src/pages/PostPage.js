// Components
import PageHeader from "../components/PageHeader";
import PostList from "../components/PostList";

// Data
import HeaderDB from "../database/HeaderDB"

// Style
import "../styles/PostPage.css"

// Page displaying all posts filtered for each tag
function PostPage(props) {
    let index = 0;
    HeaderDB.forEach((tag) => {
        if(tag.title === props.tag)
            index = HeaderDB.indexOf(tag)})

    return (
        <div className="pages">
            <PageHeader title={HeaderDB[index].title} colors={HeaderDB[index].color}>{HeaderDB[index].sub}</PageHeader>
            <div className="postlist">
                <PostList query={HeaderDB[index].title} axis="vertical" sub="true"/>
            </div>
        </div>
    )
}

export default PostPage
