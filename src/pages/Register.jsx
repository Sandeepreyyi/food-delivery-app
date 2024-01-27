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
import { useNavigate } from 'react-router-dom';
import backImg from '../asserts/backImg3.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Register = () => {
  const navigate = useNavigate();
  const pageStyle = {
    margin: '0',
    padding:'100px',
  
    height: '100vh',
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
  
    if (!firstName || !lastName) {
      alert('Please enter both first name and last name.');
      return;
    }
  
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    const isValidEmail = emailRegex.test(data.get('email'));
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@&#])(?=.*\d).{8,16}$/;
    const isValidPassword = passwordRegex.test(data.get('password'));
  
    if (!isValidEmail) {
      alert('Please enter a valid Gmail address.');
      return;
    }
  
    if (!isValidPassword) {
      alert('Password must have 8 characters, one capital letter, one special character (@, &, #), and include numbers.');
      return;
    }
  
    let existingUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
  

    if (!Array.isArray(existingUserDetails)) {
      existingUserDetails = [];
    }
  

    const newUserDetails = {
      firstName,
      lastName,
      email: data.get('email'),
      password: data.get('password'),
    };
  
    existingUserDetails.push(newUserDetails);
  

    localStorage.setItem('userDetails', JSON.stringify(existingUserDetails));
  

    navigate('/signin');
  };
  

  return (
    <div style={pageStyle} >
    <ThemeProvider theme={defaultTheme} style={{display:'flex', }} >
      <Container component="main" maxWidth="xs"  >
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default Register;
