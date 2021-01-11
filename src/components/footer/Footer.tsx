import React from "react";
import {Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Footer = () => {
    const classes= useStyles();
    return(
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="https://github.com/anubiar">
                    Alexandru Perevedniuc
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        // position:'absolute',
        // left:0,
        // bottom:20,
        // right:0,
    },
}));

export default Footer;
