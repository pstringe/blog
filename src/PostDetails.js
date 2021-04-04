import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {Typography} from '@material-ui/core';
const PostDetails = () => {
    const {id} = useParams();
    const {data : post, error, isPending } = useFetch('http://localhost:8000/posts/' + id);
    return (
       <div className='post-details'>
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {(!isPending && !error && 
            <>
                <Typography component='h2' variant='h4'>{post.title}</Typography>
                <Typography component='p' variant='subtitle2' gutterBottom className='post-author'>{`By ${post.author}`}</Typography>
                <Typography component='p' variant='body1'>{post.body}</Typography>
            </>
           )}
       </div> 
    );
}
 
export default PostDetails;