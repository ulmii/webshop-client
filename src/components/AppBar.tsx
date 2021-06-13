import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link as RouterLink} from 'react-router-dom';
import {Grid, Link} from '@material-ui/core';
import fetchProfile from '../api/profile';
import {Redirect} from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import useBasket from '../hooks/useBasket';
import {IProduct} from '../interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const authToken = localStorage.getItem('authToken');
  const [auth, setAuth] = React.useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [referrer, setReferrer] = useState<string>('');
  const {basket, addProduct, removeProduct} = useBasket();

  if (authToken) {
    fetchProfile(authToken).then(profile => {
      if (profile) {
        console.log('EMAIL ' + profile.email);
        setAuth(true);
      }
    });
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorBasket, setAnchorBasket] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorEl);
  const openBasket = Boolean(anchorBasket);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBasket = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorBasket(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseBasket = () => {
    setAnchorBasket(null);
  };

  const logOut = () => {
    localStorage.setItem('authToken', '');
    setReferrer('/');
    setRedirectToReferrer(true);
    window.location.reload();
  };

  if (redirectToReferrer) {
    return <Redirect to={referrer} />;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="menu-basket"
            aria-haspopup="true"
            onClick={() => console.log(basket)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-basket"
            anchorEl={anchorBasket}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={openBasket}
            onClose={handleCloseBasket}
          >
            <MenuItem>
              {basket.map((product: IProduct) => (
                <li>
                  {product.title}
                  <button onClick={() => removeProduct(product.id)}>
                    remove product
                  </button>
                </li>
              ))}
            </MenuItem>
          </Menu>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Typography variant="h6">
                    <Link color="inherit" to="/" component={RouterLink}>
                      Home
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Link color="inherit" to="/products" component={RouterLink}>
                      Products
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <div>
                {auth ? (
                  <div>
                    <MenuItem to="/account" component={RouterLink}>
                      My account
                    </MenuItem>
                    <MenuItem to="/checkout" component={RouterLink}>
                      Checkout
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        logOut();
                      }}
                    >
                      Log out
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem to="/login" component={RouterLink}>
                      Sign in
                    </MenuItem>
                    <MenuItem to="/register" component={RouterLink}>
                      Create an account
                    </MenuItem>
                  </div>
                )}
              </div>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
