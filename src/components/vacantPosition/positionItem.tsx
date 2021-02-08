import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Link,
  Typography,
  Paper,
  CardActionArea,
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Config from "../../config/config";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../redux/reducers";
import { Color } from "../../config/Colors";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";

const PositionItem = ({
  card: {
    positionName,
    salary,
    country,
    employerProfileImage,
    vacantPositionId,
  },
}: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigation = useHistory();
  const dispatch = useDispatch();
  const onNavigate = (id: number) => {
    navigation.push({
      pathname: `/positions/${id}`,
    });
  };
  return (
    <div>
      <Grid item>
        <Card className={classes.root}>
          <CardActionArea onClick={() => onNavigate(vacantPositionId)}>
            <CardMedia
              className={classes.media}
              image={`${Config.sourceUrl}/Images/${employerProfileImage}`}
            />

            <CardContent className={classes.content}>
              <Typography></Typography>
              <Typography gutterBottom variant="h6" component="p">
                {positionName}
              </Typography>
              <Typography>Country:{country}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  content: {
    maxWidth: 455,
  },
  media: {
    height: 200,
  },
}));

export default PositionItem;
