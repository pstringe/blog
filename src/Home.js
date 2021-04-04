import PostList from './PostList';
import useFetch from './useFetch';
import {Typography} from '@material-ui/core';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts');
    return (
        <div className='home'>
            {error && <Typography color='textSecondary'>There was an error...</Typography>}
            {isPending && <Typography color='textSecondary'>Loading...</Typography>}
            {posts && <PostList posts={posts} heading='Featured'/>}
        </div>
    );
}
 
export default Home
