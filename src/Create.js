const Create = () => {
    return (
        <div className='create'>
            <h1>Create a new Post</h1>
            <form>
                <label>Title</label>
                <input type='text' required></input>
                <label>Body</label>
                <textarea required>
                    
                </textarea>
                <label>Author</label>

                <select>
                    <option value='Poitier'>Poitier</option>
                    <option value='Mario'>Mario</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;