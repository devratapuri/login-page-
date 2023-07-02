"use client";
import axios from "axios";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";

const signUp = async (email, password, firstName, lastName) => {
  const response = await axios.post("https://reqres.in/api/users", {
    email,
    password,
    firstName,
    lastName,
  });

  if (response.status === 201) {
    // The user has been signed up successfully.
    return response.data;
  } else {
    // There was an error signing up the user.
    return null;
  }
};

const SignUp = () => {
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    const data = await signUp("johndoe@example.com", "password", "John", "Doe");
    setUser(data);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Typography variant="h4" color="black" align="center">
       <b>
        Sign Up To your Account
        </b> 
        <br /><br></br>
      </Typography>
      <Typography variant="h5" color="black" align="center">
        Build skills for today, tomorrow, and beyond.<br></br>
        <center>Education to future-proof your career.</center>
        <br></br>
      </Typography>
      <center>
        <div className="inline-block">
          <Button
            variant="outlined"
            style={{ display: "inline-block", margin: "10px" }}
          >
                <div style={{"margin-right":"10px",display : "inline-block"}}>
   <img width="18" height="18" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> </div>
            Login from google
          </Button>
          <Button
            variant="outlined"
            style={{ display: "inline-block", margin: "10px" }}
          >
                  <div  style={{"margin-right":"10px",display : "inline-block"}}>
    <img width="18" height="20" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
      </div>
            Login from Facebook
          </Button>
          <br />
          <hr
            style={{
              width: "40%",
              display: "inline-block",
              fontWeight: "bold",
            }}
          />
          Or
          <hr
            style={{
              width: "40%",
              display: "inline-block",
              fontWeight: "bold",
            }}
          />
          <form onSubmit={handleSignUp}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{ width: "85%" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ width: "85%" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="EmailId"
              variant="outlined"
              style={{ width: "85%" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              style={{ width: "85%" }}
            />
            <br />
            <br />
            <div style={{ fontSize: "10px", color: "Black" }}>
              By clicking "Sign in," you agree to our Terms of Use and our
              Privacy Policy.
              <br />
            </div>
            <br />
            <Button
              style={{ "background-color": "blue" }}
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          {user && <p>You have successfully signed up!</p>}
        </div>
      </center>
    </div>
  );
};

export default SignUp;
