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
import Copyright from './Copyright';
import { Padding } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/auth/action';
import { getCart } from '../../state/cart/Action';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export default function SigninForm({ handleClose}) {
    const dispatch= useDispatch();
    const jwt=localStorage.getItem('jwt');
    const {error}=useSelector(state=>state.auth);

    console.log(error);

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const userData={
        email: data.get('email'),
        password: data.get('password'),
      };

      dispatch(login(userData));
      if(jwt){
        handleClose();
      }
  };



  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" sx={{bgcolor: 'white' , paddingTop: '8px', paddingBottom: '1px' , borderRadius: '6px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* noValidate */}
          <Box component="form"  onSubmit={handleSubmit}  sx={{ mt: 1 }} className=' '>
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              fullWidth
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
            {
              error && <p>Invalid Password</p>
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography component="span" className='text-sm'>Don't have an account?</Typography>
                <NavLink to='/signup' className='text-blue-500 pl-2'>
                  {" Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}