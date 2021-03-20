const PostList = (props) => {
    return ( 
        <div className='post-list'>
        <h1>Post List</h1>
        {props.posts.map(post => {
            return (
            <div className='post-preview' key={post.id}>
                <h2>{post.title}</h2>
                <div className='post-preview-author'>
                    <p>{post.author}</p>
                </div>
                <div className='post-preview-body'>
                    <p>{post.body}</p>
                </div>
            </div>
            );
        })}
    </div>
     );
}
 
export default PostList;