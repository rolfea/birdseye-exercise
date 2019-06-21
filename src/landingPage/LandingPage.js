import React from 'react';
import './LandingPage.css';
import { TextField, Button, Grid, Link } from '@material-ui/core';

function LandingPage() {
  return (
    <div className="landing-page">
      <Grid container component="main" spacing={8}>
        <Grid item xs={12} sm={4} md={5} className="left-form">
          {/* <svg className="bird-eye-logo">Logo here</svg> */}
          <p>LOGO</p>
          <h1>Welcome to Birdseye!</h1>
          <form>
            <TextField 
              variant="outlined"
              margin="normal"
              fullWidth  
              name="email"    
              label="Email Address" 
            />
            <TextField 
              variant="outlined"
              margin="normal"
              fullWidth
              namme="password"
              label="Password"
            />
            <Button 
              label="Submit" 
              type="submit" 
              variant="contained"            
            >
              Sign In
            </Button>
            <Button 
              label="Submit" 
              type="submit" 
              variant="contained"            
            >
              Create Account
            </Button>
          </form>
          <Link href="#" variant="body2">
              Forgot password?
          </Link>
        </Grid>
        <Grid item xs={false} sm={8} md={7} className="blue-swoosh" />
      </Grid>
    </div>
  );
}

export default LandingPage;