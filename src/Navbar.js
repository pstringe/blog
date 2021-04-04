import { Link } from 'react-router-dom';
import {Typography} from '@material-ui/core';

const Navbar = (props) => {
    return ( 
        <nav className='navbar'>
            <Typography color='textPrimary' variant='h5' component='h1'> {props.title} </Typography>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;