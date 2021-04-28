import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Montserrat",
        fontWeight: "100",
        // backgroundColor: "#01212B",
        display: "flex",
        justifyContent: "flex-end",
        color: "#FFFFFF",
        width: "95%",
        minWidth: 320,
        // marginTop: ".25rem"
    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "200",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },
}));

export default function SequenceRelease() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <div className={classes.title}>
                SEQUENCE RELEASE 2:24 PM
                </div>
        </Box>
    );
}
