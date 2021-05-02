import React, { useContext } from 'react';
import moment from 'moment';
import { AppContext } from '../../context/AppContext';
import TransformTime from '../Helpers/TransformTime';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        minWidth: 320,
        marginTop: 30,
        marginBottom: 10
    },

    container: {
        display: "flex",
        flexDirection: "column"
    },

    title: {
        fontSize: 14,
    },
    center: {
        display: "flex",
        justifyContent: "center"
    },
    rightJustify: {
        display: "flex",
        justifyContent: "flex-end"
    },
    leftJustify: {
        display: "flex",
        justifyContent: "flex-start"
    },
    time: {
        fontSize: 12
    }


});



const DutyLimits = () => {

    const modulusTimeClean = (rawTime) => {

        // if duty period limit calculated sum is > 2400, moment.js will not accept. Use modulus to keep time string in 24 hour clock values 

        // Store minutes
        const storeMinutes = (rawTime).toString().slice(2)


        // use modulus to keep first 2 numbers in 24 hour clock with 2 digits
        let hourModClean = ((rawTime).toString().slice(0, -2) % 24).toString();
        if (hourModClean.length === 1) {
            hourModClean = "0" + hourModClean;
        }

        //return hours+minutes as 4 char string
        return hourModClean += storeMinutes;
    }



    const classes = useStyles();
    const { selectedDutyPeriod, typesData, } = useContext(AppContext);
    let international = false;
    let currentType = null;

    // Map through legs and find what 'type' each is (domestic or international)

    selectedDutyPeriod.currentDutyPeriod.Legs.map((leg) => {
        currentType = typesData.find((type) => type.Station === leg.DEPcity)
        if (currentType.Type !== "Domestic") { international = true }
        return international;
    }
    );

    // Get local time for report
    let LCLstart = parseInt(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL);

    // Get block time for last leg of duty period
    let lastLegBlock = selectedDutyPeriod.currentDutyPeriod.Legs[selectedDutyPeriod.currentDutyPeriod.Legs.length - 1].LEGblock;

    let lastLegHours = "00";
    let lastLegMinutes = "00";

    // block time is a stored as a float and doesn't reflect actual hours and minutes.  Split into separate hours and minutes variables for block time.

    lastLegHours = lastLegBlock.split(".")[0];
    lastLegMinutes = lastLegBlock.split(".")[1];

    // calculate duty limit and debrief time based on type and first leg report time

    let dutyLimit;
    let dutyLimitHours;
    let debrief;
    switch (international) {
        case true:
            dutyLimitHours = 1600;
            debrief = 30;
            break;

        case false:
            debrief = 15;
            if (LCLstart >= 500 && LCLstart < 1659) {
                dutyLimitHours = 1500;
                break;
            } else if (LCLstart >= 1700 && LCLstart < 2259) {
                dutyLimitHours = 1300;
                break;
            } else {
                dutyLimitHours = 1200;
                break;
            }

        default:
            break;

    }

    // convert dutyLimit into h:mm A format

    dutyLimit = moment(modulusTimeClean(LCLstart + dutyLimitHours), "hh:mm").subtract(lastLegHours, "hours").subtract(lastLegMinutes, "minutes").subtract(debrief, "minutes").format("h:mm A");

    // Create data table layout
    const createData = (title, value) => {
        return { title, value };
    }

    // Add data to table
    const rows = [
        createData('Duty period limit', (dutyLimitHours / 100).toString() + " hrs"),
        createData('Duty report time (LCL)', TransformTime(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)),
        createData('Max release time (LCL)', moment(modulusTimeClean(LCLstart + dutyLimitHours), "hh:mm").format("h:mm A")),
        createData('Last leg block time', `${lastLegHours}:${lastLegMinutes}`),
        createData('debrief time', `${debrief} min`),
    ];


    // Render table data to page

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.container}>
                    <div className={classes.leftJustify}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Door Closure by
                    </Typography>
                    </div>
                    <div className={classes.center}>
                        <Typography variant="h2" component="h2">
                            {dutyLimit}
                        </Typography>
                    </div>
                    <div className={classes.rightJustify}>
                        <Typography className={classes.time} color="textSecondary">local time</Typography>
                    </div>
                </CardContent>
            </Card >

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default DutyLimits;