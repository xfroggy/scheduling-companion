import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//mport white from '@material-ui/core/colors/white';

const theme = createMuiTheme({

    palette: {

        type: "dark",

        primary: {
            light: purple[300],
            main: "#169bf0"
            // main: purple[500],
        },
        secondary: {
            main: "#fff",
            light: "#169bf0",
        },
    },
});

export default theme;