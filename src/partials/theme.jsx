import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        // type: "dark",
        primary: {

            main: purple[500],
        },
        secondary: {
            light: "#FFFFFF",
            main: "#169bf0",
        },
    },
});

export default theme;