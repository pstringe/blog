import { Link } from 'react-router-dom';
import {Typography, Button,  ButtonGroup} from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
const Navbar = (props) => {
    return ( 
        <nav className='navbar'>
            <Typography color='primary' variant='h5' component='h1'> {props.title} </Typography>
            <ButtonGroup variant='text' color='primary' className="links">
                <Link to='/'><Button>Home</Button></Link>
                <Link to='/create'><Button endIcon={<AddCircleOutlineRoundedIcon/>}>Create</Button></Link>
            </ButtonGroup>
        </nav>
    );
}
 
export default Navbar;