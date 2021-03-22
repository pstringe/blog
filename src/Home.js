import {useState, useEffect} from 'react';
import PostList from './PostList';

const Home = () => {
    const [posts, setPosts] = useState([null]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/posts')
        .then(res => {
            if (!res.ok){
                throw Error('response from server is not ok');
            }
            return res.json()
        })
        .then((data) => {
            setError(false);
            setPosts(data);
            setIsPending(false);
        })
        .catch((err) => {
            console.log(err.message);
            setIsPending(false);
            setError(true);
        })
    }, []);

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
