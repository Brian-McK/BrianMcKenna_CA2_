import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// had to find a way of changing a react hook style to a class component style as my react hook form was not working properly found the solution here: https://github.com/mui-org/material-ui/issues/15820

let styles = (theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '99%',
        },
      },
  });

class AddMovieForm extends Component {
  
    state = {
        imdbID: "", 
        Title: "",
        Genre: "",
        Plot: "",
        Runtime: "",
        Year: "",
        Director: "",
        imdbRating: ""
    }

    onSubmit = (formErrors) => {

      if(formErrors.length === 0)
      {
        this.props.addMovie(this.state)

        this.setState({
          imdbID: "", 
          Title: "",
          Genre: "",
          Plot: "",
          Runtime: "",
          Year: "",
          Director: "",
          imdbRating: ""
        })
        this.props.closeWithSubmit()
      }
      else {
        alert(JSON.stringify(formErrors, null, 4))
      }
    }
  
    render()
    {
        const { classes } = this.props;

        // add each error to a list
        // onsubmit check the length of the error list
        // if the errors are === 0 then allow the onsubmit to happen

        let INVALID_MOVIE_ID_MSG = ""
        let INVALID_TITLE_MSG = ""
        let INVALID_GENRE_MSG = ""
        let INVALID_PLOT_MSG = ""
        let INVALID_RUNTIME_MSG = ""
        let INVALID_YEAR_MSG = ""
        let INVALID_DIRECTOR_MSG = ""
        let INVALID_IMDB_RATING_MSG = ""

        const formErrors = []

        let isNotValidMovieId = false
        let isNotValidMovieTitle = false
        let isNotValidMovieGenre = false
        let isNotValidMoviePlot = false
        let isNotValidMovieRuntime = false
        let isNotValidMovieYear = false
        let isNotValidMovieDirector = false
        let isNotValidMovieImdbRating = false

        // conditions for error messages

        if(!this.state.imdbID.match("[Tt][Tt][0-9]+"))
        {
          INVALID_MOVIE_ID_MSG += "Enter a valid Movie Id e.g TT012345"
          formErrors.push(INVALID_MOVIE_ID_MSG)
          isNotValidMovieId = true
        }
        if(!this.state.Title.match("^[a-zA-Z0-9_ ]{2,30}$"))
        {
          INVALID_TITLE_MSG += "Enter a valid Movie Title (range 2-30 characters)"
          formErrors.push(INVALID_TITLE_MSG)
          isNotValidMovieTitle = true
        }
        if(!this.state.Genre.match("^[a-zA-Z0-9_ ]{2,30}$"))
        {
          INVALID_GENRE_MSG += "Enter a valid Movie Genre (range 2-30 characters)"
          formErrors.push(INVALID_GENRE_MSG)
          isNotValidMovieGenre = true
        }
        if(!this.state.Plot.match("^[a-zA-Z0-9_ ]{2,200}$"))
        {
          INVALID_PLOT_MSG += "Enter a valid Movie Plot (range 2-200 characters)"
          formErrors.push(INVALID_PLOT_MSG)
          isNotValidMoviePlot = true
        }
        if(!this.state.Runtime.match("^[0-9]{2,3} [m][i][n]$"))
        {
          INVALID_RUNTIME_MSG += "Enter a valid Movie Runtime e.g 90 min or 120 min"
          formErrors.push(INVALID_RUNTIME_MSG)
          isNotValidMovieRuntime = true
        }
        if(!this.state.Year.match("(?:(?:19|20)[0-9]{2})"))
        {
          INVALID_YEAR_MSG += "Enter a valid Movie Year (range 1900-2099)"
          formErrors.push(INVALID_YEAR_MSG)
          isNotValidMovieYear = true
        }
        if(this.state.Director.length < 2 || !this.state.Director.match("^[A-Za-z\\s]+$"))
        {
          INVALID_DIRECTOR_MSG += "Enter a valid Movie Director e.g Michael Jackson"
          formErrors.push(INVALID_DIRECTOR_MSG)
          isNotValidMovieDirector = true
        }
        if(!this.state.imdbRating.match("^([0-9]|1[0])$"))
        {
          INVALID_IMDB_RATING_MSG += "Enter a valid IMDB Rating (1-10)"
          formErrors.push(INVALID_IMDB_RATING_MSG)
          isNotValidMovieImdbRating = true
        }

        return (
            <form className={classes.root} noValidate autoComplete="off" >
              <div>
                <TextField
                  error={isNotValidMovieId}
                  required
                  name="movieId"
                  label="Movie Id"
                  placeholder="Enter Movie ID..."
                  variant="outlined"
                  value={this.state.imdbID}
                  onChange={e => this.setState({imdbID: e.target.value})}
                  helperText={INVALID_MOVIE_ID_MSG}
                  id="standard-error-helper-text"    
                />
    
                <TextField
                  error={isNotValidMovieTitle}
                  required
                  name="movieTitle"
                  label="Movie Title"
                  placeholder="Enter Movie Title..."
                  variant="outlined"
                  value={this.state.Title}
                  onChange={e => this.setState({Title: e.target.value})}
                  helperText={INVALID_TITLE_MSG}
                  id="standard-error-helper-text"
                />
    
                <TextField
                  error={isNotValidMovieGenre}
                  required                
                  name="movieGenre"
                  label="Movie Genre"
                  placeholder="Enter Movie Genre..."
                  variant="outlined"
                  value={this.state.Genre}
                  onChange={e => this.setState({Genre: e.target.value})}
                  helperText={INVALID_GENRE_MSG}
                  id="standard-error-helper-text"
                />
    
                <TextField
                  error={isNotValidMoviePlot}
                  required 
                  name="moviePlot"
                  label="Movie Plot"
                  placeholder="Enter Movie Plot..."
                  variant="outlined"
                  multiline={true}
                  fullWidth={true}
                  value={this.state.Plot}
                  onChange={e => this.setState({Plot: e.target.value})}
                  helperText={INVALID_PLOT_MSG}
                  id="standard-error-helper-text"
                />
    
                <TextField
                  error={isNotValidMovieRuntime}
                  required 
                  name="movieRuntime"
                  label="Movie Runtime"
                  placeholder="Enter Movie Runtime..."
                  variant="outlined"
                  value={this.state.Runtime}
                  onChange={e => this.setState({Runtime: e.target.value})}
                  helperText={INVALID_RUNTIME_MSG}
                  id="standard-error-helper-text"
                  />
    
                <TextField
                  error={isNotValidMovieYear}
                  required 
                  name="movieYear"
                  label="Movie Year"
                  placeholder="Enter Movie Year..."
                  variant="outlined"
                  value={this.state.Year}
                  onChange={e => this.setState({Year: e.target.value})}
                  helperText={INVALID_YEAR_MSG}
                  id="standard-error-helper-text"
                />

                <TextField
                  error={isNotValidMovieDirector}
                  required 
                  name="movieDirector"
                  label="Movie Director"
                  placeholder="Enter Movie Year..."
                  variant="outlined"
                  value={this.state.Director}
                  onChange={e => this.setState({Director: e.target.value})}
                  helperText={INVALID_DIRECTOR_MSG}
                  id="standard-error-helper-text"
                />

                <TextField
                  error={isNotValidMovieImdbRating}
                  required 
                  name="movieImdbRating"
                  label="IMDB Rating"
                  placeholder="Enter Movie Year..."
                  variant="outlined"
                  value={this.state.imdbRating}
                  onChange={e => this.setState({imdbRating: e.target.value})}
                  helperText={INVALID_IMDB_RATING_MSG}
                  id="standard-error-helper-text"
                />
    
              <Button variant="primary" value="Submit" onClick={() => this.onSubmit(formErrors)} >
                Submit
              </Button>
              
              </div>
            </form>
          )
    }
}

export default withStyles(styles)(AddMovieForm);