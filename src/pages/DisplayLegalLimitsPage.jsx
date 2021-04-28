import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import DutyLimits from "../components/Helpers/DutyLimits";


const useStyles = makeStyles((theme) => ({

    root: {

        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#FFFFFF",
        padding: "1rem",
    },
    paddingTop: {
        paddingTop: ".5rem"
    },
    yesButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fullPage: {
        height: "100vh",
    },


}));


const DisplayLegalLimitsPage = () => {
    const classes = useStyles();
    const { initialTimeStamp, } = useContext(AppContext)

    return (
        <div className={classes.fullPage}>
            <Box className={classes.root}>
                <Box >{initialTimeStamp && initialTimeStamp.format('dddd, MMMM Do YYYY')}</Box>
            </Box>
            <DutyLimits />
        </div>
    )
}

export default DisplayLegalLimitsPage;