import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            color: "#FFFFFF",
        },
    },
    fullPage: {
        height: "100vh",
    },
    formContainer: {
        paddingTop: "5rem"
    },

}));

function ManualDutyPeriodFormPage(props) {
    const history = useHistory();
    const { selectedDate, setSelectedDate, selectedSequenceId, setSelectedSequenceId, selectedDutyPeriod, setSelectedDutyPeriod, manDEPtime, setManDEPtime, manDEPcity, setManDEPcity } = useContext(AppContext)


    //Set the title and reset the Date and SequenceId on load

    useEffect(() => {
        document.title = "Scheduling Companion";
        setSelectedDate(null);
        setSelectedSequenceId(null);
        setSelectedDutyPeriod(null)
    }, [setSelectedDate, setSelectedSequenceId, setSelectedDutyPeriod]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    const formSubmit = (event) => {
        event.preventDefault();
        history.push(`/sequence/${selectedSequenceId}`);
    }
    const classes = useStyles();

    return (
        <div className={classes.fullPage}>
            <div className={classes.formContainer}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField color="secondary" required id="sequence" label="Sequence" onChange={(e) => {
                            setSelectedSequenceId(e.target.value);
                        }
                        } />

                    </div>
                    <div>
                        <TextField color="secondary" required id="DEPtime" label="Current Duty Period:  departure time for first leg" onChange={(e) => setManDEPtime(e.target.value)} />
                    </div>


                    <div onClick={formSubmit}>
                        <Button mx="auto" color="primary" >submit</Button>

                    </div>
                </form>
            </div>


        </div >

    );
}


export default ManualDutyPeriodFormPage;

