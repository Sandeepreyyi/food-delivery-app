import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, useMediaQuery, useTheme } from '@mui/material';

const FoodCatogories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Container>
      <Toolbar style={{ display: 'flex', flexWrap: 'wrap' }}>

        <Button
            style={{
              width: isMobile ? '50%' : '25%',
              boxSizing: 'border-box',
            
              backgroundColor: isActive('/foodlisting') ? 'red' : 'white',
           
            }}
          >
            <Link
              to="/foodlisting"
              style={{
                color:'blue',
                padding: '8px 1px',
                width: '100%',
                display: 'block',
                textDecoration:'none',
                border:'1px solid red',
                borderRadius:'10px'
              }}
            >
              All FOODS
            </Link>
          </Button>
         
          <Button
            style={{
              width: isMobile ? '50%' : '25%',
              boxSizing: 'border-box',
            
              backgroundColor: isActive('/foodlisting/vegetarianItems') ? 'red' : 'white',
           
            }}
          >
            <Link
               to="/foodlisting/vegetarianItems"
              style={{
                color:'blue',
                padding: '8px 1px',
                width: '100%',
                display: 'block',
                border:'1px solid red',
                textDecoration:'none',
                borderRadius:'10px'

              }}
            >
              Veg Items
            </Link>
          </Button>
          
          <Button
            style={{
              width: isMobile ? '50%' : '25%',
              boxSizing: 'border-box',
            
              backgroundColor: isActive('/foodlisting/nonvegetarianItems') ? 'red' : 'white',
             
            }}
          >
            <Link
               to="/foodlisting/nonvegetarianItems"
              style={{
                color:'blue',
                padding: '8px 1px',
                width: '100%',
                display: 'block',
                border:'1px solid red',
                textDecoration:'none',
                borderRadius:'10px',
              }}
            >
              Non Veg
            </Link>
          </Button>

          
          
          <Button
            style={{
              width: isMobile ? '50%' : '25%',
              boxSizing: 'border-box',
            
              backgroundColor: isActive('/foodlisting/deserts') ? 'red' : 'white',
              
            }}
          >
            <Link
               to="/foodlisting/deserts"
              style={{
                color:'blue',
                padding: '8px 1px',
                width: '100%',
                display: 'block',
                textDecoration:'none',
                border:'1px solid red',
                borderRadius:'10px'

              }}
            >
              Beverage
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FoodCatogories;

