import { Typography } from '@material-ui/core';
import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const submit = (e) => {
        //prevent page refresh
        e.preventDefault();
        const post = {title, body, author};
        console.log(post);
    }
    return (
        <div className='create'>
            <Typography component='h1' variant='h3' color='textPrimary'>Create a new Post</Typography>
            <form onSubmit={(e)=>submit(e)}>
                <Typography component='label'>Title</Typography>
                <input  type='text' 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                        required>

                </input>
                <Typography component='label'>Body</Typography>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)}required>
                    
                </textarea>
                <Typography component='label'>Author</Typography>

                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value='Poitier'>Poitier</option>
                    <option value='Mario'>Mario</option>
                </select>
                <button>Add Blog</button>
            </form>
            <p className='preview'>{body}</p>
        </div>
    );
}
 
export default Create;