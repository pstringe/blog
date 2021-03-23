import PostList from './PostList';
import useFetch from './useFetch';

const Home = () => {
    const {data: posts, isPending, error} = useFetch('http://localhost:8000/posts');
    console.log(posts, isPending, error);
    return (
        <div className='home'>
            <h1>Home</h1>
            {error && <div>There was an error...</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {posts && <PostList posts={posts} heading='Featured'/>}
        </div>
    );
}
 
export default Home
