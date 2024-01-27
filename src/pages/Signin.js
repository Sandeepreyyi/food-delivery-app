import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../asserts/logo.jpg'
import { useNavigate } from 'react-router-dom';
import backImg from '../asserts/backImg3.png'
const defaultTheme = createTheme();

const Signin = () => {
  const navigate = useNavigate();
  const pageStyle = {
    margin: '0',
    padding:'100px',
   
    height: '100vh',
    width:'100%'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const enteredEmail = data.get('email');
    const enteredPassword = data.get('password');

    // Retrieve user details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    // Find user with matching email
    const user = userDetails.find((user) => user.email === enteredEmail);

    if (!user || user.password !== enteredPassword) {
      alert('Invalid email or password. Please try again.');
      return;
    }

    // Successful sign-in, you can navigate to the home page or perform other actions
    navigate('/home');
  };

  
  return (
    <div style={pageStyle}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid',
            marginBottom: '20px',
            padding: '10px'
          }}
          
        >
         <div sx={{ outerHeight: 300 }}>
          <Avatar sx={{ m: 1, marginTop:8, backgroundImage: `url(${Logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
          </Avatar>
          <Typography component="h1" variant="h5" style={{color:'red'}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/resgister" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          </div> 
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default Signin