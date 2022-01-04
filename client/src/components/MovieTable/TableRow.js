import React, {Component} from 'react';
import ModalBoxMovieInfo from '../Modal/ModalBoxMovieInfo';
import ModalBoxEdit from '../Modal/ModalBoxEdit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import '../../scss/styles.scss';

export default class TableRow extends Component {

    render()
    {
        return(
        <tr>
            <td data-label="Movie">{this.props.movies.Title}</td>
            <td data-label="Year">{this.props.movies.Year}</td>
            <td data-label="Runtime">{this.props.movies.Runtime}</td>
            <td data-label="Genre">{this.props.movies.Genre}</td>
            <td data-label="IMDB Rating">{this.props.movies.imdbRating}</td>
            <td data-label="More Info">
                <ModalBoxMovieInfo 
                movieId={this.props.movies.imdbID} 
                movieTitle={this.props.movies.Title} 
                moviePlot={this.props.movies.Plot} 
                director={this.props.movies.Director}
                />
            </td>

            <td data-label="Edit">
                <ModalBoxEdit 
                movieId={this.props.movies.imdbID} 
                movieTitle={this.props.movies.Title} 
                moviePlot={this.props.movies.Plot} 
                director={this.props.movies.Director} 
                onSubmitPlot={plot => this.props.onSubmitPlot(plot)}
                />
            </td>
            <td data-label="Delete">
                <FontAwesomeIcon 
                icon={faMinusCircle}
                className="faIconsHover"
                size="lg" 
                color="crimson"
                value={this.props.movies.imdbID}
                onClick={this.props.remove}
                />
            </td>
        </tr>
        );
    }  
}

