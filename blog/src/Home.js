import {useState} from 'react';

const Home = () => {
    const [posts, setPosts] = useState([
        {title: 'Title 1', body: 'post body', author: 'Poitier', id: 1},
        {title: 'Title 2', body: 'post body', author: 'Poitier', id: 2},
        {title: 'Title 3', body: 'post body', author: 'Poitier', id: 3},
    ]);

    return ( 
        <div className='home'>
            <h1>Home</h1>
            {posts.map(post => {
                return (
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <div className='author'>
                        <p>{post.author}</p>
                    </div>
                    <div className='body'>
                        <p>{post.body}</p>
                    </div>
                </div>
                );
            })}
        </div>
    );
}
 
export default Home
