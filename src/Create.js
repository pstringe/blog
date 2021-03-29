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
            <h1>Create a new Post</h1>
            <form onSubmit={(e)=>submit(e)}>
                <label>Title</label>
                <input  type='text' 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                        required>

                </input>
                <label>Body</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)}required>
                    
                </textarea>
                <label>Author</label>

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