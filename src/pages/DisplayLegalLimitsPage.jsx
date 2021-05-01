import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import DutyLimits from "../components/Helpers/DutyLimits";


const useStyles = makeStyles(() => ({

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

    fullPage: {
        height: "100vh",
    },


}));


const DisplayLegalLimitsPage = () => {
    const classes = useStyles();
    const { initialTimeStamp, } = useContext(AppContext) // currently not used, but when comments below are removed, it will be used to render current date

    return (
        <div className={classes.fullPage}>
            <Box className={classes.root}>
                <Box >
                    {/* Dummy data for walk through example */}
                     Monday, May 17, 2021

                    {/* Use below in real application */}
                    {/* {initialTimeStamp && initialTimeStamp.format('dddd, MMMM Do YYYY')} */}
                </Box>
            </Box>
            <DutyLimits />
        </div>
    )
}

export default DisplayLegalLimitsPage;