import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const fetchBasket = () => {
    const data =
      '{\n' +
      '    "products": [\n' +
      '        {\n' +
      '            "id": "60be2767de0000c50124a488",\n' +
      '            "title": "Laptop HP Pavilion 15",\n' +
      '            "description": "Odpowiednia przekątna ekranu to kluczowa kwestia dla wygody użytkowania urządzenia. To od niej zależy mobilność urządzenia oraz komfort jego eksploatacji. To wartość wyrażona w calach (1 cal to 2,54 cm).",\n' +
      '            "price": 2599,\n' +
      '            "category": {\n' +
      '                "name": "Laptopy"\n' +
      '            }\n' +
      '        }\n' +
      '    ]\n' +
      '}';

    fetch('http://localhost:9000/baskets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxLVlkTjFHWTlMYUNIOXMxUmNtRDhrWnZsUDdJakRUXC9oRGpZTHkyOHR3Y3B1OGRnTk03U3pHb3ZNbEV3YUdyZWs5S3dUbFFPMTBMbGI2OWh3Ujl1NjlIYzUwakRoNXBacHprK0U9IiwiaXNzIjoiWW91ciBmYW5jeSBhcHAiLCJleHAiOjE2MjMyNDk1NDgsImlhdCI6MTYyMzIzODc0OCwianRpIjoiMTQzODY5MjliYjAwZTQwMGIzZDcyOTU2MGJiZmUyZmFmMWQ0NWU0ZjgzOGM1NWJlYmIxZGY1NmVmNDViM2Q2YWRiNzg2MGJmNWE4OWQ4OTJiYjY4N2E2MmI0MWU1NmNkMWU4ODRkOWQxZWFkNGRhYmFiY2ZhNGFhNWZkMmVhMTIxYzA4Yzg1YWU1MzY4YzQ4NDUxY2EyMDg4ZWVlNDk1Y2FhZTQxZGY4ZGQ1YmJjOTg3NWE2MjU1MzVkZGI0YzFhODJlZDEzOWNjZTZjZDk1MmEwYmE0OGUzYjk1YjNlYjhlMWQ5MDgxZjRiOWJkMmMzMzhlZTMwZGUwNDliODdhZCJ9.adJRQFRbWtm01By8nCNLJfz3HGcu5lKrTE0SdFjvn4M',
      },
      body: data,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" to="/home" component={RouterLink}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" to="/products" component={RouterLink}>
              Shop
            </Link>
          </Typography>
          {auth && (
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem to="/login" component={RouterLink}>
                  Sign in
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
