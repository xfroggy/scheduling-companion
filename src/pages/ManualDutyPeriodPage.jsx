import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {


        fontSize: 22,
        fontFamily: "Montserrat",
        fontWeight: "100",
        backgroundColor: "#01212B",
        display: "flex",
        color: "#FFFFFF",
        padding: "1rem",
        margin: "2rem"
    },
    paddingTop: {
        paddingTop: ".5rem"
    },
    yesButton: {
        '& > *': {
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "flex-end"
        },
    },
    fullPage: {
        height: "100vh",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        padding: "1rem"
    }
}));

const DisplaySequencePageEdit = () => {

    const classes = useStyles();
    const history = useHistory();

    const { manDEPcity, setManDEPcity, selectedDate, selectedSequence, setSelectedSequence, initialTimeStamp, selectedDutyPeriod, selectedSequenceId, leg, typesData } = useContext(AppContext)

    const yesRedirect = () => {
        history.push(`/`);
    }

    useEffect(() => {
        (async function getSequenceToAlter() {

        })
    })

    const formSubmit = (event) => {
        event.preventDefault();
        history.push(`/sequence/${selectedSequenceId}`);
    }
    return (
        <div className={classes.fullPage}>
            <Box className={classes.root}>
                <Box >Coming Soon!</Box>

            </Box>

            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.paddingReset}>


                    <Card >
                        <CardContent className={classes.paddingTop}>
                            <Typography className={classes.center} color="textSecondary" >
                                You have either entered a sequence that does not exist in the original bid sheet
                        </Typography>
                            <Divider />
                            <Typography className={classes.center}>
                                or

                            </Typography>
                            <Divider />
                            <Typography className={classes.center}>
                                You have entered an origination date that the sequence does not operate on
                            </Typography>
                        </CardContent>
                        <Divider />
                        <CardContent className={classes.flight__times}>
                            <Typography className={classes.flight__details} color="textSecondary" >
                                Soon you will have the ability to make changes to sequence data or add last minute sequences to check your legalities here.
                        </Typography>

                        </CardContent>
                        <Divider />

                        {/* This is where I've started editing */}
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField color="secondary" required id="station" label="Station" onChange={(e) => setManDEPcity(e.target.value)} />

                            </div>

                            <div onClick={formSubmit}>
                                <Button mx="auto" color="primary" >submit</Button>

                            </div>
                        </form>
                        {/* this is where I've stopped */}

                    </Card>
                    <Divider className={classes.thick} />
                    <Typography className={classes.title}>

                    </Typography>
                </CardContent>
            </Card>
            <div className={classes.yesButton}>
                <Button color="primary" onClick={yesRedirect}>BACK</Button>
            </div>

        </div>
    )

}

export default DisplaySequencePageEdit;