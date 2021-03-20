const PostList = ({heading, posts, handelClick}) => {
    return ( 
        <div className='post-list'>
        <h2>{heading}</h2>
        {posts.map(post => {
            return (
            <div className='post-preview' key={post.id}>
                <h2>{post.title}</h2>
                <div className='post-preview-author'>
                    <p>{post.author}</p>
                </div>
                <div className='post-preview-body'>
                    <p>{post.body}</p>
                </div>
                <div className='remove'>
                    <button onClick={()=> handelClick(post.id)}>Remove</button>
                </div>
            </div>
            );
        })}
    </div>
     );
}
 
export default PostList;