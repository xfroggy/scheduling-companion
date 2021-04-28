import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import "./DisplaySequencePage.scss";
import moment from 'moment';
import DutyPeriod from "../components/DutyPeriod";
import SequenceRelease from "../components/SequenceRelease";
import VerifyDutyPeriod from "../components/VerifyDutyPeriod";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        display: "flex",
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
}));



const DisplaySequencePage = () => {
    const history = useHistory();
    const { sequenceId } = useParams();
    const { selectedDate, setSelectedSequence, initialTimeStamp, setInitialTimeStamp } = useContext(AppContext)

    const yesRedirect = () => {
        history.push(`/limits`);
    }


    useEffect(() => {
        (async function getSequenceData() {
            const response = await fetch("/data/bid-sheet.json");
            const data = await response.json();

            console.log(data[0].BidMonths[0].Bases[0].Sequences);

            const sequences = data[0].BidMonths[0].Bases[0].Sequences;
            console.log("Here are sequences 2: ", sequences);
            const theSequence = sequences.find((sequence) => sequence.SeqNum === sequenceId.toString());

            console.log("Here's theSequence value: ", theSequence);
            setInitialTimeStamp(new moment());

            theSequence && theSequence.SequenceOpDates.find((dt) => dt.OpDateID === (selectedDate.date() + 1).toString()
            ) ? setSelectedSequence({ currentSequence: theSequence }) : setSelectedSequence({ currentSequence: null });

        })();

    }, [])

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box >{initialTimeStamp && initialTimeStamp.format('dddd, MMMM Do YYYY')}</Box>

            </Box>
            <DutyPeriod />
            <div className={classes.sequenceContainer}>
                <SequenceRelease />
            </div>
            <div className={classes.sequenceContainer}>
                <VerifyDutyPeriod />
            </div>
            <div className={classes.yesButton}>
                <Button color="primary" onClick={yesRedirect}>CONFIRM</Button>
            </div>
        </>
    )
}

export default DisplaySequencePage;