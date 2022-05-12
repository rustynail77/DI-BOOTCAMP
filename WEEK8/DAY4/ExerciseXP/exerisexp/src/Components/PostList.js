
const PostList = (props) => {
        return (
            <>
            <h2>{props.array.title}</h2>
            <div>{props.array.content}</div>
            </>
    )    
}

export default PostList;