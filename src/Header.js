import React, { useState, useEffect } from "react";
import "./Header.css";
import { db, auth, storage } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink, withRouter } from "react-router-dom";
import Banner from "./Banner";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {

  const [isOpen, setOpenNav] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  
  const [open, setOpen] = useState(false);
  const [opensignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  // useEffect-Run a piece of code based on a specific condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in.. .
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
          //dont update username
        } else {
          //if we just created someone
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        // user has logged out
        setUser(null);
      }
    });
    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);


  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  };
  return (
    <div className="header">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="header__headerImage"
                src="https://bit.ly/2H8dmtM" alt='logo'
              />
            </center>
            <Input
              className="header__input"
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              className="header__input"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="header__input"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={opensignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="hearder__headerImage"
                src="https://bit.ly/2H8dmtM" alt='logo'
              />
            </center>

            <Input
              className="header__input"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="header__input"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      {/*header*/}
      <nav
        className="navbar "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpenNav(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>

             
            </a>
          </div>
          <div className={`navbar-menu ${isOpen && "is-active"}`}>
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
              >
                <img
                  className="hearder__headerImage"
                  src="https://bit.ly/35xbvbk"
                />
              </NavLink>
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
              >
                What We Do
              </NavLink>
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/our_values"
              >
                Our values
              </NavLink>
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/contact_us"
              >
                Contact Us
              </NavLink>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                {user ? (
                  <Button
                    onClick={() => auth.signOut()}
                    className="navbar__button"
                  >
                    <ExitToAppIcon /> logout
                  </Button>
                ) : (
                  <div className="header__loginContainer">
                    <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                    <Button onClick={() => setOpen(true)}>Sign Up</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*banner*/}
     
    </div>
  );
}

export default withRouter( Header);
