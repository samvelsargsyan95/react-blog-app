import './HeaderComponent.scss';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeaderComponent({ setSearchText }) { 
  const [isSticky, setIsSticky] = useState(false);
  const [isUntil200, setIsUntil200] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    if (window.scrollY < 200 && window.scrollY > 100) {
      setIsUntil200(true);
    } else {
      setIsUntil200(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <header className='header'>
        <Grid  
          container 
          className="header__logo-part"
        > 
          <Grid className="header__menu-burger">
            <MenuIcon 
              fontSize="large"
              onClick={() => toggleSidebar(true)}
            />
          </Grid>

          <Link to="/">
            <img 
              src={logo} 
              srcSet={logo} 
              alt="Logo" 
              className="header__logo" 
            />
          </Link>

          <Box className="header__search-part">
            <TextField
              onChange={ handleSearchChange }
              id="search-inp" 
              label="Search" 
              variant="standard" 
            />

            <img 
              src={searchIcon}
              srcSet={searchIcon}
              alt="Search icon"  
            />
          </Box>
        </Grid>

        <Box className="header__search-small-screen">
          <TextField
            onChange={ handleSearchChange }
            label="Search" 
            variant="standard" 
          />
        </Box>
      </header>

      <Box 
        className="navbar-container"
        style={{
          position: isSticky ? 'sticky' : 'relative',
          top: isSticky ? '0' : 'initial',
          opacity: isUntil200 ? 0 : 1,
        }}
      >
        <NavBar />
      </Box>

      <SideBar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
    </>
  );
};
