import React from 'react';
import Box from '@material-ui/core/Box';
import FindTodaysDP from '../components/Helpers/FindTodaysDP';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        minWidth: 320,
        display: "flex",
        justifyContent: "space-between",
        color: "#FFFFFF",
        backgroundColor: "#3f51b5",
        marginTop: "1rem"
    },

    title: {
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "600",
        padding: ".5rem",
        "&:last-child": {
            paddingBottom: ".5rem"
        }
    },
}));

const VerifyDutyPeriod = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.root}>
                <div className={classes.title}>
                    <FindTodaysDP />
                </div>
            </Box>
        </>
    )
}

export default VerifyDutyPeriod;
