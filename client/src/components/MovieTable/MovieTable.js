import React, {Component} from 'react';
import TableRow from '../MovieTable/TableRow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import '../../scss/styles.scss';

export default class MovieTable extends Component 
{
    render() 
    {
        const tableRows = this.props.movies.map((movie) =>
        <TableRow 
        key={movie.imdbID} 
        movies={movie} 
        onSubmitPlot={plot => this.props.onSubmitPlot(plot)} 
        remove={() => this.props.remove(movie.imdbID)}
        />)

        return (
            <table id="myTable">
                <thead>
                    <tr>
                        <th>Title
                            <FontAwesomeIcon icon={faSort}
                            className="tableSortIcons"
                            size="lg" 
                            color="black"
                            onClick={() => this.props.sortMyTable("Title")}/>
                        </th>
                        <th>Year
                        <FontAwesomeIcon icon={faSort}
                            className="tableSortIcons"
                            size="lg" 
                            color="black"
                            onClick={() => this.props.sortMyTable("Year")}/>
                        </th>
                        <th>Runtime
                        <FontAwesomeIcon icon={faSort}
                            className="tableSortIcons"
                            size="lg" 
                            color="black"
                            onClick={() => this.props.sortMyTable("Runtime")}/>
                        </th>
                        <th>Genre
                        <FontAwesomeIcon icon={faSort}
                            className="tableSortIcons"
                            size="lg" 
                            color="black"
                             onClick={() => this.props.sortMyTable("Genre")}/>
                        </th>
                        <th>IMDB Rating
                        <FontAwesomeIcon icon={faSort}
                            className="tableSortIcons"
                            size="lg" 
                            color="black"
                            onClick={() => this.props.sortMyTable("imdbRating")}/>
                        </th>
                        <th>More Info</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                  
                <tbody>
                    {tableRows} 
                </tbody>
            </table>      
        ) 
    }
}