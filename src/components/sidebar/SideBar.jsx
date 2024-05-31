import './SideBar.scss';
import Menu from '../menu/Menu';
import logo from '../../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import { 
  Drawer,
  Box,
} from '@mui/material';

export default function SideBar({ isOpenSidebar, setIsOpenSidebar }) {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpenSidebar(open);
  };

  return (
    <Drawer
      anchor="left"
      open={isOpenSidebar}
      onClose={toggleDrawer(false)}
    >
      <div
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <Box 
          sx={{ width: 300 }} 
          role="presentation" 
        >
          {/* Logo part */}
          <Box 
            sx={{ 
              px: 2,
              pt: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            className="sidebar-logo-part"
          >
            <Link to="/">
              <img 
                src={logo} 
                srcSet={logo} 
                alt="Logo" 
                className="header__logo" 
              />
            </Link>

            <CloseIcon 
              onClick={toggleDrawer(false)} 
              fontSize="large" 
              sx={{ mb: 1 }}
            />
          </Box>
         

          <Menu parentName="sidebar" showArrows={false} />
        </Box>
      </div>
    </Drawer>
  );
}