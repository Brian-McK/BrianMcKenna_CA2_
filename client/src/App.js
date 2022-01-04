import React, {Component} from 'react';
import "./App.css";
import DisplayMovieRecords from './components/DisplayMovieRecords';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component 
{
    render() 
    {
        return (
        <div>
            <DisplayMovieRecords/>
        </div>)
    }
}