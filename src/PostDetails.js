import {useParams} from 'react-router-dom';
const PostDetails = () => {
    const {id} = useParams();
    return (
       <div className='post-details'>
           <h2>post details{id}</h2>
       </div> 
    );
}
 
export default PostDetails;