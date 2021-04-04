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
                    </Link>
                    <Typography component='p' variant='subtitle2' gutterBottom>{post?.author}</Typography>
                    <Typography component='p' variant='body1' paragraph noWrap>{post?.body}</Typography>
                </div>
                ): null;
            })}
        </div>
     ) : null;
}
 
export default PostList;