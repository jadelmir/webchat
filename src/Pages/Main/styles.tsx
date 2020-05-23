import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) =>
    createStyles({

        mainBackground: {
            backgroundColor:theme.palette.primary.dark,
            height: '100vh',
            // padding:10, 
        }
    }),
);