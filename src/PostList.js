import {Link} from 'react-router-dom';
import {Typography, Container} from '@material-ui/core';

const PostList = ({heading, posts}) => {
    return posts ? ( 
        <Container className='post-list'>
            <Typography component='h2' variant='h5'>{heading}</Typography>
            <hr/>
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
        </Container>
     ) : null;
}
 
export default PostList;