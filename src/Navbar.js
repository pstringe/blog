import { Link } from 'react-router-dom';
import {Typography, Button,  ButtonGroup, Container} from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const Navbar = (props) => {
    return ( 
        <nav className='navbar'>
            <Container>
                <Typography color='primary' variant='h5' component='h1'> {props.title} </Typography>
                <Typography color='body1' variant='subtitle2' component='p'> Admin Panel </Typography>
            </Container>

            <ButtonGroup variant='text' color='primary' className="links">
                <Link to='/'><Button>Home</Button></Link>
                <Link to='/create'><Button endIcon={<AddCircleOutlineRoundedIcon/>}>Create</Button></Link>
            </ButtonGroup>
        </nav>
    );
}
 
export default Navbar;