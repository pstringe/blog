import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';

const PostList = ({heading, posts}) => {
    return posts ? ( 
        <div className='post-list'>
            <h2>{heading}</h2>
            {posts.map(post => {
                return post ? (
                <div className='post-preview' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <Typography component='h2' variant='h6' color='textSecondary'>{post?.title}</Typography>
                        <div className='post-preview-author'>
                            <Typography component='p' variant='subtitle2' gutterBottom>{post?.author}</Typography>
                        </div>
                    </Link>
                    <div className='post-preview-body'>
                        <Typography component='p' variant='body1' paragraph>{post?.body}</Typography>
                    </div>
                </div>
                ): null;
            })}
        </div>
     ) : null;
}
 
export default PostList;