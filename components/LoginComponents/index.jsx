import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography,TextField,Button,Box,Container } from '@mui/material'
import UserProfile from '../ProfileComponent';

const LoginForm = ()=>{
    const [ LoginDetails,SetLoginDetails] = useState({
        Email:'',
        Password:'',
    });

    const handleChange = (event) =>{
        const {name,value}=event.target;
        SetLoginDetails((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <Box py={3} bgcolor="grey.200">
            <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            login
          </Typography>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Login Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={LoginDetails.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Password" 
                    label="Password" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={LoginDetails.password}
                    onChange={handleChange} 
                    />
                    <Button type="submit" variant="container">
                    Login
                    </Button>

                </form>

            </Container>
        </Box>
    )
}
export default LoginForm;