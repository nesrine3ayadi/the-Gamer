import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import './Dashboard.scss'
import ListUsers from './listUsers';
import logo from '../../img/logo.png'
import Axios from "axios"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  span:{
      color: 'white'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        
        
        <MenuList className="leftMenu">
          <MenuItem>Admin</MenuItem>
          <MenuItem>Users</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      <div>
        <ListUsers />
      
      </div>
    </div>
  );
}