import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import './header.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../asserts/res-logo.png'

const pages = [
  {
    display:'Home',
    path:'/'
  },
  {
    display:'Foods',
    path:'/foodlisting'
  },
  {
    display:'Cart',
    path:'/cart'
  },
  {
    display:'Orders',
    path:'/orders'
  }
];
const settings = [
  {
    display:'SignIn',
    path:'/signin'
  },
  {
    display:'Rigister',
    path:'/resgister'
  }
];
// const settings = [];

const Header = () => {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <AppBar position="static" >
   
      <Container maxWidth="xl" sx={{
        color:'red',
        backgroundColor:'white'
          }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src={logo} alt="Example" className="smallLogo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '50px',height: '50px', }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 50,
              ml:3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
           
    
            }}
          >
            Hi FOODIE
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              ml:1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 6,
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
             
            }}
          >
                FOODIE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
  <MenuItem key={page.display} onClick={handleCloseNavMenu}>
    <Typography textAlign="center">
      <NavLink
        to={page.path}
        className={`nav-link ${navClass => navClass.isActive ? 'active_menu' : ''}`}
        sx={{
          textDecoration: 'none',
          color: '#333',
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
          backgroundColor: 'blue',
          transition: 'background-color ease',
          '&:hover': {
            backgroundColor: '#ddd',
            color: 'green'
          },
          '&.active_menu': {
            backgroundColor: 'green',
            color: 'blue'
          }
        }}
      >
        {page.display}
      </NavLink>
    </Typography>
  </MenuItem>
))}
          </Box>
          <Box sx={{ marginRight: '10px' }}>
  
</Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', textDecoration: 'none' } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },

              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page.display} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <NavLink to = {page.path} className={navClass=> navClass.isActive? 'active_menu':''} 
                          sx={{
                            textDecoration: 'none',
        color: '#333',
        padding: '10px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#ddd',
          color: '#000'
        }
                          }}>{page.display}</NavLink>
                  </Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <NavLink to = {setting.path}>{setting.display}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
