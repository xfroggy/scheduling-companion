import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({

    palette: {

        type: "dark",

        primary: {
            light: purple[300],
            main: "#169bf0"
        },
        secondary: {
            main: "#fff",
            light: "#169bf0",
        },
    },
});

export default theme;