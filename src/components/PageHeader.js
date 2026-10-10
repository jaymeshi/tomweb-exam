
// Style
import "../styles/PageHeader.css"

// The colored header at the top of each category of post
function PageHeader(props) {
    const bg = {'background-color':props.colors}
    return (
        <div className='pageheader' style={bg} >
            <h1 className="title">{props.title}</h1>
            <p className='sub'>{props.children}</p>
        </div>
    )
}

export default PageHeader
