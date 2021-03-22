import {useState, useEffect} from 'react';
import PostList from './PostList';

const Home = () => {
    const [posts, setPosts] = useState([null]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/posts')
        .then(res => {
            if (!res.ok){
                throw Error('response from server is not ok');
            }
            return res.json()
        })
        .then((data) => {
            setPosts(data);
            setIsPending(false);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);

    return ( 
        <div className='home'>
            <h1>Home</h1>
            {isPending && <div className='loading'>Loading...</div>}
            {posts && <PostList posts={posts} heading='Featured'/>}
        </div>
    );
}
 
export default Home
