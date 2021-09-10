import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const UserList = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setState(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  {
    /* {state.map((el) => (
        <p>
          name={el.name}, username={el.username}
        </p>
      ))} */
  }
  const classes = useStyles();

  return (
    <>
      {state.map((item) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <p>{item.name}</p>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>{item.username}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default UserList;
