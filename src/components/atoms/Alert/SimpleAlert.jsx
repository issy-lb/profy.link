// Module     : アラート表示ファンクション
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/05
//Noto        : Material.UIを利用。カラーテーマ変更する必要あり

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export const SimpleAlert = (props) => {
  const { children, severity } = props;
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Alert severity={severity}>{children}</Alert>
    </div>
  );
};
