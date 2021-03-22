import {useState, useEffect} from 'react';
import PostList from './PostList';

const Home = () => {
    const [posts, setPosts] = useState([null]);

    useEffect(() => {
        fetch('http://localhost:8000/posts')
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setPosts(data);
        }
    );

    },);

    return ( 
        <div className='home'>
            <h1>Home</h1>
            {posts && <PostList posts={posts} heading='Featured'/>}
        </div>
    );
}
 
export default Home
