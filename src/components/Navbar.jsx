import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 40
    },
    navbar: {
        background: 'linear-gradient(to right top, #2134E7, #C01BFA)'
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar className={classes.navbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={logo} alt="logo" className={classes.logo} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Scheduling Companion
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
