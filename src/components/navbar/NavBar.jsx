import './NavBar.scss';
import Menu from '../menu/Menu';

export default function NavBar({ isNavbarHidden }) {
    return ( <Menu parentName="navbar" showArrows={true} /> )
}