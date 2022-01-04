import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function EditPlotForm(props) {

  const [plot, setPlot] = useState({plot: "", plotId: ""})

  const onSubmit = () => {
    setPlot({plot: "", plotId: ""})
    props.onSubmitPlot(plot)
    props.closeWithSubmit()
  }

  const useStyles = makeStyles((theme) => ({
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '99%',
        },
      },
    }));

  const classes = useStyles();

    return (
      <form className={classes.root} noValidate autoComplete="off" >
        <div>
          <TextField
            id="outlined-read-only-input"
            label={props.labelMovieId}
            defaultValue={props.defaultValueMovieId}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />

        <TextField
          id="outlined-helperText"
          label={`Edit Plot For ${props.labelForPlot}`}
          defaultValue={props.defaultValuePlot}
          variant="outlined"
          color="secondary"
          multiline={true}
          fullWidth={true}
          onChange={e => setPlot({plot: e.target.value, plotId: props.defaultValueMovieId})}
        />

        <TextField
        id="outlined-read-only-input"
        label={props.labelDirector}
        defaultValue={props.defaultValueLabelDirector}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        />

        <Button variant="primary" value="Submit" onClick={() => onSubmit()} >
          Submit
        </Button>
        
        </div>
      </form>
    );
  }