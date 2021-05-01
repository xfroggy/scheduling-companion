import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
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

function HomePage(props) {
    const history = useHistory();
    const { selectedDate, setSelectedDate, selectedSequenceId, setSelectedSequenceId } = useContext(AppContext)


    //Set the title and reset the Date and SequenceId on load

    useEffect(() => {
        document.title = "Scheduling Companion";
        setSelectedDate(null);
        setSelectedSequenceId(null);
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    const formSubmit = (event) => {
        event.preventDefault();
        history.push(`/sequence/${selectedSequenceId}`);
    }
    const classes = useStyles();
    console.log(props);
    return (
        <div className={classes.fullPage}>
            <div className={classes.formContainer}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField color="secondary" required id="sequence" label="Sequence" onChange={(e) => setSelectedSequenceId(e.target.value)} />

                    </div>
                    <div>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <KeyboardDatePicker
                                color="secondary"
                                disableToolbar
                                variant="inline"
                                format="MM/DD/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Sequence START date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <Button mx="auto" color="primary" onClick={formSubmit}>submit</Button>

                    </div>
                </form>
            </div>


        </div >

    );
}


export default HomePage;

