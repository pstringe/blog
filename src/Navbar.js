import { Link } from 'react-router-dom';
import {Typography} from '@material-ui/core';

const Navbar = (props) => {
    return ( 
        <nav className='navbar'>
            <Typography color='primary' variant='h5' component='h1'> {props.title} </Typography>
            <div className="links">
                <Link to='/'><Typography color='secondary'>Home</Typography></Link>
                <Link to='/create'><Typography color='secondary'>Create</Typography></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;