import React from 'react';
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

import API from "../../utils/API";
// import { List } from "../List";

const useStyles = makeStyles({
  root: {
    borderRadius: "18px",
    minWidth: 275,
    width: "65%",
    fontSize: "20px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "black",
    margin: "10px",
  },
  button: {
    borderRadius: "18px",
    backgroundColor: "#FFEE32",
    fontSize : "20px",
    textAlign: "center",
    width: "40%"
  }
});

export default function OwnJokeCard(props) {
const history = useHistory();

const classes = useStyles();
// console.log(props)

function deleteJoke(_id) {
  // reset page
  setTimeout(() => {
    history.go(0)
    }, 500);

  // console.log(_id)
  API.deleteJokes(_id)
  .catch(err => console.log(err));
  }

  return (
    <div>
    {props.jokes.map(joke => (
    
    <div key={joke._id} >

    <Card className={classes.root} variant="outlined">

    <CardContent className="cardContent">

      <div>
              <div className="jokeCard">
              <div>{joke.joketype}</div>
              <div>{joke.partOne}</div>
              <div>{joke.partTwo}</div>
              </div> 
      </div>

    </CardContent>

      <Button 
        onClick={ () => deleteJoke(joke._id)} 
        className="btn btn-primary DeleteBtn">
        <input className={classes.button} value="delete"/>
      </Button>
  
    </Card>
    </div>
    
    ))} 
    </div>
  );
}

