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
    const classes = useStyles();
    const { selectedDutyPeriod, typesData, } = useContext(AppContext);

    let international = false;
    let currentType = null;
    selectedDutyPeriod.currentDutyPeriod.Legs.map((leg) => {
        console.log("Dep from: " + leg.DEPcity)

        currentType = typesData.find((type) => type.Station === leg.DEPcity)
        console.log("type is: " + currentType.Type);
        if (currentType.Type !== "Domestic") { international = true }

    }
    );
    console.log("international is: " + international)
    console.log("here's the time I need: " + selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)

    let LCLstart = parseInt(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL);
    console.log("dp start lcl: ", LCLstart);
    let lastLegBlock = selectedDutyPeriod.currentDutyPeriod.Legs[selectedDutyPeriod.currentDutyPeriod.Legs.length - 1].LEGblock;
    console.log("lastLegBlock: ", lastLegBlock);
    let lastLegHours = "00";
    let lastLegMinutes = "00";
    lastLegHours = lastLegBlock.split(".")[0];
    lastLegMinutes = lastLegBlock.split(".")[1];

    console.log(lastLegHours);
    console.log(lastLegMinutes);
    let dutyLimit;
    let dutyLimitHours;
    let debrief;
    switch (international) {
        case true:
            dutyLimitHours = 1600;
            debrief = 30;
            console.log(dutyLimit);
            break;

        case false:
            debrief = 15;
            if (LCLstart >= 500 && LCLstart < 1659) {
                dutyLimitHours = 1500;
                console.log(dutyLimit);
                break;
            } else if (LCLstart >= 1700 && LCLstart < 2259) {
                dutyLimitHours = 1300;
                console.log(dutyLimit);
                break;
            } else {
                dutyLimitHours = 1200;
                break;
            }

        default:
            console.log("error");
            break;

    }

    dutyLimit = moment(LCLstart + dutyLimitHours, "hh:mm").subtract(lastLegHours, "hours").subtract(lastLegMinutes, "minutes").subtract(debrief, "minutes").format("h:mm A");

    function createData(title, value) {
        return { title, value };
    }

    const rows = [
        createData('Duty period limit', (dutyLimitHours / 100).toString() + " hrs"),
        createData('Duty report time (LCL)', TransformTime(selectedDutyPeriod.currentDutyPeriod.RPTdepLCL)),
        createData('Max release time (LCL)', moment(LCLstart + dutyLimitHours, "hh:mm").format("h:mm A")),
        createData('Last leg block time', `${lastLegHours}:${lastLegMinutes}`),
        createData('debrief time', `${debrief} min`),
    ];



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