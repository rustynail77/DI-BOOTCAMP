import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    )
}

export default Nav;