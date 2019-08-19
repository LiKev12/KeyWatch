import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
      backgroundColor: "#1F2833",
      textAlign: "center",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
});

export default function Loading() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div class="loader"></div>
        </div>
    )
}
