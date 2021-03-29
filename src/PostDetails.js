import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const PostDetails = () => {
    const {id} = useParams();
    const {data : post, error, isPending } = useFetch('http://localhost:8000/posts/' + id);
    return (
       <div className='post-details'>
           <h2>post details{id}</h2>
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {(!isPending && !error && 
            <div className='post'>
                <h2>{post.title}</h2>
                <p className='post-author'>{post.author}</p>
                <p className='post-body'>{post.body}</p>
            </div>
           )}
       </div> 
    );
}
 
export default PostDetails;