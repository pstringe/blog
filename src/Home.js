import PostList from './PostList';
import useFetch from './useFetch';
import {Typography} from '@material-ui/core';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts');
    return (
        <div className='home'>
            <Typography color='textPrimary' variant='h3' component='h1'>Home</Typography>
            {error && <div>There was an error...</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {posts && <PostList posts={posts} heading='Featured'/>}
        </div>
    );
}
 
export default Home
