import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        borderRadius: "5px 5px 0 0",
        minWidth: 320,
        display: "flex",
        justifyContent: "space-between",
        color: "#FFFFFF",
        backgroundColor: "#169bf0",
        marginTop: "1rem"

    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "500",
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
