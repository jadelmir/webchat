import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        sideBar:{
            flex:1,
        },
        paper:{
            height:'100%',
            margin:10
        }
    }),
);