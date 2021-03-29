import {Link} from 'react-router-dom';

const PostList = ({heading, posts}) => {
    return posts ? ( 
        <div className='post-list'>
            <h2>{heading}</h2>
            {posts.map(post => {
                return post ? (
                <div className='post-preview' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post?.title}</h2>
                        <div className='post-preview-author'>
                            <p>{post?.author}</p>
                        </div>
                    </Link>
                    <div className='post-preview-body'>
                        <p>{post?.body}</p>
                    </div>
                </div>
                ): null;
            })}
        </div>
     ) : null;
}
 
export default PostList;