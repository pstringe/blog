import { Container, Typography, Button } from '@material-ui/core';
import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const post = {title, body, author};
        console.log(post);
    }
    
    return (
        <Container className='create'>
            <Typography component='h1' variant='h4'>Create a new Post</Typography>
            <Container component='form' onSubmit={(e)=>submit(e)}>
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
                <Button color='secondary' variant='contained'>Create Post</Button>
            </Container>
            <p className='preview'>{body}</p>
        </Container>
    );
}
 
export default Create;